import logo from "../assets/kevinRushLogo.png";
import curriculum from "./curriculum.pdf";
import { FaLinkedin, FaGithub, FaWhatsapp } from "react-icons/fa";
import { MdOutlineMail } from "react-icons/md";
import { SiGoogledocs } from "react-icons/si";

const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <img className="mx-2 w-12" src={logo} alt="logo" />
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-5xl">
        <a
          href="https://www.linkedin.com/in/gabrielmatina/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          title="LinkedIn"
          alt="Linkedin"
          className="group"
        >
          <FaLinkedin className="transition-transform duration-200 ease-in-out group-hover:text-blue-600 group-hover:scale-110" />
        </a>
        <a
          href="https://github.com/gabrielmatina"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
          alt="GitHub"
          className="group"
        >
          <FaGithub className="transition-transform duration-200 ease-in-out group-hover:text-gray-600 group-hover:scale-110" />
        </a>
        <a
          href="mailto:gabrielmatina@hotmail.com"
          aria-label="Email"
          title="Email"
          alt="Email"
          className="group"
        >
          <MdOutlineMail className="transition-transform duration-200 ease-in-out group-hover:text-red-600 group-hover:scale-110" />
        </a>
        <a
          href="https://wa.me/5531994779072"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="WhatsApp"
          title="WhatsApp"
          alt="WhatsApp"
          className="group"
        >
          <FaWhatsapp className="transition-transform duration-200 ease-in-out group-hover:text-green-600 group-hover:scale-110" />
        </a>
        <a
          href={curriculum}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Curriculum"
          title="Curriculum"
          alt="Curriculum"
          className="group"
        >
          <SiGoogledocs className="transition-transform duration-200 ease-in-out group-hover:text-blue-600 group-hover:scale-110" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
