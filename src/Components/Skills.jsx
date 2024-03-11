import React from "react";

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
      text: "Java Script",
    },
    {
      img: "https://rajesh-mern-stack-portfolio-images.s3.ap-south-1.amazonaws.com/assets/tech/tailwind.png",
      text: "Tailwind CSS",
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
      text: "Mongo DB Compass",
    },
  ];
  return (
    <div className="bg-[#cdea68]">
      <div
        id="skills"
        className=" z-[100] h-fit bg-[rgb(46,16,101)] w-full p-20 px-8 md:px-20 rounded-t-3xl"
      >
        <div>
          <h1 className=" text-white text-[7vw] leading-[7vw] font-semibold">
            Skills{" "}
          </h1>
          <div className="flex flex-wrap items-center justify-center  gap-6 sm:gap-9 my-9 md:my-5 max-w-screen-lg mx-auto">
            {skills.map((item, index) => (
              <div
                key={index}
                className=" w-[80px] md:w-[120px] flex flex-col items-center justify-center gap-2"
              >
                <img
                  src={item.img}
                  className="h-[50px] w-[50px] sm:h-[70px] sm:w-[70px]  "
                />{" "}
                <p className=" truncate text-sm sm:text-base font-semibold text-white">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
          <div className=" border-t-[1px] pt-10 border-[#a1b562]">
            <h1 className=" text-white text-[4vw] md:leading-[4vw] font-semibold md:font-normal">
              Tools & Software{" "}
            </h1>
            <div className="flex flex-wrap items-center justify-center  gap-6 sm:gap-9 my-9 md:my-5 max-w-screen-lg mx-auto">
              {software.map((item, index) => (
                <div
                  key={index}
                  className=" flex flex-col items-center justify-center gap-2"
                >
                  <img
                    src={item.img}
                    className="h-[50px] w-[50px] sm:h-[70px] sm:w-[70px]  "
                  />{" "}
                  <p className=" px-2 text-sm sm:text-base font-semibold text-white overflow-hidden ">
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
