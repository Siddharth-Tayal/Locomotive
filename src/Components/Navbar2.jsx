import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../assets/logo.png";
import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose } from "react-icons/gr";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
const MOBILE_NAV_ITEMS = [
  {
    id: 0,
    navTitle: "home",
    link: "/#",
  },
  {
    id: 1,
    navTitle: "about",
    link: "/#about",
  },
  {
    id: 2,
    navTitle: "skills",
    link: "/#skills",
  },
  {
    id: 3,
    navTitle: "work",
    link: "/#work",
  },
  {
    id: 4,
    navTitle: "contact",
    link: "/#contact",
  },
];
const App = () => {
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const hideNavItemsVariant = {
    opened: {
      opacity: 0,
      y: "-100%",
      transition: {
        duration: 0.5,
        ease: "easeInOut",
      },
    },
    closed: {
      opacity: 1,
      y: "0%",
      transition: {
        delay: 1.1,
        duration: 0.5,
        ease: "easeInOut",
      },
    },
  };
  const mobileMenuVariant = {
    opened: {
      y: "0%",
      transition: {
        delay: 0.15,
        duration: 1.1,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
    closed: {
      y: "-100%",
      transition: {
        delay: 0.35,
        duration: 0.63,
        ease: [0.74, 0, 0.19, 1.02],
      },
    },
  };
  const fadeInVariant = {
    opened: {
      opacity: 1,
      transition: {
        delay: 1.2,
      },
    },
    closed: { opacity: 0 },
  };
  const ulVariant = {
    opened: {
      transition: {
        delayChildren: 1,
        staggerChildren: 0.18,
      },
    },
    closed: {
      transition: {
        staggerChildren: 0.06,
        staggerDirection: -1,
      },
    },
  };
  const liVariant = {
    opened: {
      opacity: 1,
      y: "0%",
      transition: {
        duration: 0.65,
        ease: "easeOut",
      },
    },
    closed: {
      opacity: 0,
      y: "100%",
      transition: {
        duration: 0.25,
        ease: "easeInOut",
      },
    },
  };
  const fadeInStart = { opacity: 0 };
  const fadeInEnd = { opacity: 1 };
  const fadeInTransition = { duration: 1 };
  return (
    <motion.nav
      className="flex backdrop-blur-lg text-white items-center fixed z-[999] bg-transparent w-full top-0 left-0  justify-between px-[20px] md:px-[45px] py-3"
      initial="closed"
      animate={mobileNavOpen ? "opened" : "closed"}
    >
      <div className=" overflow-y-hidden">
        <a
          className="flex items-center gap-2 uppercase text-[20px]"
          variants={hideNavItemsVariant}
          href="/"
        >
          <motion.img
            initial={{ x: -100 }}
            animate={{ x: 0 }}
            loading="lazy"
            src={Logo}
            alt=" logo"
            class="h-9 w-9 object-contain"
          />
          <motion.h1
            initial={{ y: -50 }}
            animate={{ y: 0 }}
            class="flex cursor-pointer font-[Ojuju] text-[15px] sm:text-[20px] md:text-[30px] font-extrabold text-zinc-100 "
          >
            MERN Developer
          </motion.h1>
        </a>
      </div>
      <div className=" overflow-y-hidden">
        <motion.div
          className=" text-white uppercase text-[13px] hover:cursor-pointer"
          variants={hideNavItemsVariant}
          onClick={() => setMobileNavOpen(true)}
        >
          <GiHamburgerMenu className=" text-3xl hover:text-green-500 " />
        </motion.div>
      </div>
      <motion.div
        variants={mobileMenuVariant}
        className=" fixed top-0 left-0 z-[999] h-screen w-screen flex-col bg-[#cdea68] items-center"
      >
        <div className=" w-full flex items-center justify-end">
          <motion.button
            className=" self-end mr-[45px] mt-[35px] outline-none "
            variants={fadeInVariant}
            onClick={() => setMobileNavOpen(false)}
          >
            <GrClose className=" text-3xl font-extrabold hover:text-green-500" />
          </motion.button>
        </div>
        <motion.div
          variants={ulVariant}
          className=" flex flex-col items-center gap-4"
        >
          {MOBILE_NAV_ITEMS.map((navItem) => (
            <motion.a
              className=" text-2xl text-zinc-700 font-semibold uppercase hover:font-extrabold hover:text-green-900 duration-150"
              onClick={() => setMobileNavOpen(false)}
              variants={liVariant}
              href={navItem.link}
              whileTap={{ scale: 0.95 }}
              key={navItem.id}
            >
              <motion.div>{navItem.navTitle}</motion.div>
            </motion.a>
          ))}
        </motion.div>
        <motion.div
          variants={fadeInVariant}
          className=" mt-[80px] flex items-center justify-center gap-6 text-5xl"
        >
          <a href="">
            <FaLinkedin className=" text-blue-600 hover:opacity-65 duration-300" />
          </a>
          <a href="">
            <FaGithub className=" text-zinc-900 hover:opacity-65 duration-300" />
          </a>
          <a href="">
            <FaInstagram className=" text-purple-600 hover:opacity-65 duration-300" />
          </a>
        </motion.div>
      </motion.div>
    </motion.nav>
  );
};

export default App;
