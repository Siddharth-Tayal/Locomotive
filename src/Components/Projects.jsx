import React from "react";
import Foto from "../assets/Foto.png";
import Techno from "../assets/Techno.png";
import Tic from "../assets/Tic.jpg";
import Urban from "../assets/Urban.png";
import Voice from "../assets/Voice.png";
import Crud from "../assets/Crud.png";
import { FaSignal } from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
function Projects() {
  const projects = [
    {
      image: Techno,
      link: "https://technofest.onrender.com/",
      techStack: "React JS + Firebase",
      name: "TechnoFest",
    },
    {
      image: Urban,
      link: "https://urbanvilla-real-estate.onrender.com",
      techStack: "MERN Stack + Firebase",
      name: "Urban Villa",
    },
    {
      image: Foto,
      link: "https://foto-fiesta.onrender.com",
      techStack: "MERN Stack",
      name: "Foto-Fiesta",
    },
    {
      image: Crud,
      link: "https://react-crud-application-4fvq.onrender.com",
      techStack: "React JS",
      name: "React CRUD",
    },
    {
      image: Voice,
      link: "https://react-transcripter.onrender.com/",
      techStack: "React JS",
      name: "React Transcripter",
    },
    {
      image: Tic,
      link: "https://tic-tac-toe-yg1q.onrender.com",
      techStack: "React JS",
      name: "Tic Tac Toe",
    },
  ];
  return (
    <div className="bg-[#080b1b]">
      <div
        id="work"
        className=" z-[100] h-fit  bg-[#3b82f680] w-full p-20 px-8 pb-10 md:px-20 rounded-t-3xl"
      >
        <div>
          <h1 className=" text-zinc-900 text-[6vw] leading-[6vw] md:text-4xl md:leading-3 font-semibold pb-3 md:pb-8 mb-10 border-b-[1px] w-fit border-zinc-900">
            Featured Projects
          </h1>
        </div>
        <div className=" flex w-[100%] pt-[30px] h-auto items-center justify-evenly overflow-hidden gap-8 bg-transparent">
          <Carousel
            autoPlay={true}
            interval={2000}
            infiniteLoop={true}
            showThumbs={false}
            showIndicators={true}
            stopOnHover={false}
            transitionTime={500}
            centerMode
            centerSlidePercentage={innerWidth > 900 ? 25 : 60}
            selectedItem={1}
          >
            {/* bg-[hsl(250,100%,61%)] */}
            {projects.map((item, index) => (
              <div
                key={index}
                className=" flex flex-col items-center justify-between max-w-[300px] md:max-w-[330px] h-auto m-6 mb-10 mx-auto bg-[hsl(250,100%,61%)] rounded-lg text-center cursor-pointer hover:-translate-y-4 duration-300 "
              >
                <img
                  src={item.image}
                  className=" w-[100%] h-[200px] max-h-[200px] object-cover object-top rounded-t-lg "
                />
                <div className=" flex flex-col items-start text-white">
                  <h3 className=" text-white text-xl font-semibold w-fit mx-auto">
                    {item.name}
                  </h3>
                  <p className=" text-start p-3">
                    <b>About : </b>
                    uosegtruiou bevils ebgrils ebtguosegtrui oubevilsebgrilse
                    btguose
                  </p>
                  <p className=" text-start p-3 truncate">
                    <b>TechStack : </b>
                    {item.techStack}
                  </p>
                  <a
                    href={item.link}
                    className=" w-fit mx-auto text-purple-600 font-normal text-base flex gap-2 items-center justify-center bg-white p-3 mb-3 rounded-lg"
                  >
                    <FaSignal /> Live Demo
                  </a>
                </div>
              </div>
            ))}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Projects;
