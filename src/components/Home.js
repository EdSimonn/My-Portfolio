import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#100720]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <p className="custom text-pink-600 mb-6">Hola, my name is</p>
        <h1 className="text-white text-4xl sm:text-7xl font-bold text-gray mb-6">
          Simon Edusi.
        </h1>
        <h1 className="text-white text-4xl sm:text-7xl font-bold text-gray mb-6">
          I'm a Web Developer.
        </h1>
        <p className="text-gray-400 py-4 max-w-[700px] mb-6">
          Specializing mostly in frontend development. I give life to beautiful
          UI/UX design through codes, using the right front-end web technologies
          and techniques to create fast and responsive websites.
        </p>
        <div>
          <button className="text-pink-600 border-pink-600 border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-black hover:text-white duration-500">
            View Resume
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
