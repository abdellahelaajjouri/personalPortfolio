import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-scroll";
function Navbar() {
  // add state to toggle the navbar
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between px-4  items-center bg-[#0a192f] ">
      <Link to="home" smooth={true} duration={500}>
        <div className="cursor-pointer">
          <img src={Logo} alt="Logo Image" style={{ width: "65px" }} />
        </div>
      </Link>

      {/* Menu */}

      {/* Anything above medium should be displayed */}
      <ul className="hidden md:flex">
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li>
          <Link to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div className="md:hidden cursor-pointer z-10" onClick={handleClick}>
        {nav ? <FaTimes /> : <FaBars />}
      </div>

      {/* Mobile Menu */}
      {/* Anything above medium should be hide */}
      <ul
        className={
          nav
            ? " absolute top-0 left-0 w-full h-screen flex flex-col justify-center items-center bg-[#0a192f]"
            : "hidden"
        }
      >
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social Icons */}
      <div className="hidden lg:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[45px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              href="https://www.linkedin.com/in/abdellah-elaajjouri-890583230/"
              target="_blank"
              className="flex justify-between items-center w-full "
            >
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[45px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              href="https://github.com/abdellahelaajjouri"
              target="_blank"
              className="flex justify-between items-center w-full 
              "
            >
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[45px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              href="https://mail.google.com/mail/u/?authuser=abdellah.elaajjouri@gmail.com "
              target="_blank"
              className="flex justify-between items-center w-full"
            >
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[45px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300">
            <a
              href="https://drive.google.com/file/d/1lZ3jtVSRxPY9QqsvMBoTeqVP1rQf9Znn/view?usp=sharing"
              target="_blank"
              className="flex justify-between items-center w-full"
            >
              Resume <BsFillPersonFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
