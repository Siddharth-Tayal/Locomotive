import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import Marquee from "./Components/Marquee";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export function App() {
  const locomotiveScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true,
  });
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <motion.div className=" -z-50">
      {/* <Navbar2 /> */}
      <Navbar />
      <Home />
      <Marquee />
      <Skills />
      <Projects />
      <Contact />
    </motion.div>
  );
}
