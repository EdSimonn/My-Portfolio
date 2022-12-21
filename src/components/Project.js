import React from "react";
import { FiFolder, FiGithub, FiExternalLink } from "react-icons/fi";
import { project } from "../data";

const Project = () => {
  return (
    <div
      name="works"
      className="w-full h-full md:h-screen text-gray-300 bg-[#100720] "
    >
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full ">
        <div className="pb-8">
          <h1 className="text-4xl font-bold text-gray-200 border-pink-600">
            PROJECTS
          </h1>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 ">
          {project.map((info) => (
            <a href={info.demo} target="_blank" rel="noreferrer">
              <div className="shadow-lg shadow-[#040c16] group container rounded-md overflow-hidden mx-auto card hover:scale-y-110 duration-500">
                <div className="p-5">
                  <div
                    name="icons"
                    className=" flex align-center justify-between gap-2 mb-5 "
                  >
                    <FiFolder size={40} style={{ color: "#D81B60" }} />

                    <div className="flex gap-2 mt-3">
                      <a
                        className="icons"
                        href={info.git}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FiGithub
                          size={25}
                          onMouseOver={({ target }) =>
                            (target.style.color = "#D81B60")
                          }
                          onMouseOut={({ target }) =>
                            (target.style.color = "#fff")
                          }
                        />
                      </a>
                      <a
                        className="icons"
                        href={info.demo}
                        target="_blank"
                        rel="noreferrer"
                      >
                        <FiExternalLink
                          size={25}
                          onMouseOver={({ target }) =>
                            (target.style.color = "#D81B60")
                          }
                          onMouseOut={({ target }) =>
                            (target.style.color = "#fff")
                          }
                        />
                      </a>
                    </div>
                  </div>
                  <a href={info.demo} target="_blank" rel="noreferrer">
                    <h3
                      name="titie"
                      className="mb-3 text-2xl font-bold cursor-pointer hover:text-pink-600"
                    >
                      {info.name}
                    </h3>
                  </a>
                  <p className="mb-5">{info.desc}</p>
                  <div name="badge" className=" flex">
                    <h3 className="tracking-widest">{info.tools}</h3>
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
