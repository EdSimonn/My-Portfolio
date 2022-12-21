import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#100720] text-gray-300">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <h1 className="text-4xl font-bold border-pink-600 text-gray-200">
              ABOUT
            </h1>
          </div>
        </div>
        <div></div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-3xl font-bold">
            <p>
              Hey there! I'm Edusi Simon, nice to meet you. Please take a look
              around, you just might like what you see.
            </p>
          </div>
          <div>
            <p className="">
              I'm a youtube/self taught software developer who loves creating
              amazing products for the web.
              <p className='sm:mt-4'>
                You'll probably catch me watch movies, gaming, listening to
                music or reading comic books, whenever I'm not coding
              </p>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
