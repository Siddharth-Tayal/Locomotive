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
  const locomotiveScroll = new LocomotiveScroll();
  return (
    //
    <motion.div className=" bg-zinc-900 ">
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
