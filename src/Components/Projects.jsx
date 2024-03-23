import React from "react";
import Foto from "../assets/Foto.png";
import Techno from "../assets/Techno.png";
import Tic from "../assets/Tic.jpg";
import Urban from "../assets/Urban.png";
import Voice from "../assets/Voice.png";
import Crud from "../assets/Crud.png";
import {
  FaArrowAltCircleDown,
  FaArrowAltCircleRight,
  FaSignal,
} from "react-icons/fa";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
function Projects() {
  const projects = [
    {
      image: Techno,
      link: "https://technofest.onrender.com/",
      techStack: "React JS + Firebase",
      name: "TechnoFest",
      description:
        "Designed and implemented a beautifull Website for InterCollege Techno-Managment Fest using React and Firebase. The application allowing users to register and stay updated regarding the Fest.",
    },
    {
      image: Urban,
      link: "https://urbanvilla-real-estate.onrender.com",
      techStack: "MERN Stack + Firebase",
      name: "Urban Villa",
      description:
        "At UrbanVilla, we harness the power of a dynamic and robust technology stack to deliver a seamless and modern real estate experience. Our platform is built upon a fusion of the MERN stack and Firebase, creating a powerful synergy that combines flexibility, scalability, and real-time capabilities. At UrbanVilla, our commitment to technological excellence is reflected in our choice of the MERN stack and Firebase, creating a digital environment where your real estate journey is as modern and dynamic as the urban lifestyle we celebrate.",
    },
    {
      image: Foto,
      link: "https://foto-fiesta.onrender.com",
      techStack: "MERN Stack",
      name: "Foto-Fiesta",
      description:
        "Introducing Foto-Fiesta, a cutting-edge social media platform meticulously crafted using the MERN (MongoDB, Express.js, React.js, Node.js) stack. This dynamic application offers users a seamless and secure experience, with robust user authentication and a user-friendly password recovery system. Foto-Fiesta is not just about sharing photos; it's a hub for meaningful connections. Users can effortlessly follow and unfollow friends, explore personalized feeds, and engage with captivating moments through the like and unlike features. Each user's profile serves as a digital canvas, allowing them to express themselves and showcase their best moments. The platform's responsive design ensures a consistent and enjoyable experience across various devices, empowering users to stay connected on the go. Foto-Fiesta's comprehensive notification system keeps users informed about new followers, likes, and comments, fostering a vibrant and interactive community. Join us on Foto-Fiesta, where photos come to life, and connections are made. Capture, share, and celebrate your world with us!\n\n\n\n\n\n\n",
    },
    {
      image: Crud,
      link: "https://react-crud-application-4fvq.onrender.com",
      techStack: "React JS",
      name: "React CRUD",
      description:
        "Designed and implemented a robust CRUD (Create, Read, Update, Delete) application using React, Redux Toolkit. The application serves as a task management system, allowing users to interact seamlessly with their tasks. Employed Redux Toolkit for efficient state management, ensuring a predictable and scalable architecture. Implemented slices, actions, and reducers for seamless integration with React components.",
    },
    {
      image: Voice,
      link: "https://react-transcripter.onrender.com/",
      techStack: "React JS",
      name: "React Transcripter",
      description:
        "Conceptualized, designed, and implemented a cutting-edge Voice-to-Text application using ReactJS, offering users an intuitive and hands-free text input experience. Developed a modular and responsive user interface with React components, ensuring a seamless and engaging user experience. Implemented state management to efficiently handle the dynamic nature of speech input and text output",
    },
    {
      image: Tic,
      link: "https://tic-tac-toe-yg1q.onrender.com",
      techStack: "React JS",
      name: "Tic Tac Toe",
      description:
        "Let's have fun with knowledge. Designed a beautiful Tic Tac Toe game in React Js.",
    },
  ];
  return (
    <div className="bg-black">
      <div
        id="work"
        // bg-[#FA7F5C]
        className=" z-[100] h-fit py-20 bg-green-500  w-full pb-10  rounded-t-3xl"
      >
        <div>
          <h1 className=" text-white text-[6vw] leading-[6vw] mx-8 md:mx-20  md:text-4xl md:leading-3 font-semibold pb-3 md:pb-8 mb-10 border-b-[1px] w-fit border-white">
            Featured Projects
          </h1>
        </div>
        <div className=" flex items-center justify-center overflow-hidden bg-transparent">
          <div className="box-container">
            {projects.map((item, index) => (
              <div className="box-item rounded-[8px] " key={index}>
                <div className="flip-box">
                  <div
                    className="flip-box-front text-center border-white border bg-[url('https://s25.postimg.cc/frbd9towf/cta-2.png')] "
                    style={{
                      backgroundImage: `url(${item.image})`,
                      backgroundSize: "cover",
                      backgroundBlendMode: "multiply",
                      backgroundRepeat: "repeat",
                      backgroundPosition: "center",
                      backgroundColor: "rgba(0,0,0,0)",
                    }}
                  >
                    <div className=" inner text-white">
                      <FaArrowAltCircleRight className=" text-4xl text-white bg-black h-[70px] w-[70px] rounded-full" />
                    </div>
                  </div>
                  <div className="flip-box-back text-center">
                    <div className=" flex flex-col items-center rounded-[8px] bg-[url('https://s25.postimg.cc/frbd9towf/cta-2.png')] bg-cover bg-center h-[100%] p-3 justify-center text-justify text-white gap-[15px]">
                      <h3 className=" text-4xl font-semibold text-center">
                        {item.name}
                      </h3>
                      <p className=" line-clamp-5">{item.description}</p>
                      <p className=" line-clamp-5 text-center">
                        <b>Tech Stack : </b>
                        {item.techStack}
                      </p>
                      <a
                        href={item.link}
                        className=" bg-transparent border-2 hover:scale-110 hover:shadow-md hover:shadow-white duration-200 border-white rounded-md text-white cursor-pointer text-[20px] font-bold py-[15px] px-[30px] uppercase"
                      >
                        Go Live
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
