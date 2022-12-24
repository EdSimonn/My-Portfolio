import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { FiMail } from "react-icons/fi";
import { Link } from "react-scroll";
import { motion } from "framer-motion";
import { navVariants } from "../utils/motion";

const Nav = () => {
  var prevScrollpos = window.pageYOffset;
  window.onscroll = function () {
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
      document.getElementById("navbar").style.top = "0";
    } else {
      document.getElementById("navbar").style.top = "-100px";
    }
    prevScrollpos = currentScrollPos;
  };

  const [open, setOpen] = useState(false);
  const handleClick = () => setOpen(!open);

  return (
    <motion.div
      variants={navVariants}
      initial="hidden"
      whileInView="show"
      id="navbar"
      className="shadow-md fixed w-full top-0 left-0 opacity-85"
    >
      <div className="md:flex items-center justify-between bg-[#100720] py-6 md:px-10 px-7">
        <div className="font-bold text-2xl cursor-pointer flex items-center text-pink-600">
          <a href="/">
            <div className="custom"> EdSimon</div>
          </a>
        </div>
        <div
          onClick={() => setOpen(!open)}
          className="text-2xl absolute right-8 top-6 cursor-pointer md:hidden"
        >
          {open ? (
            <FaTimes style={{ color: "#d81b60" }} />
          ) : (
            <FaBars style={{ color: "#d81b60" }} />
          )}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-12 absolute md:static bg-[#100720] text-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${
            open ? "top-20 " : "top-[-490px]"
          }`}
        >
          <li className="md:ml-[-4] md:my-0 my-7 hover:text-pink-600 duration-500">
            <Link onClick={handleClick} to="home" smooth={true} duration={500}>
              HOME
            </Link>
          </li>
          <li className="md:ml-8 md:my-0 my-7 hover:text-pink-600 duration-500">
            <Link onClick={handleClick} to="about" smooth={true} duration={500}>
              ABOUT
            </Link>
          </li>
          <li className="md:ml-8 md:my-0 my-7 hover:text-pink-600 duration-500">
            <Link
              onClick={handleClick}
              to="skills"
              smooth={true}
              duration={500}
            >
              SKILLS
            </Link>
          </li>
          <li className="md:ml-8 md:my-0 my-7 hover:text-pink-600 duration-500">
            <Link onClick={handleClick} to="works" smooth={true} duration={500}>
              PROJECTS
            </Link>
          </li>
          <li className="md:ml-8 md:my-0 my-7 hover:text-pink-600 duration-500">
            <Link
              onClick={handleClick}
              to="contact"
              smooth={true}
              duration={500}
            >
              CONTACT
            </Link>
          </li>
        </ul>

        <div className="hidden lg:flex fixed flex-col top-[35%] left-0 text-white">
          <ul>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-900">
              <a
                className="flex justify-between items-center w-full"
                href="https://www.linkedin.com/in/simon-edusi"
                target="_blank"
                rel="noreferrer"
              >
                Linkedin <FaLinkedin size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#000000]">
              <a
                className="flex justify-between items-center w-full"
                href="https://github.com/EdSimonn"
                target="_blank"
                rel="noreferrer"
              >
                Github <FaGithub size={30} />
              </a>
            </li>
            <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-700">
              <a
                className="flex justify-between items-center w-full"
                href="mailto:simon25edusi@gmail.com"
              >
                Gmail <FiMail size={30} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Nav;
