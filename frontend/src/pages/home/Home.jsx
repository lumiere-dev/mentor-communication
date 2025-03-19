const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8 md:py-16">
      {/* Hero Section */}
      <header className="mb-12 text-center">
        <h1 className="text-5xl font-bold mb-4">Welcome to Our Website</h1>
        <p className="text-lg text-gray-600">
          Your one-stop solution for innovative services and exceptional
          experiences.
        </p>
      </header>

      {/* Mission Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Our Mission</h2>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec
          odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla
          quis sem at nibh elementum imperdiet.
        </p>
      </section>

      {/* Services Section */}
      <section className="mb-12">
        <h2 className="text-3xl font-semibold mb-4">Featured Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Service One</h3>
            <p className="text-gray-600">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Service Two</h3>
            <p className="text-gray-600">
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="p-4 border border-gray-200 rounded-lg">
            <h3 className="text-xl font-bold mb-2">Service Three</h3>
            <p className="text-gray-600">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco
              laboris.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
