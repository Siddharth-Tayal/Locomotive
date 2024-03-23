import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Me from "../assets/Me.jpg";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";

import {
  FaAngleDoubleRight,
  FaCross,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaMobile,
  FaTelegram,
  FaTicketAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { SiGeeksforgeeks } from "react-icons/si";
import { MdDelete, MdError } from "react-icons/md";

export default function Contact() {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [notSent, setNotSent] = useState(false);
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
      setIsSent(true);
    } catch (error) {
      setLoading(false);
      setNotSent(true);
    }
  };

  return (
    <div className="bg-green-500 overflow-hidden">
      {(isSent || notSent) && (
        <div className=" flex items-center justify-center gap-2 bg-white shadow-sm border-b-2 border-orange-500 rounded-lg p-3 h-[50px] fixed bottom-[10px] right-[10px] z-[999]">
          {isSent && (
            <IoCheckmarkDoneCircleSharp className=" text-green-500 text-xl" />
          )}
          {notSent && <MdError className="text-red-500 text-xl" />}
          {(isSent && "Message Sent Successfully") ||
            (notSent && "Message Again")}
          {
            <MdDelete
              className=" text-red-500 text-xl hover:opacity-70 duration-200 ml-[10px] cursor-pointer"
              onClick={() => [setIsSent(false), setNotSent(false)]}
            />
          }
        </div>
      )}

      <div
        id="contact"
        className=" z-[100] h-fit bg-[#004D43] w-full p-20 px-8 md:px-20  rounded-t-3xl flex flex-col items-center justify-center gap-9 text-white"
      >
        {" "}
        <h1 className=" text-white text-[6vw] leading-[6vw] md:text-4xl md:leading-3 font-semibold pb-10 mb-10 border-b-[1px] w-fit border-white">
          Let's Start Together
        </h1>
        <div className=" w-full flex flex-wrap items-start justify-center gap-9 text-white">
          <div className=" w-full h-[100%]  md:w-[45%]" data-aos="fade-right">
            <form action="" ref={form} onSubmit={message}>
              <div className=" my-3 py-3 border-b-2">
                <h2 className=" flex items-center justify-start gap-2 font-light text-white text-xl">
                  {" "}
                  <FaAngleDoubleRight /> Whats your Name ?
                </h2>
                <input
                  className=" bg-transparent p-3 pl-9 w-full outline-none"
                  type="text"
                  required
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
                  required
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
                  required
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
          <div
            data-aos="fade-left"
            className=" w-full h-[100%] md:w-[45%] flex flex-col items-center justify-center gap-6 pt-10 md:pt-0"
          >
            <img
              src={Me}
              className=" flex items-center justify-center rounded-full h-[150px] w-[150px] border"
              alt=""
            />
            <div className=" w-full flex items-start justify-evenly gap-[25px] flex-wrap">
              <div className=" flex flex-col items-start justify-start gap-1">
                <h3 className="  text-base font-semibold">Contact Info </h3>
                <div className=" h-[28px] flex items-center gap-1 text-xs md:text-sm">
                  <FaMobile className=" text-xl font-semibold" />
                  <a href="tel:8813055897">Tap to Call Me </a>
                </div>{" "}
                <div className=" h-[28px] flex items-center gap-1 text-xs md:text-sm">
                  <FaMailBulk className=" text-base font-semibold" />
                  <a href="mailto:stayal12345@gmail.com"> Tap to Mail </a>
                </div>
              </div>
              <div className=" flex flex-col items-start justify-start gap-1">
                <h3 className=" text-base font-semibold">Quick Links</h3>
                <div className=" flex flex-col items-start justify-between gap-1">
                  <div className="h-[28px] flex items-center justify-start gap-2 text-xs md:text-sm">
                    <a
                      className="w-[60px] md:w-[70px] whitespace-nowrap hover:opacity-60 duration-200 "
                      href="#"
                    >
                      Home
                    </a>
                    <a
                      className="w-[60px] md:w-[70px] whitespace-nowrap hover:opacity-60 duration-200 "
                      href="#about"
                    >
                      About Me
                    </a>
                  </div>{" "}
                  <div className="h-[28px] flex items-center justify-start gap-2 text-xs md:text-sm">
                    <a
                      className=" w-[60px] md:w-[70px] whitespace-nowrap hover:opacity-60 duration-200 "
                      href="#skills"
                    >
                      Skills
                    </a>
                    <a
                      className=" w-[60px] md:w-[70px] whitespace-nowrap hover:opacity-60 duration-200 "
                      href="#work"
                    >
                      Projects
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className=" flex flex-col items-center gap-3">
              <h3 className=" text-xl font-semibold">Social Links </h3>
              <div className=" flex items-center gap-3 text-3xl text-[#36b7c5]">
                <a
                  href="https://www.linkedin.com/in/siddharth-tayal-65203a266/"
                  className=" hover:text-blue-500 duration-300"
                >
                  {" "}
                  <FaLinkedin />{" "}
                </a>{" "}
                <a
                  href="https://github.com/Siddharth-Tayal"
                  className=" hover:text-blue-500 duration-300"
                >
                  <FaGithub />
                </a>{" "}
                <a
                  href="https://auth.geeksforgeeks.org/user/siddharth_tayal/?utm_source=geeksforgeeks&utm_medium=colleges&utm_campaign=users"
                  className=" hover:text-blue-500 duration-300"
                >
                  <SiGeeksforgeeks />
                </a>
                <a
                  href="https://www.instagram.com/s_tayal_01/"
                  className=" hover:text-blue-500 duration-300"
                >
                  <FaInstagram />
                </a>{" "}
                <a
                  href="https://wa.me/+918813055897"
                  className=" hover:text-blue-500 duration-300"
                >
                  <FaWhatsapp />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
