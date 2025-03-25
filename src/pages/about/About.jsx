const About = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      <header className="mb-16 text-center">
        <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-indigo-700 bg-clip-text text-transparent">About Us</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto">
          Discover our journey, mission, and the values that drive us.
        </p>
      </header>

      <section className="mb-12 bg-gradient-to-br from-white to-blue-50 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-4 text-blue-800">Our Story</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Founded in 2020, our company began as a small startup with a big
          vision. Over the years, we have grown into a trusted leader in the
          industry, driven by our passion for innovation and our commitment to
          excellence.
        </p>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
          mollis eros non turpis luctus, at varius ex tincidunt. Integer nec
          consequat erat. Curabitur consequat, eros vitae interdum consequat,
          risus odio efficitur quam, sed efficitur erat risus ut nibh.
        </p>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Our journey is defined by hard work, perseverance, and the belief that
          technology can transform lives. We continue to push boundaries and
          explore new horizons, always keeping our customers at the heart of
          everything we do.
        </p>
      </section>

      <section className="mb-12 bg-white p-8 rounded-2xl shadow-md border-l-4 border-indigo-500">
        <h2 className="text-3xl font-semibold mb-4 text-indigo-700">Our Mission</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Our mission is to empower individuals and organizations by providing
          innovative solutions that drive growth and foster meaningful
          connections. We are committed to delivering excellence in every
          project, ensuring that our clients achieve their fullest potential.
        </p>
        <p className="mb-4 text-gray-700 leading-relaxed">
          Vivamus quis vehicula nisi. Nam in ante eu orci congue cursus at in
          turpis. Sed euismod lacus sed purus mollis, in consequat magna
          porttitor. Praesent consequat orci nec lectus porta, a semper lacus
          pulvinar.
        </p>
      </section>

      <section className="mb-12 bg-white p-8 rounded-2xl shadow-md border-l-4 border-blue-500">
        <h2 className="text-3xl font-semibold mb-4 text-blue-700">Our Vision</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          We envision a future where technology seamlessly integrates into
          everyday life, making it more efficient, enjoyable, and accessible for
          everyone. Our vision is to continuously innovate and lead in the
          digital era, shaping the world through cutting-edge solutions.
        </p>
      </section>

      <section className="mb-12 bg-gradient-to-tr from-indigo-50 to-blue-50 p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-semibold mb-6 text-blue-800">Our Values</h2>
        <ul className="space-y-4 text-gray-700">
          <li className="p-4 bg-white rounded-lg shadow-sm flex items-start">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-blue-700 font-bold">I</span>
            </div>
            <div>
              <strong className="text-blue-700">Innovation:</strong> We are committed to creating
              breakthrough solutions that drive progress.
            </div>
          </li>
          <li className="p-4 bg-white rounded-lg shadow-sm flex items-start">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-indigo-700 font-bold">I</span>
            </div>
            <div>
              <strong className="text-indigo-700">Integrity:</strong> Transparency and honesty form the
              foundation of our business.
            </div>
          </li>
          <li className="p-4 bg-white rounded-lg shadow-sm flex items-start">
            <div className="w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-purple-700 font-bold">E</span>
            </div>
            <div>
              <strong className="text-purple-700">Excellence:</strong> We strive for the highest quality in
              every aspect of our work.
            </div>
          </li>
          <li className="p-4 bg-white rounded-lg shadow-sm flex items-start">
            <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-blue-700 font-bold">C</span>
            </div>
            <div>
              <strong className="text-blue-700">Collaboration:</strong> We believe in the power of teamwork
              and strong partnerships.
            </div>
          </li>
          <li className="p-4 bg-white rounded-lg shadow-sm flex items-start">
            <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
              <span className="text-indigo-700 font-bold">P</span>
            </div>
            <div>
              <strong className="text-indigo-700">Passion:</strong> Our enthusiasm fuels our creativity and
              drives our success.
            </div>
          </li>
        </ul>
      </section>

      <section className="mb-8 bg-white p-8 rounded-2xl shadow-md">
        <h2 className="text-3xl font-semibold mb-4 text-blue-800">Contact Us</h2>
        <p className="mb-4 text-gray-700 leading-relaxed">
          If you have any questions or would like to learn more about us, please
          feel free to get in touch at{" "}
          <a href="mailto:info@example.com" className="text-blue-600 hover:text-blue-800 transition-colors duration-300">
            info@example.com
          </a>
          .
        </p>
      </section>
    </div>
  );
};

export default About;
