import React from "react";
import {
  FiGithub,
  FiInstagram,
  FiLinkedin,
  FiMail,
  FiTwitter,
} from "react-icons/fi";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen bg-[#100720] text-white">
      <div className="max-w-[700px] mx-auto p-6 flex flex-col justify-center items-center w-full h-full">
        <p className="custom text-pink-600 m-2 font-semibold">
          Want to connect?
        </p>
        <h1 className="text-3xl sm:text-6xl font-bold text-gray-200">
          Contact me
        </h1>
        <p className="m-6 text-center text-gray-300">
          Open to new and exciting opprtunities in the tech space, I always
          looking forward to connecting with like and unlike minds. You can also
          say hi, I’ll most likely respond.
        </p>
        <div className="mt-8">
          <a href="mailto:simon25edusi@gmail.com">
            <button className="text-pink-600 border-pink-600 border-2 px-6 py-3 my-2 flex items-center mb-20 hover:bg-pink-600 duration-500 hover:text-white hover:border-[#100720]">
              Send A Message
            </button>
          </a>
        </div>
        <div>
          <div className="flex py-4 mb-8 gap-8 ">
            <a
              className="hover:text-blue-700 duration-500"
              href="https://www.linkedin.com/in/simon-edusi"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin size={25} />
            </a>
            <a
              href="https://github.com/EdSimonn"
              target="_blank"
              rel="noreferrer"
              className="hover:text-black duration-500"
            >
              <FiGithub size={25} />
            </a>
            <a href="/" className="hover:text-[#964B00] duration-500">
              <FiInstagram size={25} />
            </a>
            <a href="/" className="hover:text-blue-500 duration-500">
              <FiTwitter size={25} />
            </a>
            <a
              href="mailto:simon25edusi@gmail.com"
              className="hover:text-red-700 duration-500"
            >
              <FiMail size={25} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
