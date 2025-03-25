import { Link, useLocation } from "react-router-dom";

const pages = [
  {
    title: "Home",
    link: "/",
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
    <header className="w-full bg-primary shadow-md">
      <section className="container mx-auto flex items-center justify-between h-[70px] px-4">
        <Link to="/" className="text-white font-bold text-sm md:text-base">
          <span className="bg-gradient-to-r from-blue-100 to-indigo-100 bg-clip-text text-transparent">Lumiere</span> <span className="font-normal">Education</span>
        </Link>
        <div className="flex items-center gap-8">
          {pages.map((page, i) =>
            page.link === "/login" ? (
              <Link
                to={page.link}
                key={i}
                className="bg-orange-300 px-5 py-1 rounded-sm text-black/75 text-sm md:text-base font-medium"
              >
                {page.title}
              </Link>
            ) : (
              <Link
                to={page.link}
                key={i}
                className={`text-sm md:text-base font-medium ${
                  pathname === page.link ? "text-orange-300" : "text-white"
                }`}
              >
                {page.title}
              </Link>
            )
          )}
        </div>
      </section>
    </header>
  );
};

export default Header;
