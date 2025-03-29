import { convert } from "html-to-text";
import React, { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import toast from "react-hot-toast";
import { tableStyles } from "../../data/data";
import NotificationModal from "./NotificaionModal";
const correctNumber = 9986575060; 

const Notification = () => {
  const [modalOpen, setModalOpen] = useState(true);
  const [userInput, setUserInput] = useState("");
  const [emails, setEmails] = useState([]);

  const extractText = (email) => {
    const extractedText = convert(email, {
      wordwrap: false,
      ignoreImage: true,
      ignoreHref: true,
    });
    return extractedText;
  };
  const columns = [
    {
      name: "sender",
      selector: (row) => row.sender,
      maxWidth: "5rem",
    },
    {
      name: "Subject",
      selector: (row) => row.subject_line,
      maxWidth: "12rem",
    },
    {
      name: "Mentor email",
      selector: (row) => row.mentor_email,
      maxWidth: "13rem",
    },
    {
      name: "Student email",
      selector: (row) => row.student_email,
      maxWidth: "13rem",
    },
    {
      name: "email",
      selector: (row) => extractText(row.email_body),
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    if (parseInt(userInput) === correctNumber) setModalOpen(false);
    else toast.error("Incorrect number! Try again.");
  };

  const getAllNotifications = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_REACT_APP_SERVER_URL}/emails`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await response.json();
      setEmails(data || []);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getAllNotifications();
  }, []);

  return (
    <div className="container mx-auto py-10 md:py-[75px] px-5">
      <section className="bg-white rounded-lg border p-4 lg:p-5 shadow-sm">
        <div className="text-sm text-textColor font-semibold">Emails Summary</div>
        <DataTable
          data={emails}
          columns={columns}
          selectableRowsHighlight
          customStyles={tableStyles}
          fixedHeader
          fixedHeaderScrollHeight="70vh"
        />
      </section>

      {modalOpen && (
        <NotificationModal>
          <form className="p-6 text-center" onSubmit={handleSubmit}>
            <h2 className="text-lg font-semibold mb-4">Enter the Correct Number to Continue</h2>
            <input
              type="number"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
              className="border p-2 rounded w-full text-center outline-none"
              placeholder="Enter number"
            />
            <button type="submit" className="bg-primary text-white px-4 py-2 rounded mt-4 cursor-pointer">
              Submit
            </button>
          </form>
        </NotificationModal>
      )}
    </div>
  );
};

export default Notification;
