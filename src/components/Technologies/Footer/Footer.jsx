import React from 'react'
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
export default function Footer() {
  return (
    <div className=' grid grid-cols-1 lg:grid-cols-3 gap-4  bg-gray-800  text-sm py-5 mt-10 content-center md:text-xl place-items-center '>
        <p className=' font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent'>Feel free to contact me</p>
        <a href='mailto:jacklienkamal442@gmail.com'>jacklienkamal442@gmail.com</a>
        <div className="text-3xl flex gap-x-4  lg:ms-10  ">
        <a href='https://www.linkedin.com/in/jacklin-kmal' className="hover:scale-105" ><FaLinkedin />
        </a>
        <a  href="https://github.com/settings/profile" className="hover:scale-105"><FaGithub />
        </a>
        <a  href="https://www.facebook.com/profile.php?id=100005125537767&locale=ar_AR" className="hover:scale-105">
        <FaFacebook />

        </a>
      </div>
    </div>
  )
}
