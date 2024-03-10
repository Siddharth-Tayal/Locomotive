import { motion } from "framer-motion";
import React from "react";
import AboutMe from "../Components/AboutMe";
import Skills from "./Skills";
function Marquee() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed=".00001"
      className=" bg-[#004D43]"
    >
      <div className=" z-10 w-full py-10 rounded-t-3xl bg-[#004D43]">
        <div className="text border-t-2 border-b-2 w-full  py-10 border-zinc-300 flex items-center px-3 overflow-hidden">
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
            className=" text-3xl pr-20 md:text-6xl uppercase font-bold text-white whitespace-nowrap"
          >
            Frontend Developer{" "}
          </motion.h1>{" "}
          <motion.h1
            initial={{ x: 0 }}
            animate={{ x: "-100%" }}
            transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
            className=" text-3xl pr-20 md:text-6xl uppercase font-bold text-white whitespace-nowrap"
          >
            Backend Developer{" "}
          </motion.h1>{" "}
          {/* <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 4 }}
          className=" text-3xl pr-20 md:text-6xl uppercase font-bold text-white whitespace-nowrap"
        >
          Full Stack Developer{" "}
        </motion.h1>{" "} */}
        </div>
      </div>
      <AboutMe />
      {/* <Skills /> */}
    </div>
  );
}

export default Marquee;
