import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Me from "../assets/Me.jpg";
import {
  FaAngleDoubleRight,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaMobile,
} from "react-icons/fa";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const message = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      await emailjs.sendForm(
        "service_g4051j7",
        "template_u9rcbmn",
        form.current,
        "qr0ZG_2EECaoasVEW"
      );
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  };

  return (
    <div className="bg-blue-500">
      <div
        id="contact"
        className=" z-[100] h-fit bg-[#004D43] w-full p-20 px-8 md:px-20  rounded-t-3xl flex flex-col items-center justify-center gap-9 text-white"
      >
        {" "}
        <h1 className=" text-white text-[6vw] leading-[6vw] md:text-4xl md:leading-3 font-semibold pb-10 mb-10 border-b-[1px] w-fit border-white">
          Let's Start Together
        </h1>
        <div className=" w-full flex flex-wrap items-start justify-center gap-9 text-white">
          <div className=" w-full h-[100%]  md:w-[45%]">
            <form action="" ref={form} onSubmit={message}>
              <div className=" my-3 py-3 border-b-2">
                <h2 className=" flex items-center justify-start gap-2 font-light text-white text-xl">
                  {" "}
                  <FaAngleDoubleRight /> Whats your Name ?
                </h2>
                <input
                  className=" bg-transparent p-3 pl-9 w-full outline-none"
                  type="text"
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  placeholder="John Doe *"
                />
              </div>{" "}
              <div className=" my-3 py-3 border-b-2">
                <h2 className=" flex items-center justify-start gap-2 font-light text-white text-xl">
                  {" "}
                  <FaAngleDoubleRight /> What's your Email ?
                </h2>
                <input
                  className=" bg-transparent p-3 pl-9 w-full outline-none"
                  type="email"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  placeholder="doeJohn@gmail.com *"
                />
              </div>{" "}
              <div className=" my-3 py-3 border-b-2">
                <h2 className=" flex items-center justify-start gap-2 font-light text-white text-xl">
                  {" "}
                  <FaAngleDoubleRight /> What's your Message ?
                </h2>
                <textarea
                  className=" bg-transparent p-3 pl-9 outline-none w-full resize-none"
                  type="text"
                  rows={3}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  placeholder="Hello , my query is ... *"
                />
              </div>{" "}
              <button
                disabled={loading}
                className=" disabled:cursor-not-allowed flex items-center justify-center p-4 rounded-full bg-[#36b7c5] w-full hover:opacity-55 "
              >
                {loading ? "Sending..." : "Send Message"}
              </button>
            </form>
          </div>
          <div className=" w-full h-[100%] md:w-[45%] flex flex-col items-center justify-center gap-6 pt-10 md:pt-0">
            <img
              src={Me}
              className=" flex items-center justify-center rounded-full h-[150px] w-[150px] border"
              alt=""
            />
            <div className=" flex items-center justify-evenly gap-[50px] flex-wrap">
              <div className=" flex flex-col items-center justify-center gap-3">
                <h3 className="  text-xl font-semibold">Contact Info </h3>
                <div className=" flex items-center gap-1">
                  <FaMobile className=" text-xl font-semibold" />
                  <a href="tel:8813055897">Tap to Call Me </a>
                </div>{" "}
                <div className=" flex items-center gap-1">
                  <FaMailBulk className=" text-xl font-semibold" />
                  <a href="mailto:stayal12345@gmail.com"> Tap to Mail </a>
                </div>
              </div>
              <div className=" flex flex-col items-center justify-center gap-3">
                <h3 className=" text-xl font-semibold">Quick Links</h3>
                <div className=" flex flex-col items-start gap-1">
                  <div className=" flex items-center justify-start gap-2">
                    <a
                      className=" w-[80px] hover:opacity-60 duration-200 "
                      href=""
                    >
                      Home
                    </a>
                    <a
                      className=" w-[80px] hover:opacity-60 duration-200 "
                      href=""
                    >
                      About Me
                    </a>
                  </div>{" "}
                  <div className=" flex items-center justify-start gap-2">
                    <a
                      className=" w-[80px] hover:opacity-60 duration-200 "
                      href=""
                    >
                      Skills
                    </a>
                    <a
                      className=" w-[80px] hover:opacity-60 duration-200 "
                      href=""
                    >
                      Projects
                    </a>
                  </div>
                </div>
              </div>
              <div className=" flex flex-col items-center gap-3">
                <h3 className=" text-xl font-semibold">Social Links </h3>
                <div className=" flex items-center gap-3 text-3xl text-[#36b7c5]">
                  <a href="">
                    {" "}
                    <FaLinkedin />{" "}
                  </a>{" "}
                  <a href="">
                    <FaGithub />
                  </a>{" "}
                  <a href="">
                    <FaInstagram />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
