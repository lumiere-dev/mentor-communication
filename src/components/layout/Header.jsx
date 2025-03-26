import { Link, useLocation } from "react-router-dom";

const pages = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "Notification",
    link: "/notification",
  },
  {
    title: "Privacy Policy",
    link: "/privacy-policy",
  },
  {
    title: "Terms of Service",
    link: "/terms-of-service",
  },
  {
    title: "Login",
    link: "/login",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className="w-full bg-gradient-to-r from-indigo-900 to-blue-900 shadow-lg">
      <section className="container mx-auto flex items-center justify-between h-[80px] px-4">
        <Link to="/" className="flex items-center space-x-2">
          <span className="text-white font-bold text-xl md:text-2xl">
            <span className="bg-gradient-to-r from-amber-200 to-yellow-100 bg-clip-text text-transparent">
              Mentor
            </span>
            <span className="font-light text-white"> Communication</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center space-x-4">
          {pages.map((page, i) =>
            page.link === "/login" ? (
              <Link
                to={page.link}
                key={i}
                className="bg-gradient-to-r from-amber-400 to-orange-400 hover:from-amber-500 hover:to-orange-500 px-4 py-1.5 rounded-md text-indigo-900 text-sm font-medium transition-all duration-200 shadow-md hover:shadow-lg"
              >
                {page.title}
              </Link>
            ) : (
              <Link
                to={page.link}
                key={i}
                className={`text-sm font-medium hover:text-amber-200 transition-colors duration-200 relative ${
                  pathname === page.link ? "text-amber-300" : "text-gray-100"
                }`}
              >
                {page.title}
                {pathname === page.link && (
                  <span className="absolute bottom-[-8px] left-0 w-full h-[3px] bg-amber-300 rounded-full"></span>
                )}
              </Link>
            )
          )}
        </nav>
        <div className="md:hidden">
          {/* Mobile menu button could go here */}
          <button className="text-white">☰</button>
        </div>
      </section>
    </header>
  );
};

export default Header;
