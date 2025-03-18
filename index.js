const express = require("express");
const Airtable = require("airtable");
const axios = require("axios");
const cron = require("node-cron");
const crypto = require("crypto");

const app = express();
const PORT = process.env.PORT || 3000;
const NYLAS_API_KEY = process.env.NYLAS_API_KEY;
const NYLAS_CLIENT_ID = process.env.NYLAS_CLIENT_ID;
const AIRTABLE_API_KEY = process.env.AIRTABLE_API_KEY;
const BASE_ID = "appK9HemdsQBzVefU";
const NYLAS_BASE_ID = "app2geTmc1KrBARxV";
const ENCRYPTION_KEY = Buffer.from(process.env.ENCRYPTION_KEY, "hex"); // Must be 32 bytes
const IV_LENGTH = 16; // AES block size

const airtable = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(BASE_ID);
const airtableWatched = new Airtable({ apiKey: AIRTABLE_API_KEY }).base(NYLAS_BASE_ID);

app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));
app.use("/webhooks/nylas", express.raw({ type: "application/json", limit: "10mb" }));

function encrypt(text) {
    let iv = crypto.randomBytes(IV_LENGTH);
    let cipher = crypto.createCipheriv("aes-256-cbc", Buffer.from(ENCRYPTION_KEY), iv);
    let encrypted = cipher.update(text);
    encrypted = Buffer.concat([encrypted, cipher.final()]);
    return iv.toString("hex") + ":" + encrypted.toString("hex");
}

function decrypt(text) {
    let textParts = text.split(":");
    let iv = Buffer.from(textParts[0], "hex");
    let encryptedText = Buffer.from(textParts[1], "hex");
    let decipher = crypto.createDecipheriv("aes-256-cbc", Buffer.from(ENCRYPTION_KEY), iv);
    let decrypted = decipher.update(encryptedText);
    decrypted = Buffer.concat([decrypted, decipher.final()]);
    return decrypted.toString();
}

app.get("/oauth/exchange", async (req, res) => {  
  console.log("Received callback from Nylas");  
  const code = req.query.code;  

  if (!code) {  
    res.status(400).send("No authorization code returned from Nylas");  
    return;  
  }  

  try {  
      const response = await axios.post('https://api.us.nylas.com/v3/connect/token', {
            client_id: NYLAS_CLIENT_ID,
            client_secret: NYLAS_API_KEY, 
            grant_type: "authorization_code",
            code: code,
            redirect_uri: "https://mentor-communication-lumiere.replit.app/oauth/exchange",
            code_verifier: "nylas"
          }, {
            headers: {
              'Content-Type': 'application/json'
            }
          });
    const { grantId } = response;  
    const encryptedGrantId = encrypt(grantId);
    console.log(encryptedGrantId);  

    res.json({  
     message: "Thank you for signing up!"  
    });  
  } catch (error) {  
      console.error("❌ Error exchanging:", error);
    res.status(500).send("Thank you for signing up!");  
  }  
});

// app.get('/webhooks/nylas', (req, res) => {
//   if (req.query.challenge) {
//     console.log(`Received challenge code! - ${req.query.challenge}`);
//     return res.send(req.query.challenge);
//   }
// });

// Handle Nylas Webhook Events (POST)
app.post("/webhooks/nylas", async (req, res) => {
    console.log("📩 Received webhook event from Nylas");
    res.status(200).send("Webhook received");

    let fromAddress, grantId, threadId, timestamp;
    try {
        const rawBody = req.body instanceof Buffer ? req.body.toString("utf8") : JSON.stringify(req.body);
        if (!rawBody.trim()) throw new Error("Empty request body");
        const parsedBody = JSON.parse(rawBody); 
        fromAddress = parsedBody.data.object.from[0].email;
        grantId = parsedBody.data.object.grant_id;
        threadId = parsedBody.data.object.thread_id;
        timestamp = parsedBody.time.toString();
    } catch (error) {
        console.error("❌ Error processing webhook:", error.message);
        // return res.status(500).send(`Internal Server Error: ${error.message}`);
    }

    const encryptedGrantId = encrypt(grantId);
    let mentorRecord, mentorEmail, studentEmails;
    try {
        mentorRecord = await airtable("Mentor Table").select({
            filterByFormula: `{Grant ID} = '${encryptedGrantId}'`
        }).firstPage();

        mentorEmail = mentorRecord[0].fields["Mentor Email"];
        studentEmails = mentorRecord[0].fields["Student, Parent Emails - NYLAS"] || [];
    } catch (error) {
        console.log("Couldn't get mentor record");
    }

    if (!studentEmails.includes(fromAddress)) {
        console.log("🔹 Sender is not a student");
    } else {
        try {
            await airtableWatched("Watched Emails").create({
                "Mentor Email": mentorEmail,
                "Student Email": fromAddress,
                "Thread ID": threadId,
                "Grant ID": encryptedGrantId,
                "Last Student Email Timestamp": timestamp,
                "Status": "Pending Mentor Response"
            });
            console.log("✅ Created record in Watched Emails table");
        } catch (error) {
            console.error("❌ Error creating record in Watched Emails:", error);
        }
    }
});

// Check for unanswered student emails every 6 hours
cron.schedule("0 */6 * * *", async () => {
    const eighteenHoursAgo = (Date.now() / 1000) - (3 * 60 * 60);
    const records = await airtableWatched("Watched Emails").select({ view: "Grid view" }).all();

    for (const record of records) {
        let decryptedGrantId = decrypt(record.fields["Grant ID"]);

        if (record.fields["Last Student Email Timestamp"] > eighteenHoursAgo) {
            try {
                const response = await axios.get(`https://api.us.nylas.com/v3/grants/${decryptedGrantId}/threads/${record.fields["Thread ID"]}`, {
                    headers: {
                        Authorization: `Bearer ${NYLAS_API_KEY}`,
                        'Content-Type': 'application/json',
                        'Accept': 'application/json'
                    }
                });

                const latestSender = response.data.data.latest_draft_or_message.from[0].email;
                if (latestSender !== record.fields["Student Email"]) {
                    await airtable("Watched Emails").destroy(record.id);
                    console.log("🗑️ Removed record from Watched Emails");
                } else {
                    await airtableWatched("Watched Emails").update(record.id, { "Status": "No Response (Red Flag)" });
                }
            } catch (error) {
                console.error("❌ Error fetching thread:", error);
            }
        }
    }
});


async function getUsersWithEncryptedGrantIds() {
    try {
        const response = await axios.get("https://api.us.nylas.com/v3/grants", {
            headers: { Authorization: `Bearer ${NYLAS_API_KEY}` }
        });

        if (!response.data || !response.data.data) {
            throw new Error("Invalid response from Nylas API");
        }

        const users = response.data.data.map(user => ({
            user_id: user.email,
            encrypted_grant_id: encrypt(user.grant_id || "")
        }));

        return users;
    } catch (error) {
        console.error("Error fetching users:", error.message);
        return [];
    }
}

// API Route to Get Encrypted Grant IDs
app.get("/users/encrypted-grant-ids", async (req, res) => {
    const users = await getUsersWithEncryptedGrantIds();
    res.json(users);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
