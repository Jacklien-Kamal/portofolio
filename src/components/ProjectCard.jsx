import React from "react";
import { Link } from "react-router-dom";



const ProjectCard = ({ src, title, description ,livePre,gitLink}) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] font-sans ">
      <img
        src={src}
        alt={title}
        className="  w-full h-52 "
      />

      <div className="relative p-4 z-20">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300 text-ellipsis overflow-clip  h-[70px]">{description}. . . . . .</p>
        <Link
          href={livePre}
          className="z-20 bg-gradient-to-r from-purple-500 mt-3 to-cyan-500  py-2 px-3   rounded-full inline-block transform transition-transform duration-300 ease-in-out  shadow-custom-light hover:scale-110 hover:shadow-more-custom-light"
        >
          Live Preview
        </Link>
        <Link
          href={gitLink}
          className="px-3 py-1 z-20 text-lg  ms-2 mt-3  border border-white rounded-full inline-block transform transition-transform duration-300 hover:scale-110"
        >
          Github
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;
