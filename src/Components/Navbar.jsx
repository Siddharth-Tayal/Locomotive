import React, { useState } from "react";
import Logo from "../assets/logo.png";
import { motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const variants = {
    open: { opacity: 1, x: 0 },
    closed: { opacity: 0, x: "-100%" },
  };

  const links = [
    {
      text: "home",
      link: "",
    },
    {
      text: "about",
      link: "about",
    },
    {
      text: "skills",
      link: "skills",
    },
    {
      text: "work",
      link: "work",
    },
    {
      text: "conact",
      link: "contact",
    },
  ];
  return (
    <div className="fixed z-[99] w-full bg-zinc-900 px-6 md:px-20 py-5 flex items-center justify-between">
      <a class="flex items-center gap-2" href="/">
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
          class="flex cursor-pointer font-[Ojuju] text-[20px] md:text-[30px] font-extrabold text-zinc-100 "
        >
          MERN Stack Developer
        </motion.h1>
      </a>
      <div className=" hidden lg:flex">
        {links.map((item, index) => (
          <a
            key={index}
            href={`/#${item.link}`}
            className={` uppercase p-1 text-zinc-100 hover:border-b-2 mx-2 hover:border-white`}
          >
            {item.text}
          </a>
        ))}
      </div>{" "}
    </div>
  );
}

export default Navbar;
