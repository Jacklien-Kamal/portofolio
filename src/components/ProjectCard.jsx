import React from "react";



const ProjectCard = ({ src, title, description }) => {
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
      </div>
    </div>
  );
};

export default ProjectCard;
