import React from "react";
import ProjectCard from "../ProjectCard";
import { projects } from "../../../constants";

const Projects = () => {
  
  
  return (
    <div
      className="flex flex-col items-center justify-center lg:mx-20 "
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-20">
        My Projects
      </h1>
      <div className="h-full w-full flex flex-col md:grid md:grid-cols-2 lg:grid-cols-4  gap-10 px-10">
      {projects.map((proj,idx)=>(

        <ProjectCard key={idx}
          src={proj.img}
          title={proj.title}
          description={proj.desc}
          gitLink={proj.gitLink}
          livePre={proj.livePre}
        />
      ))}</div>
    </div>
  );
};

export default Projects;
