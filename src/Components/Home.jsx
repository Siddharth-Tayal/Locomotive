import { motion } from "framer-motion";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { TiTickOutline } from "react-icons/ti";
import { IoCalendarNumberSharp } from "react-icons/io5";
import { GrGithub, GrGroup, GrInstagram, GrLinkedin } from "react-icons/gr";
import { FaArrowCircleDown, FaTelegram, FaWhatsapp } from "react-icons/fa";
import Countup from "react-countup";
import Me from "../assets/Me-removebg.png";
function Home() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.9"
      className=" h-fit md:h-screen pt-[60px] md:pt-0  bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5lIw4FZ_UL38X85GgNDRTpGCNjYjsFg_XYA&usqp=CAU')]"
    >
      {" "}
      <div className=" h-[100%] w-[100%] flex flex-col items-center justify-evenly py-10 px-6">
        <div className=" flex flex-col md:flex-row items-center justify-between w-[90%] gap-[15px] md:gap-[50px]">
          <div>
            <motion.div
              initial={{ x: 5000 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className=" flex flex-col items-star gap-2 text-4xl font-bold text-black pb-10"
            >
              <p className="">Hi There ,</p>{" "}
              <p className="">
                I'm Siddharth <span className=" text-orange-500">Tayal</span>{" "}
              </p>
            </motion.div>
            <motion.p
              initial={{ x: -5000 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className=" md:text-xl text-black pb-10 gap-2 flex flex-col items-start justify-center whitespace-nowrap"
            >
              <p className=" flex items-center justify-center gap-2">
                <span className=" text-orange-500"> I am into</span>
                <Typewriter
                  words={[
                    "UI / UX Designing",
                    "MERN Stack Developement",
                    "C / C++ Programming",
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="__"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </p>
              <div className=" flex items-center justify-start gap-9">
                {" "}
                <a
                  href="#about"
                  className=" flex items-center justify-center gap-2 py-2 px-3 rounded-full bg-blue-500 text-white"
                >
                  About Me <FaArrowCircleDown />
                </a>{" "}
                <a
                  href="#about"
                  className=" flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-[#FA7F5C] text-white"
                >
                  Skills <FaArrowCircleDown />
                </a>
              </div>
            </motion.p>
            <div className=" hidden md:flex items-center text-3xl gap-3">
              <a href="" className=" rounded-full p-3 bg-blue-500 text-white">
                {" "}
                <GrLinkedin />{" "}
              </a>
              <a href="" className=" rounded-full p-3 bg-blue-500 text-white">
                {" "}
                <GrInstagram />{" "}
              </a>
              <a href="" className=" rounded-full p-3 bg-blue-500 text-white">
                {" "}
                <GrGithub />{" "}
              </a>
              <a href="" className=" rounded-full p-3 bg-blue-500 text-white">
                {" "}
                <FaTelegram />{" "}
              </a>
              <a href="" className=" rounded-full p-3 bg-blue-500 text-white">
                {" "}
                <FaWhatsapp />{" "}
              </a>
            </div>
          </div>
          <div className=" flex flex-col gap-3">
            <img
              src={Me}
              // bg-[#FA7F5C]
              className=" rounded-full h-[250px] lg:h-[350px] bg-transparent w-[250px] lg:w-[350px] border-[#FA7F5C] border-b-[10px] "
              alt=""
            />
            <div className=" flex md:hidden items-center text-3xl gap-3">
              <a href="" className=" rounded-full p-3 bg-blue-500 text-white">
                {" "}
                <GrLinkedin />{" "}
              </a>
              <a href="" className=" rounded-full p-3 bg-blue-500 text-white">
                {" "}
                <GrInstagram />{" "}
              </a>
              <a href="" className=" rounded-full p-3 bg-blue-500 text-white">
                {" "}
                <GrGithub />{" "}
              </a>
              <a href="" className=" rounded-full p-3 bg-blue-500 text-white">
                {" "}
                <FaTelegram />{" "}
              </a>
              <a href="" className=" rounded-full p-3 bg-blue-500 text-white">
                {" "}
                <FaWhatsapp />{" "}
              </a>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-evenly flex-wrap gap-[50px] md:w-[70%]">
          <div className=" flex flex-col items-center justify-center text-black gap-2">
            <TiTickOutline className=" text-4xl md:text-6xl" />
            <div className="flex items-center justify-center gap-1 ">
              <Countup
                className=" text-3xl font-semibold"
                start={0}
                end={25}
                duration={5}
              />
              <p className="text-3xl font-semibold">+</p>
            </div>
            <p className=" text-sm sm:text-base">Projects Completed</p>
          </div>{" "}
          <div className=" flex flex-col items-center justify-center text-black gap-2">
            <IoCalendarNumberSharp className=" text-4xl md:text-6xl" />
            <div className="flex items-center justify-center gap-1 ">
              <Countup
                className="text-3xl font-semibold"
                start={0}
                end={2}
                duration={5}
              />
              <p className="text-3xl font-semibold">+</p>
            </div>
            <p className=" text-sm sm:text-base">Year Experience</p>
          </div>{" "}
          <div className=" flex flex-col items-center justify-center text-black gap-2">
            <GrGroup className=" text-4xl md:text-6xl" />
            <div className="flex items-center justify-center gap-1 ">
              <Countup
                className="text-3xl font-semibold"
                start={0}
                end={10}
                duration={5}
              />
              <p className="text-3xl font-semibold">+</p>
            </div>
            <p className=" text-sm sm:text-base">Total Clients</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
