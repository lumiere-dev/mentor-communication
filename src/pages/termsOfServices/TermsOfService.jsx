import { MdEmail } from "react-icons/md";

const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      {/* Header Section */}
      <header className="mb-16 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Terms of Service</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Effective Date: March 24, 2025
        </p>
      </header>

      {/* Introduction */}
      <section className="mb-12 bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg">
        <p className="mb-6 text-gray-700 leading-relaxed">
          Welcome to the <strong>Mentor Communication App</strong> (the "App"),
          operated by <strong>Lumiere Education</strong> ("we," "our," or "us").
          These Terms of Service ("Terms") govern your use of the App and related
          services.
        </p>
        <p className="text-gray-700 leading-relaxed">
          By using this App, you agree to these Terms. If you do not agree, do not
          use the App.
        </p>
      </section>

      {/* 1. Overview */}
      <section className="mb-12 bg-white p-8 rounded-2xl shadow-md border-l-4 border-blue-500">
        <h2 className="text-3xl font-semibold mb-6 text-blue-700">1. Overview</h2>
        <p className="text-gray-700 leading-relaxed">
          The Mentor Communication App is a tool developed by Lumiere Education
          to track and analyze communication between students, their mentors,
          and Lumiere staff. Its primary goal is to ensure timely and
          professional mentorship support across our programs.
        </p>
      </section>

      {/* 2. Eligibility */}
      <section className="mb-12 bg-gradient-to-tr from-indigo-50 to-blue-50 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-blue-800">2. Eligibility</h2>
        <p className="text-gray-700 leading-relaxed">
          Access to this App is limited to{" "}
          <strong>Lumiere Education employees</strong> only. Unauthorized users
          are strictly prohibited from accessing or using this App.
        </p>
      </section>

      {/* 3. Gmail Access & Use of Google API Services */}
      <section className="mb-12 bg-white p-8 rounded-2xl shadow-md border-l-4 border-indigo-500">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-700">3. Gmail Access & Use of Google API Services</h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          The App requests access to your Gmail account using the{" "}
          <strong>Gmail API</strong>, specifically with the{" "}
          <code className="bg-blue-50 text-blue-700 px-2 py-1 rounded text-sm">
            gmail.readonly
          </code>{" "}
          scope.
        </p>
        <h3 className="text-xl font-semibold mb-4 text-indigo-600">What We Access:</h3>
        <p className="mb-4 text-gray-700 leading-relaxed">
          We access the following <strong>only for emails relevant</strong> to
          mentor-student communication:
        </p>
        <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2 mb-6">
          <li>Sender and recipient email addresses</li>
          <li>Subject lines</li>
          <li>Timestamps</li>
          <li>
            <strong>Body content of emails</strong> between students and mentors
            or Lumiere staff
          </li>
        </ul>
        <p className="mb-4 text-gray-700 leading-relaxed">
          All other emails are filtered and excluded from access and analysis.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We do <strong>not</strong> access, store, or process irrelevant
          personal or professional emails outside the scope of the program.
        </p>
      </section>

      {/* 4. Data Usage and Storage */}
      <section className="mb-12 bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-blue-800">4. Data Usage and Storage</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          We process and securely store metadata and email content{" "}
          <strong>only</strong> for relevant communications. Specifically:
        </p>
        <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">
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
      <section className="mb-12 bg-white p-8 rounded-2xl shadow-md border-l-4 border-blue-500">
        <h2 className="text-3xl font-semibold mb-6 text-blue-700">5. Revoking Access</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          You may revoke the App's access to your Gmail account at any time by:
        </p>
        <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2 mb-6">
          <li>Visiting your Google Account permissions page</li>
          <li>
            Or contacting us directly at{" "}
            <a href="mailto:contact@lumiere.education" className="text-blue-600 hover:underline">
              contact@lumiere.education
            </a>
          </li>
        </ul>
        <p className="text-gray-700 leading-relaxed">
          Upon revocation, access will immediately cease. You may also request
          deletion of previously processed data.
        </p>
      </section>

      {/* 6. User Responsibilities */}
      <section className="mb-12 bg-gradient-to-tr from-indigo-50 to-blue-50 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-blue-800">6. User Responsibilities</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          You agree to use the App only for its intended purpose. You agree not
          to:
        </p>
        <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">
          <li>Misuse or interfere with the App's functionality</li>
          <li>Attempt to extract or access non-permitted information</li>
          <li>Reverse engineer, duplicate, or repurpose the App</li>
        </ul>
      </section>

      {/* 7. Changes to the Terms */}
      <section className="mb-12 bg-white p-8 rounded-2xl shadow-md border-l-4 border-indigo-500">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-700">7. Changes to the Terms</h2>
        <p className="text-gray-700 leading-relaxed">
          We may update these Terms from time to time. Updates will be posted at{" "}
          <a
            href="https://mentor-communication-z4sq.vercel.app/"
            className="text-blue-600 hover:underline"
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
      <section className="mb-12 bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-blue-800">8. Disclaimers</h2>
        <p className="text-gray-700 leading-relaxed">
          The App is provided "as is" and "as available," without warranties of
          any kind. We do not guarantee uninterrupted service or that all
          communications will be tracked without error.
        </p>
      </section>

      {/* 9. Limitation of Liability */}
      <section className="mb-12 bg-white p-8 rounded-2xl shadow-md border-l-4 border-blue-500">
        <h2 className="text-3xl font-semibold mb-6 text-blue-700">9. Limitation of Liability</h2>
        <p className="text-gray-700 leading-relaxed">
          To the maximum extent permitted by law, Lumiere Education will not be
          liable for any indirect, incidental, or consequential damages related
          to your use of the App.
        </p>
      </section>

      {/* 10. Governing Law */}
      <section className="mb-12 bg-gradient-to-tr from-indigo-50 to-blue-50 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-blue-800">10. Governing Law</h2>
        <p className="text-gray-700 leading-relaxed">
          These Terms are governed by the laws of the State of Delaware, United
          States.
        </p>
      </section>

      {/* 11. Contact Us */}
      <section className="mb-8 bg-white p-8 rounded-2xl shadow-md border-l-4 border-indigo-500">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-700">11. Contact Us</h2>
        <p className="mb-6 text-gray-700 leading-relaxed">
          For any questions or concerns about these Terms or to revoke access:
        </p>
        
        <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-6 rounded-xl shadow-sm">
          <div className="flex items-center mb-4">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
              <MdEmail className="text-blue-600 text-xl" />
            </div>
            <h3 className="text-xl font-semibold text-blue-700">Email</h3>
          </div>
          <p className="text-gray-700 mb-2 pl-2">
            <a href="mailto:contact@lumiere.education" className="text-blue-600 hover:underline">
              contact@lumiere.education
            </a>
          </p>
          
          <div className="mt-6 flex items-center mb-4">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-indigo-600" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clipRule="evenodd" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-indigo-700">Website</h3>
          </div>
          <p className="text-gray-700 pl-2">
            <a href="https://mentor-communication-z4sq.vercel.app/" className="text-blue-600 hover:underline" target="_blank" rel="noopener noreferrer">
              https://mentor-communication-z4sq.vercel.app
            </a>
          </p>
        </div>
      </section>
    </div>
  );
};

export default TermsOfService;