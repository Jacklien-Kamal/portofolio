import { Link } from "react-router-dom";
import { Socials } from "../../../constants";
import React from "react";

const Navbar = () => {
  return (
    <div className="w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 sm:px-10">
      <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
        <Link
          href="#about"
          className="h-auto w-auto md:flex md:flex-row items-center hidden "
        >
       welcome

          <span className="font-bold ml-[10px] hidden md:block text-gray-300">
           </span>
        </Link>

        <div className="w-[700px]  h-full flex flex-row items-center justify-between md:mr-20">
          <div className="flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200 ">
            <Link href="#about" className="cursor-pointer hover:scale-110 text-xs sm:text-lg">
              About me
            </Link>
            <Link href="#skills" className="cursor-pointer  hover:scale-110 text-xs sm:text-lg">
              Skills
            </Link>
            <Link href="#projects" className="cursor-pointer  hover:scale-110 text-xs sm:text-lg">
              Projects
            </Link>
            <Link href="#contact" className="cursor-pointer  hover:scale-110 text-xs sm:text-lg">
              Contact
            </Link>
          </div>
        </div>

        <div className="flex flex-row gap-1 sm:gap-4">
          {Socials.map((social) => (
            <Link to={social.url} key={social.name}>
              
            <img
              src={social.src}
              alt={social.name}
           
              className="rounded-full w-16 md:w-8"
            />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
