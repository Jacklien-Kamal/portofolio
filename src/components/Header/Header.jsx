import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


export default function Header() {
  return (
    <div className="px-10 grid grid-cols-2 items-center    md:grid-cols-3 gap- fixed top-0 bg-gray-900 w-full z-40 ">
      <h1 className=" py-10 font-semibold text-xl lg:text-3xl ">
        J.K. Portofolio{" "}
      </h1>
      <div className="py-2 flex gap-12 md:gap-3 lg:gap-12 text-xl  font-semibold order-1 items-center md:justify-center">
        <a href="#" className="text-nowrap link-loader">About me</a>
        <a href="#projects" className="text-nowrap   link-loader">Projects</a>
        <a href={'#technologies'} className="text-nowrap link-loader">Technologies</a>
      </div>
      <div className="text-3xl flex gap-x-4 md:order-1 ms-10 ">
        <a href='https://www.linkedin.com/in/jacklin-kmal' className="hover:scale-125" ><FaLinkedin />
        </a>
        <a  href="https://github.com/settings/profile" className="hover:scale-125"><FaGithub />
        </a>
        <a  href="https://www.facebook.com/profile.php?id=100005125537767&locale=ar_AR" className="hover:scale-125 transation-100">
        <FaFacebook />

        </a>
      </div>
    </div>
  );
}
