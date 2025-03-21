import { Link, useLocation } from "react-router-dom";

const pages = [
  {
    title: "Home",
    link: "/",
  },
  {
    title: "About Us",
    link: "/about",
  },
  {
    title: "Terms of Service",
    link: "/terms-of-service",
  },
];

const Header = () => {
  const { pathname } = useLocation();
  return (
    <header className="w-full bg-primary">
      <section className="container mx-auto flex items-center justify-between h-[70px]">
        <Link to="/" className="text-white font-bold text-sm md:text-base">
          Mentor <span className="font-normal">Communication</span>
        </Link>
        <div className="flex items-center gap-4">
          {pages.map((page, i) => (
            <Link
              to={page.link}
              key={i}
              className={`text-sm md:text-base font-medium ${
                pathname === page.link ? "text-orange-300" : "text-white"
              }`}
            >
              {page.title}
            </Link>
          ))}
        </div>
      </section>
    </header>
  );
};

export default Header;
