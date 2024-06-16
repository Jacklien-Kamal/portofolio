import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom";


export default function Header() {
  return (
    <div className="container grid grid-cols-2 items-center    md:grid-cols-3 gap-20 ">
      <h1 className=" py-10 font-semibold text-xl lg:text-3xl ">
        J.K. Portofolio{" "}
      </h1>
      <div className=" flex gap-8 text-xl  font-semibold order-1 items-center md:justify-center">
        <Link href="#" className="text-nowrap link-loader">About me</Link>
        <Link to="projects" className="text-nowrap  md:ms-10 link-loader">Projects</Link>
        <Link to={'technologies'} className="text-nowrap link-loader">Technologies</Link>
      </div>

      <div className="text-3xl flex gap-x-4 md:order-1 ms-10 ">
        <a href='https://www.linkedin.com/in/jacklin-kmal' className="hover:scale-105" ><FaLinkedin />
        </a>
        <a  href="https://github.com/settings/profile" className="hover:scale-105"><FaGithub />
        </a>
        <a  href="https://www.facebook.com/profile.php?id=100005125537767&locale=ar_AR" className="hover:scale-105">
        <FaFacebook />

        </a>
      </div>
    </div>
  );
}
