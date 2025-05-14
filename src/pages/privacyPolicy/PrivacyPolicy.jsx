const PrivacyPolicy = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      {/* Header Section */}
      <header className="mb-16 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">Privacy Policy</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Effective Date: May 6, 2025
        </p>
      </header>

      {/* Introduction */}
      <section className="mb-12 bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-blue-800">Introduction</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Lumiere Education ("Company," "we," "our," or "us") is committed to
          safeguarding the privacy and security of contractor data. This Privacy
          Policy outlines our practices regarding the collection, use, and
          protection of email data accessed through the Gmail API.
        </p>
        <p className="text-gray-700 leading-relaxed">
          By using our services, contractors (mentors) consent to the processing of their
          email data as described in this policy.
        </p>
      </section>

      {/* Scope of Data Collection */}
      <section className="mb-12 bg-white p-8 rounded-2xl shadow-md border-l-4 border-blue-500">
        <h2 className="text-3xl font-semibold mb-6 text-blue-700">Scope of Data Collection</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          As part of our internal operational processes, we access specific
          email data of our contractors (mentors) solely for the purpose of
          monitoring response times and ensuring effective communication within
          our programs. Specifically, we:
        </p>
        <ul className="list-disc list-inside ml-4 mb-4 text-gray-700 space-y-2">
          <li>
            Access only emails that involve a Lumiere stakeholder (students,
            program managers, parents).
          </li>
          <li>
            Collect metadata such as timestamps indicating when an email was
            sent or received.
          </li>
          <li>
            Collect body and subject lines of relevant emails.
          </li>
        </ul>
      </section>

      {/* Purpose of Data Usage */}
      <section className="mb-12 bg-gradient-to-tr from-indigo-50 to-blue-50 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-blue-800">Purpose of Data Usage</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          The information collected is utilized exclusively for internal
          operational purposes, including:
        </p>
        <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">
          <li>
            Tracking response times to maintain prompt communication between
            mentors and stakeholders.
          </li>
          <li>
            Identifying unaddressed communications and facilitating follow-up by
            the designated program manager.
          </li>
          <li>
            Generating internal reports to assess and enhance communication
            efficiency.
          </li>
        </ul>
      </section>

      {/* Data Retention and Deletion */}
      <section className="mb-12 bg-white p-8 rounded-2xl shadow-md border-l-4 border-indigo-500">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-700">Data Retention and Deletion</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Lumiere Education adheres to strict data retention policies to ensure
          compliance with applicable regulations:
        </p>
        <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">
          <li>
            All accessed email data and metadata are retained for a period of 24 months.
          </li>
          <li>
            Contractors cannot request earlier deletion due to operational
            requirements.
          </li>
        </ul>
      </section>

      {/* Data Sharing and Security Measures */}
      <section className="mb-12 bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-blue-800">Data Sharing and Security Measures</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          We do not share email data with third parties. Access to email data is
          limited to:
        </p>
        <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2 mb-6">
          <li>
            Authorized program managers who receive emails that remain
            unresponded to for over 24 hours.
          </li>
          <li>
            Internal systems that temporarily process this data using the Nylas
            API and Airtable, both of which comply with industry-standard data
            security and privacy regulations.
          </li>
        </ul>
        <p className="mb-4 text-gray-700 leading-relaxed">
          We employ the following security measures to protect collected data:
        </p>
        <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">
          <li>
            Utilization of the Nylas API, which ensures secure handling and
            transmission of email data.
          </li>
          <li>
            Temporary storage in Airtable, which is compliant with GDPR and all
            other applicable data protection laws.
          </li>
          <li>
            Long term storage in Mongo DB, which is compliant with GDPR and all 
            other applicable data protection laws.
          </li>
          <li>
            Access controls restricting data to authorized personnel within the
            Company only.
          </li>
          <li>
            Regular training for program managers on responsible data handling.
          </li>
        </ul>
      </section>

      {/* Contractor Rights and Revocation of Consent */}
      <section className="mb-12 bg-white p-8 rounded-2xl shadow-md border-l-4 border-blue-500">
        <h2 className="text-3xl font-semibold mb-6 text-blue-700">Contractor Rights and Revocation of Consent</h2>
        <p className="text-gray-700 leading-relaxed">
          Lumiere Education provides contractors with transparency regarding
          data access and processing. However, participation in this system is a
          requirement for fulfilling contractual obligations. Revocation of
          consent will result in non-compliance with the terms of engagement,
          meaning contractors cannot continue as mentors unless they provide
          consent. Contractors may revoke authorization for email access by
          submitting a formal request to <a href="mailto:contact@lumiere.education" className="text-blue-600 hover:underline">contact@lumiere.education</a>.
        </p>
      </section>

      {/* Compliance with Regulations */}
      <section className="mb-12 bg-gradient-to-tr from-indigo-50 to-blue-50 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-blue-800">Compliance with Legal and Regulatory Requirements</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Lumiere Education is committed to compliance with all applicable laws
          and regulations, including:
        </p>
        <ul className="list-disc list-inside ml-4 text-gray-700 space-y-2">
          <li>
            <span className="font-bold">Google's Limited Use Policy</span>,
            which restricts the use of accessed Gmail data to provide
            user-facing features without being used for advertising, shared with
            unauthorized third parties, or sold.
          </li>
        </ul>
      </section>

      {/* Updates to This Privacy Policy */}
      <section className="mb-12 bg-white p-8 rounded-2xl shadow-md border-l-4 border-indigo-500">
        <h2 className="text-3xl font-semibold mb-6 text-indigo-700">Updates to This Privacy Policy</h2>
        <p className="text-gray-700 leading-relaxed">
          We may update this Privacy Policy periodically to reflect changes in
          our practices, legal requirements, or regulatory obligations. Any
          substantial modifications will be communicated to contractors via
          email or other official channels. The "Effective Date" at the top of
          this policy indicates the latest revision.
        </p>
      </section>

      {/* Contact Information */}
      <section className="mb-8 bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-blue-800">Contact Information</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          For any questions or concerns regarding this Privacy Policy or data
          processing practices, contractors may contact us at:
        </p>
        <div className="bg-white p-6 rounded-xl shadow-sm">
          <h3 className="text-xl font-semibold mb-4 text-blue-700">Lumiere Education</h3>
          <p className="text-gray-700 mb-2">
            Email:{" "}
            <a href="mailto:contact@lumiere.education" className="text-blue-600 hover:underline">
              contact@lumiere.education
            </a>
          </p>
          <p className="text-gray-700 mt-4 font-medium">
            By continuing to use our services, contractors acknowledge that they
            have read, understood, and agreed to the terms of this Privacy Policy.
          </p>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
