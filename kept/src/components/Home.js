import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn, textVariant } from "../utils/motion";

const Home = () => {
  return (
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      name="home"
      className="w-full h-screen bg-[#100720]"
    >
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full ">
        <motion.p
          variants={fadeIn("up", "tween", 0.1, 1)}
          className="custom text-pink-600 mb-6"
        >
          Hola, my name is
        </motion.p>
        <motion.h1
          variants={textVariant(0.2)}
          className="text-white text-4xl sm:text-7xl font-bold text-gray mb-6"
        >
          Simon Edusi.
        </motion.h1>
        <motion.h1
          variants={textVariant(0.3)}
          className="text-white text-4xl sm:text-7xl font-bold text-gray mb-6"
        >
          I'm a Web Developer.
        </motion.h1>
        <motion.p
          variants={fadeIn("up", "tween", 0.4, 1)}
          className="text-gray-400 py-4 max-w-[700px] mb-6"
        >
          Specializing mostly in frontend development. I give life to beautiful
          UI/UX design through codes, using the right front-end web technologies
          and techniques to create fast and responsive websites.
        </motion.p>
        <motion.div variants={fadeIn("up", "tween", 0.5, 1)}>
          <button className="text-pink-600 border-pink-600 border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-black hover:text-white duration-500">
            View Resume
            <span className="group-hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Home;
