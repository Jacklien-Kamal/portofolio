import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


export default function Header() {
  return (
    <div className="container grid grid-cols-2 items-center    md:grid-cols-3 gap-20 ">
      <h1 className=" py-10 font-semibold text-xl lg:text-3xl ">
        J.K. Portofolio{" "}
      </h1>
      <div className=" flex gap-8 text-xl font-semibold order-1 items-center justify-center">
        <a href="#" className="text-nowrap ms-36 md:ms-10 link-loader">Projects</a>
        <a href="#" className="text-nowrap link-loader">Technologies</a>
        <a href="#" className="text-nowrap   link-loader">About me</a>
      </div>

      <div className="text-3xl flex gap-x-4 md:order-1 ms-10 ">
        <a href="#" className="hover:scale-105" ><FaLinkedin />
        </a>
        <a  href="#" className="hover:scale-105"><FaGithub />
        </a>
        <a  href="#" className="hover:scale-105">
        <FaFacebook />

        </a>
      </div>
    </div>
  );
}
