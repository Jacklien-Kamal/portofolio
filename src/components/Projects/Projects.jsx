import React, { useMemo, useState } from "react";
import { projects, projectCategories, mobileProjects } from "../../../constants";
import ProjectCard from "../SubComponents/ProjectCard";
import MobileProjectCard from "../SubComponents/MobileProjectCard";

const TABS = [
  { id: "web", label: "Web", count: projects.length },
  { id: "mobile", label: "Mobile", count: mobileProjects.length },
];

const Projects = () => {
  const [tab, setTab] = useState("web");
  const [active, setActive] = useState("All");

  // Only show categories that actually have projects
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
    // Featured first
    return [...list].sort((a, b) => Number(!!b.featured) - Number(!!a.featured));
  }, [active]);

  return (
    <div
      className="flex flex-col items-center justify-center lg:mx-24 xl:mx-40"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-8">
        My Projects
      </h1>

      {/* Tabs */}
      <div
        role="tablist"
        aria-label="Project type"
        className="z-20 mb-8 flex rounded-full border border-[#2A0E61] bg-[#0300145e] p-1"
      >
        {TABS.map((t) => (
          <button
            key={t.id}
            role="tab"
            aria-selected={tab === t.id}
            onClick={() => setTab(t.id)}
            className={`rounded-full px-16 py-2 text-base md:text-2xl font-bold transition-all duration-300 ${
              tab === t.id
                ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-lg"
                : "text-gray-400 hover:text-white "
            }`}
          >
            {t.label}
            {/* <span className="ml-2 text-xs opacity-80">{t.count}</span> */}
          </button>
        ))}
      </div>

      {/* Web tab */}
      {tab === "web" && (
        <>
       

          <div className="h-full w-full flex flex-col md:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 items-start gap-10 px-10">
            {visible.map((proj) => (
              <ProjectCard key={proj.id} {...proj} />
            ))}
          </div>
        </>
      )}

      {/* Mobile tab */}
      {tab === "mobile" && (
        <div className="w-full grid grid-cols-1 xl:grid-cols-2 gap-10 px-10">
          {mobileProjects.map((app) => (
            <MobileProjectCard key={app.id} {...app} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Projects;