const PrivacyPolicy = () => {
  return (
    <div className="text-neutral-900 px-6 py-10 md:py-[70px] font-sans w-full container mx-auto">
      {/* Page Title */}
      <h1 className="text-3xl md:text-5xl font-bold mb-2">
        Privacy Policy - Mentor &amp; Student Communication Tracking
      </h1>

      {/* Sub Title */}
      <h2 className="text-2xl font-semibold mb-4 mt-10">Privacy Policy</h2>
      <p className="text-sm text-neutral-400 mb-8">
        Effective Date: February 17, 2025
      </p>

      {/* 1. Introduction */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">1. Introduction</h3>
        <p className="text-base leading-relaxed">
          Lumiere Education ("Company," "we," "our," or "us") is committed to
          safeguarding the privacy and security of contractor data. This Privacy
          Policy outlines our practices regarding the collection, use, and
          protection of email data accessed through the Gmail API. By using our
          services, contractors (mentors) consent to the processing of their
          email data as described in this policy.
        </p>
      </section>

      {/* 2. Scope of Data Collection */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">
          2. Scope of Data Collection
        </h3>
        <p className="text-base leading-relaxed mb-4">
          As part of our internal operational processes, we access specific
          email data of our contractors (mentors) solely for the purpose of
          monitoring response times and ensuring effective communication within
          our programs. Specifically, we:
        </p>
        <ul className="list-disc list-inside ml-4 text-base leading-relaxed">
          <li>
            Access only emails that involve a Lumiere stakeholder (students,
            program managers, parents), while filtering out all other
            communications.
          </li>
          <li>
            Collect metadata such as timestamps indicating when an email was
            sent or received.
          </li>
          <li>
            Access the body of an email only if it has not received a response
            within 24 hours.
          </li>
        </ul>
      </section>

      {/* 3. Purpose of Data Usage */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">3. Purpose of Data Usage</h3>
        <p className="text-base leading-relaxed mb-4">
          The information collected is utilized exclusively for internal
          operational purposes, including:
        </p>
        <ul className="list-disc list-inside ml-4 text-base leading-relaxed">
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

      {/* 4. Data Retention and Deletion */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">
          4. Data Retention and Deletion
        </h3>
        <p className="text-base leading-relaxed mb-4">
          Lumiere Education adheres to strict data retention policies to ensure
          compliance with applicable regulations:
        </p>
        <ul className="list-disc list-inside ml-4 text-base leading-relaxed">
          <li>
            All accessed email data and metadata are retained for a maximum of
            24 hours.
          </li>
          <li>
            Data is automatically deleted after 24 hours, except for emails
            shared with program managers when the response time exceeds 24
            hours.
          </li>
          <li>
            Employees cannot request earlier deletion due to operational
            requirements.
          </li>
        </ul>
      </section>

      {/* 5. Data Sharing and Access */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">
          5. Data Sharing and Security Measures
        </h3>
        <p className="text-base leading-relaxed">
          We do not share email data with third parties. Access to email data is
          limited to:
        </p>
        <ul className="list-disc list-inside ml-4 text-base leading-relaxed">
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
        <p className="text-base leading-relaxed my-2">
          We employ the following security measures to protect collected data:
        </p>
        <ul className="list-disc list-inside ml-4 text-base leading-relaxed">
          <li>
            Utilization of the Nylas API, which ensures secure handling and
            transmission of email data.
          </li>
          <li>
            Temporary storage in Airtable, which is compliant with GDPR and all
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

      {/* 6. Data Security Measures */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">
          6. Contractor Rights and Revocation of Consent
        </h3>
        <p className="text-base leading-relaxed">
          Lumiere Education provides contractors with transparency regarding
          data access and processing. However, participation in this system is a
          requirement for fulfilling contractual obligations. Revocation of
          consent will result in non-compliance with the terms of engagement,
          meaning contractors cannot continue as mentors unless they provide
          consent. Contractors may revoke authorization for email access by
          submitting a formal request to contact@lumiere.education****.
        </p>
      </section>

      {/* 7. Compliance with Regulations */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">
          7. Compliance with Legal and Regulatory Requirements
        </h3>
        <p className="text-base leading-relaxed">
          Lumiere Education is committed to compliance with all applicable laws
          and regulations, including:
        </p>
        <ul className="list-disc list-inside ml-4 text-base leading-relaxed">
          <li>
            <span className="font-bold">Google’s Limited Use Policy</span>,
            which restricts the use of accessed Gmail data to provide
            user-facing features without being used for advertising, shared with
            unauthorized third parties, or sold. More details on Google's
            Limited Use Policy can be found here.
          </li>
        </ul>
      </section>

      {/* 8. Consent */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">
          8. Updates to This Privacy Policy
        </h3>
        <p className="text-base leading-relaxed">
          We may update this Privacy Policy periodically to reflect changes in
          our practices, legal requirements, or regulatory obligations. Any
          substantial modifications will be communicated to contractors via
          email or other official channels. The "Effective Date" at the top of
          this policy indicates the latest revision.
        </p>
      </section>

      {/* 9. Changes to This Privacy Policy */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">9. Contact Information</h3>
        <p className="text-base leading-relaxed">
          For any questions or concerns regarding this Privacy Policy or data
          processing practices, contractors may contact us at:
        </p>
      </section>

      {/* 10. Contact Information */}
      <section className="mb-8">
        <h3 className="text-xl font-semibold mb-2">Lumiere Education</h3>
        <p className="text-base leading-relaxed">
          Email:{" "}
          <a href="mailto:contact@lumiere.education">
            contact@lumiere.education
          </a>
        </p>
        <p className="text-base leading-relaxed">
          By continuing to use our services, employees acknowledge that they
          have read, understood, and agreed to the terms of this Privacy Policy.
        </p>
      </section>
    </div>
  );
};

export default PrivacyPolicy;
