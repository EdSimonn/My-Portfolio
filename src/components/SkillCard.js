import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const SkillCard = ({ name, img, index }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 1)}>
      <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
        <div className="p-1 shadow-md shadow-[#040c16] hover:scale-110 duration-500 bg-[#100720]">
          <img className="w-14 mx-auto" src={img} alt="skills" />
          <h3 className="py-2">{name}</h3>
        </div>
      </div>
    </motion.div>
  );
};

export default SkillCard;
