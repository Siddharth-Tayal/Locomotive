import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Navbar2 from "./Components/Navbar2";
import { motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import Marquee from "./Components/Marquee";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
export function App() {
  const locomotiveScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true,
    mobile: {
      smooth: true,
    },
    tablet: {
      smooth: true,
    },
  });
  return (
    //
    <motion.div className=" -z-50">
      {/* <Navbar /> */}
      <Navbar2 />
      <Home />
      <Marquee />
      {/* <AboutMe /> */}
      <Skills />
      <Projects />
      <Contact />
    </motion.div>
  );
}
