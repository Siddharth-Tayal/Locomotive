import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import { motion } from "framer-motion";
import LocomotiveScroll from "locomotive-scroll";
import Marquee from "./Components/Marquee";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Contact from "./Components/Contact";
import { useEffect, useState } from "react";
import Data2 from "./assets/Loading.json";
import Lottie from "react-lottie";
import AOS from "aos";
import "aos/dist/aos.css";

export function App() {
  document.addEventListener("contextmenu", (e) => {
    e.preventDefault();
  });
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: Data2,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  const { innerHeight, innerWidth } = window;
  const [show, setShow] = useState(true);
  const locomotiveScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true,
  });
  async function changing() {
    setTimeout(() => {
      setShow(false);
    }, 3000);
  }
  useEffect(() => {
    AOS.init();
    changing();
  }, []);
  return (
    <motion.div className=" -z-50">
      {show ? (
        <div
          style={{ position: show ? "fixed" : "hidden" }}
          className=" bg-black h-[100vh] w-[100vw] flex items-center justify-center"
        >
          <div className=" absolute">
            <Lottie
              speed={0.1}
              options={defaultOptions}
              width={innerWidth}
              height={innerHeight}
            />
          </div>
          <h2 className=" text-4xl text-white font-[cursive] animate-bounce">
            Loading ....
          </h2>
        </div>
      ) : (
        <div>
          {/* <Navbar2 /> */}
          <Navbar />
          <Home />
          <Marquee />
          <Skills />
          <Projects />
          <Contact />
        </div>
      )}
    </motion.div>
  );
}
