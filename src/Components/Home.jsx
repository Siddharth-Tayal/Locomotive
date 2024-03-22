import { motion } from "framer-motion";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
import { GrGithub, GrInstagram, GrLinkedin } from "react-icons/gr";
import {
  FaArrowCircleDown,
  FaHorseHead,
  FaLaptop,
  FaMobileAlt,
  FaTelegram,
  FaWhatsapp,
} from "react-icons/fa";
import Me from "../assets/Me-removebg.png";
import { SiGeeksforgeeks } from "react-icons/si";
function Home() {
  return (
    <div
      data-scroll
      data-scroll-section
      data-scroll-speed="-.9"
      className=" overflow-hidden h-fit md:h-screen pt-[40px] md:pt-0  bg-[url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR5lIw4FZ_UL38X85GgNDRTpGCNjYjsFg_XYA&usqp=CAU')]"
    >
      {" "}
      <div className=" h-[100%] w-[100%] flex flex-col items-center justify-evenly py-10 px-6">
        <div className=" w-full flex flex-col md:flex-row items-center justify-between md:w-[90%] gap-[5px] md:gap-[50px]">
          <div className=" w-full">
            <motion.div
              initial={{ x: 5000 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex flex-col items-center md:items-start gap-2 text-2xl min-[420px]:text-4xl font-bold text-black pb-3 min-[420px]:pb-10"
            >
              <p className="">Hi There ,</p>{" "}
              <p className="">
                I'm Siddharth <span className=" text-orange-500">Tayal</span>{" "}
              </p>
            </motion.div>
            <motion.p
              initial={{ x: -5000 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.75 }}
              className=" md:text-xl text-black md:pb-10 gap-2 flex flex-col items-center md:items-start justify-center whitespace-nowrap"
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
                  className=" flex items-center justify-center gap-2 py-2 px-3 rounded-full bg-blue-500 text-white duration-200 hover:text-blue-500 hover:bg-white border-2 border-transparent hover:border-blue-500"
                >
                  About Me <FaArrowCircleDown />
                </a>{" "}
                <a
                  href="#skills"
                  className=" scroll-smooth flex items-center justify-center gap-2 py-2 px-4 rounded-full bg-[#FA7F5C] text-white duration-200 border-2 border-transparent hover:bg-white hover:border-[#FA7F5C] hover:text-[#FA7F5C]"
                >
                  Skills <FaArrowCircleDown />
                </a>
              </div>
            </motion.p>
            <motion.div
              initial={{ y: 5000 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              className=" hidden md:flex flex-wrap items-center text-3xl gap-3"
            >
              <a
                href="https://www.linkedin.com/in/siddharth-tayal-65203a266/"
                className=" rounded-full p-3 bg-blue-500 text-white duration-300 hover:bg-[#FA7F5C] "
              >
                {" "}
                <GrLinkedin />{" "}
              </a>
              <a
                href="https://www.instagram.com/s_tayal_01/"
                className=" rounded-full p-3 bg-blue-500 text-white duration-300 hover:bg-[#FA7F5C] "
              >
                {" "}
                <GrInstagram />{" "}
              </a>
              <a
                href="https://github.com/Siddharth-Tayal"
                className=" rounded-full p-3 bg-blue-500 text-white duration-300 hover:bg-[#FA7F5C] "
              >
                {" "}
                <GrGithub />{" "}
              </a>
              <a
                href="https://auth.geeksforgeeks.org/user/siddharth_tayal/?utm_source=geeksforgeeks&utm_medium=colleges&utm_campaign=users"
                className=" rounded-full p-3 bg-blue-500 text-white duration-300 hover:bg-[#FA7F5C] "
              >
                {" "}
                <SiGeeksforgeeks />{" "}
              </a>
              <a
                href="whatsapp:contact=8813055897@s.whatsapp.com&message='I'd like to chat with you'"
                className=" rounded-full p-3 bg-blue-500 text-white duration-300 hover:bg-[#FA7F5C] "
              >
                {" "}
                <FaWhatsapp />{" "}
              </a>
            </motion.div>
          </div>
          <div className=" flex flex-col gap-3 items-center justify-center">
            <motion.img
              initial={{ x: 5000 }}
              animate={{ x: 0 }}
              transition={{ duration: 1 }}
              src={Me}
              className=" rounded-full h-[250px] lg:h-[350px] bg-transparent w-[250px] lg:w-[400px] border-[#FA7F5C] border-b-[6px] "
              alt=""
            />
            <motion.div
              initial={{ y: 5000 }}
              animate={{ y: 0 }}
              transition={{ duration: 1 }}
              className=" flex md:hidden flex-wrap items-center text-3xl gap-3"
            >
              <a
                href="https://www.linkedin.com/in/siddharth-tayal-65203a266/"
                className=" rounded-full p-3 bg-blue-500 text-white duration-300 hover:bg-[#FA7F5C] "
              >
                {" "}
                <GrLinkedin />{" "}
              </a>
              <a
                href="https://www.instagram.com/s_tayal_01/"
                className=" rounded-full p-3 bg-blue-500 text-white duration-300 hover:bg-[#FA7F5C] "
              >
                {" "}
                <GrInstagram />{" "}
              </a>
              <a
                href="https://github.com/Siddharth-Tayal"
                className=" rounded-full p-3 bg-blue-500 text-white duration-300 hover:bg-[#FA7F5C] "
              >
                {" "}
                <GrGithub />{" "}
              </a>
              <a
                href="https://auth.geeksforgeeks.org/user/siddharth_tayal/?utm_source=geeksforgeeks&utm_medium=colleges&utm_campaign=users"
                className=" rounded-full p-3 bg-blue-500 text-white duration-300 hover:bg-[#FA7F5C] "
              >
                {" "}
                <SiGeeksforgeeks />{" "}
              </a>
              <a
                href="whatsapp:contact=8813055897@s.whatsapp.com&message='I'd like to chat with you'"
                className=" rounded-full p-3 bg-blue-500 text-white duration-300 hover:bg-[#FA7F5C] "
              >
                {" "}
                <FaWhatsapp />{" "}
              </a>
            </motion.div>
          </div>
        </div>
        <div className="flex items-center justify-evenly flex-wrap pt-10 gap-[50px] md:w-[70%]">
          {/* <div className=" flex flex-col items-center justify-center text-[#FA7F5C] gap-2">
            <TiTickOutline className=" text-4xl md:text-6xl" />
            <div className="flex items-center justify-center gap-1 ">
              <Countup
                className=" text-xl md:text-3xl font-semibold"
                start={0}
                end={25}
                duration={5}
              />
              <p className="text-3xl font-semibold">+</p>
            </div>
            <p className=" text-sm sm:text-base">Projects Completed</p>
          </div>{" "}
          <div className=" flex flex-col items-center justify-center text-[#FA7F5C] gap-2">
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
          <div className=" flex flex-col items-center justify-center text-[#FA7F5C] gap-2">
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
          </div> */}
          <motion.div
            initial={{ x: -5000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className=" flex flex-col items-center justify-center gap-1 text-blue-500 font-semibold uppercase text-sm sm:text-base"
          >
            <FaLaptop className=" text-5xl text-[#FA7F5C]" />
            Web Designs
          </motion.div>{" "}
          <motion.div
            initial={{ y: 5000 }}
            animate={{ y: 0 }}
            transition={{ duration: 1 }}
            className=" flex flex-col items-center justify-center gap-1 text-blue-500 font-semibold uppercase text-sm sm:text-base"
          >
            <FaMobileAlt className=" text-5xl text-[#FA7F5C]" />
            Mobile Designs
          </motion.div>{" "}
          <motion.div
            initial={{ x: 5000 }}
            animate={{ x: 0 }}
            transition={{ duration: 1 }}
            className=" flex flex-col items-center justify-center gap-1 text-blue-500 font-semibold uppercase text-sm sm:text-base"
          >
            <FaHorseHead className=" text-5xl text-[#FA7F5C]" />
            Problem Solving
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default Home;
