import React from "react";
import { data } from "../data";

const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen bg-[#100720] text-gray-300">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <h1 className="text-4xl font-bold border-pink-600 text-gray-200">
            SKILLS
          </h1>
          <p className="py-2">These are some languages I'm familiar with, </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          {data.map((logo) => (
            <div className="p-1 shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#100720]">
              <img className="w-14 mx-auto" src={logo.img} alt="" />
              <h3 className="py-2">{logo.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
