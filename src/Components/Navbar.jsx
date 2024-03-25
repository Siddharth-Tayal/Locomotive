import React from "react";
import {
  FaArrowAltCircleUp,
  FaLongArrowAltUp,
  FaRProject,
} from "react-icons/fa";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <div className="bg-white backdrop-blur-lg fixed py-2 px-3 w-full top-0 left-0 font-mont z-10 shadow-[rgba(17,_17,_26,_0.1)_0px_0px_16px] flex items-center">
      <div className=" w-full md:max-w-screen-lg mx-auto flex justify-between items-center">
        <a
          className=" md:text-xl md:font-extrabold uppercase font-extrabold"
          href="#"
        >
          MERN<span className=" text-[#FA7F5C]">Developer</span>
        </a>
        <div className="flex md:gap-4 gap-2">
          <a
            href="#work"
            className="text-black border border-black md:px-3 md:py-1.5 rounded-sm px-1 py-1.5 text-[12px] md:text-[15px] font-sans font-medium flex items-center gap-1 md:gap-1.5"
          >
            <FaRProject /> My Work
          </a>
          <a
            className="bg-[#FA7F5C] text-white md:px-3 md:py-1.5 px-1 py-1.5 rounded-sm text-[12px] md:text-[15px] font-sans"
            href="#contact"
          >
            <span className="flex items-center justify-center gap-1">
              Hire Me <FaArrowAltCircleUp className=" rotate-45" />{" "}
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
