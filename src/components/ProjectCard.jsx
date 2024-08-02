import React from "react";



const ProjectCard = ({ src, title, description ,livePre,gitLink}) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] font-sans">
      <img
        src={src}
        alt={title}
        className="  w-full h-52 "
      />

      <div className="relative p-4 ">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <a
          href={livePre}
          className="bg-gradient-to-r from-purple-500 mt-3 to-cyan-500 font-bold py-2 px-3  sm:text-xl sm:px-5 rounded-full inline-block transform transition-transform duration-300 ease-in-out  shadow-custom-light hover:scale-110 hover:shadow-more-custom-light"
        >
          Live Preview
        </a>
        <a
          href={gitLink}
          className="px-3 py-1  text-lg sm:text-xl ms-2 mt-3  border border-white rounded-full inline-block transform transition-transform duration-300 hover:scale-110"
        >
          Github
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
