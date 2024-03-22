import React from "react";
import Data from "../assets/animation.json";
function Skills() {
  const skills = [
    {
      img: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tech/html.png",
      text: "HTML",
    },
    {
      img: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tech/css.png",
      text: "CSS",
    },
    {
      img: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tech/javascript.png",
      text: "Javascript",
    },
    {
      img: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tech/tailwind.png",
      text: "Tailwind",
    },
    {
      img: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tech/reactjs.png",
      text: "React JS",
    },
    {
      img: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tech/redux.png",
      text: "Redux",
    },
    {
      img: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tech/formik-icon.png",
      text: "Formik",
    },
    {
      img: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tech/material-ui.png",
      text: "Material UI",
    },
    {
      img: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tech/scss.png",
      text: "SCSS",
    },
    {
      img: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tech/nodejs.png",
      text: "Node JS",
    },
    {
      img: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tech/expressjs.png",
      text: "Express JS",
    },
    {
      img: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tech/mongodb.png",
      text: "Mongo DB",
    },
    {
      img: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tech/mongoose.png",
      text: "Mongoose",
    },
    {
      img: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tech/git.png",
      text: "Git",
    },
    {
      img: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/github.png",
      text: "Github",
    },
  ];
  const software = [
    {
      img: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/github.png",
      text: "Github",
    },
    {
      img: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tools/vscode.png",
      text: "VS Code",
    },
    {
      img: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tools/chrome.png",
      text: "Chrome",
    },
    {
      img: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tools/postman.png",
      text: "Postman",
    },
    {
      img: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tools/ChatGPT.png",
      text: "Chat GPT",
    },
    {
      img: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tools/mongodbCompass.png",
      text: " Compass",
    },
  ];
  const defaultOptions3 = {
    loop: true,
    autoplay: true,
    animationData: Data,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <div className=" h-fit bg-[#cdea68]">
      {" "}
      {/* <div className=" absolute h-[100%] w-[100vw] flex items-center justify-center -z-10">
        <Lottie options={defaultOptions3} />
      </div> */}
      <div
        id="skills"
        className=" scroll-smooth h-fit w-full py-20 md:px-20 rounded-t-3xl bg-black"
      >
        <div>
          <h1 className=" text-white text-[6vw] leading-[6vw] md:text-4xl md:leading-3 font-semibold ml-8 md:ml-0 p-3 pb-3 md:pb-6 mb-10 border-b-[1px] w-fit border-white">
            Skills{" "}
          </h1>
          <div className="flex flex-wrap items-center justify-center px-4 md:px-0 gap-6 my-9 md:my-5 max-w-screen-lg mx-auto">
            {skills.map((item, index) => (
              <div
                data-aos={index % 2 === 0 ? "flip-down" : "flip-right"}
                key={index}
                className=" w-[90px] sm:w-[140px] cursor-pointer bg-[rgb(1,3,10)] flex flex-col items-center justify-center gap-2 rounded-lg p-3 py-5 shadow-sm shadow-white"
              >
                <img
                  src={item.img}
                  className="h-[50px] w-[50px] sm:h-[70px] sm:w-[70px]  "
                />{" "}
                <p className=" truncate text-xs sm:text-base font-semibold text-white">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className=" border-t-[1px] pt-10 border-[#a1b562]">
            <h1 className=" text-white text-[6vw] leading-[6vw] md:text-4xl md:leading-3 font-semibold ml-8 md:ml-0 p-3 pb-3 md:pb-6 mb-10 border-b-[1px] w-fit border-white">
              Tools and Software{" "}
            </h1>
            <div className="flex flex-wrap items-center justify-center px-4 md:px-0 gap-6 my-9 md:my-5 max-w-screen-lg mx-auto">
              {software.map((item, index) => (
                <div
                  key={index}
                  data-aos={index % 2 === 0 ? "flip-down" : "flip-right"}
                  className=" w-[90px] sm:w-[140px] cursor-pointer bg-[rgb(1,3,10)] flex flex-col items-center justify-center gap-2 rounded-lg p-3 py-5 shadow-sm shadow-white"
                >
                  <img
                    src={item.img}
                    className="h-[50px] w-[50px] sm:h-[70px] sm:w-[70px]  "
                  />{" "}
                  <p className=" truncate text-xs sm:text-base font-semibold text-white">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
