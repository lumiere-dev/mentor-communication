const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <header className="mb-8">
        <h1 className="text-5xl font-bold text-center mb-4">About Us</h1>
        <p className="text-center text-lg text-gray-700">
          Discover our journey, mission, and the values that drive us.
        </p>
      </header>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Our Story</h2>
        <p className="mb-4">
          Founded in 2020, our company began as a small startup with a big
          vision. Over the years, we have grown into a trusted leader in the
          industry, driven by our passion for innovation and our commitment to
          excellence.
        </p>
        <p className="mb-4">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          mollis eros non turpis luctus, at varius ex tincidunt. Integer nec
          consequat erat. Curabitur consequat, eros vitae interdum consequat,
          risus odio efficitur quam, sed efficitur erat risus ut nibh.
        </p>
        <p className="mb-4">
          Our journey is defined by hard work, perseverance, and the belief that
          technology can transform lives. We continue to push boundaries and
          explore new horizons, always keeping our customers at the heart of
          everything we do.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="mb-4">
          Our mission is to empower individuals and organizations by providing
          innovative solutions that drive growth and foster meaningful
          connections. We are committed to delivering excellence in every
          project, ensuring that our clients achieve their fullest potential.
        </p>
        <p className="mb-4">
          Vivamus quis vehicula nisi. Nam in ante eu orci congue cursus at in
          turpis. Sed euismod lacus sed purus mollis, in consequat magna
          porttitor. Praesent consequat orci nec lectus porta, a semper lacus
          pulvinar.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Our Vision</h2>
        <p className="mb-4">
          We envision a future where technology seamlessly integrates into
          everyday life, making it more efficient, enjoyable, and accessible for
          everyone. Our vision is to continuously innovate and lead in the
          digital era, shaping the world through cutting-edge solutions.
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Our Values</h2>
        <ul className="list-disc list-inside mb-4 text-gray-800">
          <li>
            <strong>Innovation:</strong> We are committed to creating
            breakthrough solutions that drive progress.
          </li>
          <li>
            <strong>Integrity:</strong> Transparency and honesty form the
            foundation of our business.
          </li>
          <li>
            <strong>Excellence:</strong> We strive for the highest quality in
            every aspect of our work.
          </li>
          <li>
            <strong>Collaboration:</strong> We believe in the power of teamwork
            and strong partnerships.
          </li>
          <li>
            <strong>Passion:</strong> Our enthusiasm fuels our creativity and
            drives our success.
          </li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-3xl font-semibold mb-4">Contact Us</h2>
        <p className="mb-4">
          If you have any questions or would like to learn more about us, please
          feel free to get in touch at{" "}
          <a href="mailto:info@example.com" className="text-primary underline">
            info@example.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default About;
