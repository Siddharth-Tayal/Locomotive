import React from "react";

function AboutMe() {
  return (
    <div
      data-scroll
      data-scroll-speed="0"
      id="about"
      className=" z-[100] h-fit bg-[#cdea68] w-full p-20 px-8 md:px-20 rounded-t-3xl"
    >
      <h1 className=" text-black text-[6vw] leading-[6vw] md:text-4xl md:leading-3 font-semibold pb-10 mb-10 border-b-[1px] w-fit border-black">
        About Me
      </h1>
      <p className=" text-base md:text-2xl text-zinc-800 my-5">
        I'm a skilled software developer with experience in JavaScript, and
        expertise in frameworks like React, Node.js, Express.js and MongoDB. I'm
        a quick learner and collaborate closely with clients to create
        efficient, scalable, and user-friendly solutions that solve real-world
        problems. Let's work together to bring your ideas to life!
      </p>
      <div className=" border-t-[1px] pt-10 border-[#a1b562]">
        <h1 className=" text-black text-[6vw] leading-[6vw] md:text-4xl md:leading-3 font-semibold pb-10 mb-10 border-b-[1px] w-fit border-black">
          My Approach{" "}
        </h1>
        <p className=" text-sm md:text-xl text-zinc-800 my-5">
          I employ a strategic MERN stack approach, emphasizing comprehensive
          requirements analysis, agile development, and RESTful API design.
          Leveraging expertise in MongoDB, Express.js, React.js, and Node.js, I
          prioritize responsive UIs, scalability, and performance. CI/CD
          practices and a security-first mindset ensure reliable, secure
          applications. Open communication and collaboration are key, delivering
          high-quality, client-aligned solutions efficiently.
        </p>
      </div>
    </div>
  );
}

export default AboutMe;
