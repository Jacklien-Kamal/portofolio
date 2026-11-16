import React, { useMemo, useState } from "react";
import { projects, projectCategories } from "../../../constants";
import ProjectCard from "../SubComponents/ProjectCard";

const Projects = () => {
  const [active, setActive] = useState("All");

  // نعرض بس التصنيفات اللي فيها مشاريع فعلًا
  const categories = useMemo(
    () =>
      projectCategories.filter(
        (c) => c === "All" || projects.some((p) => p.category === c)
      ),
    []
  );

  const visible = useMemo(() => {
    const list =
      active === "All" ? projects : projects.filter((p) => p.category === active);
    // المميزة الأول، وباقي الترتيب زي ما هو
    return [...list].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  }, [active]);

  return (
    <div
      className="flex flex-col items-center justify-center lg:mx-24 xl:mx-40 "
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-10">
        My Projects
      </h1>

      {/* <div className="flex flex-wrap justify-center gap-3 px-10 pb-12">
        {categories.map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            aria-pressed={active === c}
            className={`rounded-full px-4 py-1.5 text-sm transition-colors ${
              active === c
                ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white"
                : "border border-[#2A0E61] text-gray-300 hover:border-purple-500"
            }`}
          >
            {c}
          </button>
        ))}
      </div> */}

      <div className="h-full w-full flex flex-col md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 items-start gap-10 px-10">
        {visible.map((proj) => (
          <ProjectCard key={proj.id} {...proj} />
        ))}
      </div>
    </div>
  );
};

export default Projects;