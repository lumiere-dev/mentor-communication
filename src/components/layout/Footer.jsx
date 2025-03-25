import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

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

const Footer = () => {
  return (
    <footer className="w-full bg-[#f0f0f0]">
      <section className="container mx-auto px-5 py-8 md:py-10 grid place-items-center">
        <div className="w-full max-w-[700px] mx-auto">
          <h4 className="text-center text-gray-900 font-semibold">
            Lumiere Education | Mentor Communication
          </h4>
          <p className="text-sm text-gray-700 text-center my-5">
            Lumiere Education's Mentor Communication platform facilitates seamless 
            interaction between mentors and students. Our secure system ensures 
            timely responses to student queries through intelligent monitoring 
            and notifications, enhancing the educational experience for both 
            mentors and students.
          </p>
          <div className="flex items-center justify-center gap-4 md:gap-8">
            <Link to="">
              <FaFacebookF className="text-primary text-xl" />
            </Link>
            <Link to="">
              <FaInstagram className="text-primary text-xl" />
            </Link>
            <Link to="">
              <FaLinkedin className="text-primary text-xl" />
            </Link>
            <Link to="">
              <FaYoutube className="text-primary text-xl" />
            </Link>
          </div>
        </div>
      </section>
      <div className="mt-10 w-full bg-[#c9c9c9] py-4 ">
        <section className="container mx-auto px-5 flex items-center justify-between">
          <p className="text-xs text-gray-800">
            Copyright © 2023{" "}
            <Link to="/" className="text-primary">
              Lumiere Education
            </Link>
          </p>
          <div className="flex items-center gap-4">
            {pages.map((page, i) => (
              <Link to={page.link} key={i} className={`text-xs font-normal`}>
                {page.title}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
