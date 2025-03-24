import { MdEmail } from "react-icons/md";

const TermsOfService = () => {
  return (
    <div className="text-neutral-900 container mx-auto px-6 py-10 md:py-[70px] font-sans">
      {/* Page Title */}
      <h1 className="text-3xl md:text-5xl font-bold mb-2">Terms of Service</h1>
      <h2 className="text-2xl font-semibold mb-4 mt-10">Terms of Service</h2>
      <p className="text-sm text-neutral-400 mb-8">
        Effective Date: March 24, 2025
      </p>

      <p className="text-base leading-relaxed mb-6">
        Welcome to the <strong>Mentor Communication App</strong> (the “App”),
        operated by <strong>Lumiere Education</strong> (“we,” “our,” or “us”).
        These Terms of Service (“Terms”) govern your use of the App and related
        services.
      </p>
      <p className="text-base leading-relaxed mb-6">
        By using this App, you agree to these Terms. If you do not agree, do not
        use the App.
      </p>

      {/* 1. Overview */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">1. Overview</h3>
        <p className="text-base leading-relaxed">
          The Mentor Communication App is a tool developed by Lumiere Education
          to track and analyze communication between students, their mentors,
          and Lumiere staff. Its primary goal is to ensure timely and
          professional mentorship support across our programs.
        </p>
      </section>

      {/* 2. Eligibility */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">2. Eligibility</h3>
        <p className="text-base leading-relaxed">
          Access to this App is limited to{" "}
          <strong>Lumiere Education employees</strong> only. Unauthorized users
          are strictly prohibited from accessing or using this App.
        </p>
      </section>

      {/* 3. Gmail Access & Use of Google API Services */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">
          3. Gmail Access &amp; Use of Google API Services
        </h3>
        <p className="text-base leading-relaxed mb-4">
          The App requests access to your Gmail account using the{" "}
          <strong>Gmail API</strong>, specifically with the{" "}
          <code className="bg-neutral-100 text-[#EB5757] px-1 py-0.5 rounded">
            gmail.readonly
          </code>{" "}
          scope.
        </p>
        <h4 className="text-base font-semibold mb-2">What We Access:</h4>
        <p className="text-base leading-relaxed mb-4">
          We access the following <strong>only for emails relevant</strong> to
          mentor-student communication:
        </p>
        <ul className="list-disc list-inside ml-4 text-base leading-relaxed mb-4">
          <li>Sender and recipient email addresses</li>
          <li>Subject lines</li>
          <li>Timestamps</li>
          <li>
            <strong>Body content of emails</strong> between students and mentors
            or Lumiere staff
          </li>
        </ul>
        <p className="text-base leading-relaxed mb-4">
          All other emails are filtered and excluded from access and analysis.
        </p>
        <p className="text-base leading-relaxed">
          We do <strong>not</strong> access, store, or process irrelevant
          personal or professional emails outside the scope of the program.
        </p>
      </section>

      {/* 4. Data Usage and Storage */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">
          4. Data Usage and Storage
        </h3>
        <p className="text-base leading-relaxed mb-4">
          We process and securely store metadata and email content{" "}
          <strong>only</strong> for relevant communications. Specifically:
        </p>
        <ul className="list-disc list-inside ml-4 text-base leading-relaxed mb-4">
          <li>
            We use this data to track mentor response times, message volume, and
            quality assurance
          </li>
          <li>The data is stored in secure servers with limited access</li>
          <li>
            Data is not sold, shared, or used for any purpose outside of Lumiere
            program operations
          </li>
        </ul>
      </section>

      {/* 5. Revoking Access */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">5. Revoking Access</h3>
        <p className="text-base leading-relaxed mb-4">
          You may revoke the App’s access to your Gmail account at any time by:
        </p>
        <ul className="list-disc list-inside ml-4 text-base leading-relaxed mb-4">
          <li>Visiting your Google Account permissions page</li>
          <li>
            Or contacting us directly at{" "}
            <strong>contact@lumiere.education</strong>
          </li>
        </ul>
        <p className="text-base leading-relaxed mb-4">
          Upon revocation, access will immediately cease. You may also request
          deletion of previously processed data.
        </p>
      </section>

      {/* 6. User Responsibilities */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">6. User Responsibilities</h3>
        <p className="text-base leading-relaxed">
          You agree to use the App only for its intended purpose. You agree not
          to:
        </p>
        <ul className="list-disc list-inside ml-4 text-base leading-relaxed">
          <li>Misuse or interfere with the App’s functionality</li>
          <li>Attempt to extract or access non-permitted information</li>
          <li>Reverse engineer, duplicate, or repurpose the App</li>
        </ul>
      </section>

      {/* 7. Changes to the Terms */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">7. Changes to the Terms</h3>
        <p className="text-base leading-relaxed">
          We may update these Terms from time to time. Updates will be posted at{" "}
          <a
            href="https://mentor-communication-z4sq.vercel.app/"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://mentor-communication-z4sq.vercel.app
          </a>
          . Continued use of the App after changes means you accept the revised
          Terms.
        </p>
      </section>

      {/* 8. Disclaimers */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">8. Disclaimers</h3>
        <p className="text-base leading-relaxed">
          The App is provided “as is” and “as available,” without warranties of
          any kind. We do not guarantee uninterrupted service or that all
          communications will be tracked without error.
        </p>
      </section>

      {/* 9. Limitation of Liability */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">
          9. Limitation of Liability
        </h3>
        <p className="text-base leading-relaxed">
          To the maximum extent permitted by law, Lumiere Education will not be
          liable for any indirect, incidental, or consequential damages related
          to your use of the App.
        </p>
      </section>

      {/* 10. Governing Law */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">10. Governing Law</h3>
        <p className="text-base leading-relaxed">
          These Terms are governed by the laws of the State of Delaware, United
          States.
        </p>
      </section>

      {/* 11. Contact Us */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">11. Contact Us</h3>
        <p className="text-base leading-relaxed mb-4">
          For any questions or concerns about these Terms or to revoke access:
        </p>
        <p className="text-base leading-relaxed mb-2">
          <strong>📧 Email:</strong>{" "}
          <a
            href="mailto:contact@lumiere.education"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            contact@lumiere.education
          </a>
        </p>
        <p className="text-base leading-relaxed">
          <strong>🌐 Website:</strong>{" "}
          <a
            href="https://mentor-communication-z4sq.vercel.app/"
            className="underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://mentor-communication-z4sq.vercel.app
          </a>
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
