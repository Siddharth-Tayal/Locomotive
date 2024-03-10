import React from "react";
import Foto from "../assets/Foto.png";
import Techno from "../assets/Techno.png";
import Tic from "../assets/Tic.jpg";
import Urban from "../assets/Urban.png";
import Voice from "../assets/Voice.png";
import Crud from "../assets/Crud.png";
import { GiAerialSignal } from "react-icons/gi";
import { FaSignal } from "react-icons/fa";
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
    <div
      id="work"
      className=" z-[100] h-fit bg-zinc-900 w-full p-20 px-8 md:px-20 rounded-t-3xl"
    >
      <div>
        <h1 className=" text-white text-[6vw] leading-[6vw] font-semibold pb-10 border-b-[1px] w-fit border-white">
          Featured Projects
        </h1>
      </div>
      <div className=" pt-20 flex flex-wrap box-border gap-6 md:gap-0 ">
        {projects.flatMap((item, index) => (
          <div className=" relative w-full md:w-[33%] h-[35vh] md:h-[50vh] my-2 md:my-0 overflow-hidden md:border-2 md:border-[#cff34d] projectImage">
            <img
              src={item.image}
              alt="Project Image"
              className=" h-full w-full bg-cover bg-black text-center flex items-center justify-center text-xl text-white"
            />
            <div className=" projectLink " rel="noopener">
              <div className=" flex items-center justify-center gap-3 flex-col">
                <p className=" md:text-xl font-semibold ">{item.name} </p>
                <div className=" flex items-center justify-center gap-1 text-zinc-900">
                  <p className=" md:text-xl font-semibold ">Tech Stack : </p>
                  <span>{item.techStack}</span>
                </div>
                <a
                  className=" flex items-center justify-center gap-1 text-xl uppercase font-semibold p-3 rounded-lg hover:scale-150 duration-300 bg-white border-black"
                  href={item.link}
                  target="_blank"
                >
                  <FaSignal /> Go Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
