import React from "react";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer, slideIn } from "../utils/motion";

const About = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      name="about"
      className="w-full h-screen bg-[#100720] text-gray-300"
    >
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <motion.div
            variants={slideIn("right", "tween", 0.2, 1)}
            className="sm:text-right pb-8 pl-4"
          >
            <h1 className="text-4xl font-bold border-pink-600 text-gray-200">
              ABOUT
            </h1>
          </motion.div>
        </div>
        <div></div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <motion.div
            variants={fadeIn("right", "tween", 0.2, 1)}
            className="sm:text-right text-3xl font-bold"
          >
            <p>
              Hey there! I'm Edusi Simon, nice to meet you. Please take a look
              around, you just might like what you see.
            </p>
          </motion.div>
          <motion.div variants={fadeIn("left", "tween", 0.2, 1)}>
            <p className="">
              I'm a youtube/self taught software developer who loves creating
              amazing products for the web.
              <p className="sm:mt-4">
                You'll probably catch me watch movies, gaming, listening to
                music or reading comic books, whenever I'm not coding
              </p>
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default About;