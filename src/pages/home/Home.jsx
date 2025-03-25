import React from 'react';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      {/* Hero Section */}
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Lumiere Education</h1>
        <p className="text-lg text-gray-600">
          Connecting ambitious students with top-tier scholars for unparalleled research opportunities.
        </p>
      </header>

      {/* About Us Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">About Us</h2>
        <p className="text-gray-700 mb-4">
          Founded by Harvard and Oxford researchers, Lumiere Education is dedicated to providing high school students worldwide with access to research opportunities alongside top global scholars. Our flagship program, the Lumiere Research Scholar Program, enables students to work one-on-one with Ph.D. mentors, delve into cutting-edge topics, and produce independent research projects. :contentReference[oaicite:2]{index=2}
        </p>
        <p className="text-gray-700 mb-4">
          Our mission is to ensure that world-class research opportunities are accessible to students globally, breaking down traditional barriers and fostering a community of curious thinkers, passionate learners, and ambitious leaders. :contentReference[oaicite:3]{index=3}
        </p>
        <p className="text-gray-700">
          With a rapidly growing global community, Lumiere Education has facilitated over 4,200 applications from 62 countries, provided more than 22,000 mentor hours, and awarded over $390,000 in financial aid. :contentReference[oaicite:4]{index=4}
        </p>
      </section>
    </div>
  );
};

export default Home;
