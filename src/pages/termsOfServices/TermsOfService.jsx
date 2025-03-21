const TermsOfService = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <header className="mb-8">
        <h1 className="text-5xl font-bold text-center mb-4">
          Terms of Service
        </h1>
        <p className="text-center text-lg text-gray-700">
          Please read these Terms of Service carefully before using our website.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">1. Introduction</h2>
        <p className="mb-4 text-gray-600">
          Welcome to our website. These Terms of Service ("Terms") govern your
          use of our website. By accessing or using our site, you agree to be
          bound by these Terms.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">2. Acceptance of Terms</h2>
        <p className="mb-4 text-gray-600">
          By using our website, you acknowledge that you have read, understood,
          and agree to be bound by these Terms. If you do not agree to these
          Terms, please do not use our website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">3. User Responsibilities</h2>
        <p className="mb-4 text-gray-600">
          You agree to use our website only for lawful purposes and in a way
          that does not infringe the rights of, restrict, or inhibit anyone
          else's use and enjoyment of the website.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">4. Proprietary Rights</h2>
        <p className="mb-4 text-gray-600">
          All content on this website, including text, graphics, logos, and
          images, is the property of our company or its content suppliers and is
          protected by intellectual property laws.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          5. Disclaimer of Warranties
        </h2>
        <p className="mb-4 text-gray-600">
          Our website is provided "as is" without any representations or
          warranties, express or implied. We do not warrant that the website
          will be error-free or uninterrupted.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          6. Limitation of Liability
        </h2>
        <p className="mb-4 text-gray-600">
          In no event shall our company be liable for any damages arising out of
          or in connection with your use of the website. This includes, without
          limitation, direct, indirect, incidental, punitive, and consequential
          damages.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">7. Governing Law</h2>
        <p className="mb-4 text-gray-600">
          These Terms shall be governed by and construed in accordance with the
          laws of [Your Country/State], without giving effect to any principles
          of conflicts of law.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">8. Changes to Terms</h2>
        <p className="mb-4 text-gray-600">
          We reserve the right to modify or replace these Terms at any time. It
          is your responsibility to review these Terms periodically for any
          changes. Your continued use of the website following the posting of
          any changes constitutes acceptance of those changes.
        </p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">9. Contact Information</h2>
        <p className="mb-4 text-gray-600">
          If you have any questions about these Terms, please contact us at{" "}
          <a href="mailto:info@example.com" className="text-primary underline">
            info@example.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default TermsOfService;
