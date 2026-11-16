import React, { useState } from "react";

const ProjectCard = ({
  img,
  title,
  desc,
  longDesc,
  tech = [],
  features = [],
  category,
  role,
  year,
  client,
  status,
  livePre,
  gitLink,
}) => {
  const [expanded, setExpanded] = useState(false);

  const meta = [
    { label: "Year", value: year },
    { label: "Client", value: client },
  ].filter((m) => m.value);

  const hasMore = !!longDesc || features.length > 0 || meta.length > 0;

  return (
    <div className="flex flex-col overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] font-sans z-20">
      <img src={img} alt={title} className="w-full h-52 object-cover" />

      <div className="flex flex-1 flex-col p-4">
        <div className="flex items-start justify-between gap-2">
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
          {category && (
            <span className="mt-1 shrink-0 rounded-full border border-[#2A0E61] px-2 py-0.5 text-xs text-gray-400">
              {category}
            </span>
          )}
        </div>

        <p className={`mt-2 text-gray-300 ${expanded ? "" : "line-clamp-2"}`}>
          {expanded && longDesc ? longDesc : desc}
        </p>

        {tech.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-2">
            {(expanded ? tech : tech.slice(0, 4)).map((t) => (
              <span
                key={t}
                className="rounded-md bg-[#2A0E61]/60 px-2 py-0.5 text-xs text-cyan-300"
              >
                {t}
              </span>
            ))}
            {!expanded && tech.length > 4 && (
              <span className="px-1 py-0.5 text-xs text-gray-400">
                +{tech.length - 4}
              </span>
            )}
          </div>
        )}

        {expanded && (
          <div className="mt-4 space-y-4">
            {features.length > 0 && (
              <div>
                <h3 className="text-sm font-semibold text-white">Key features</h3>
                <ul className="mt-2 space-y-1.5 text-sm text-gray-300">
                  {features.map((f) => (
                    <li key={f} className="flex gap-2">
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {meta.length > 0 && (
              <dl className="divide-y divide-[#2A0E61] border-y border-[#2A0E61] text-sm">
                {meta.map((m) => (
                  <div key={m.label} className="flex justify-between py-1.5">
                    <dt className="text-gray-400">{m.label}</dt>
                    <dd className="text-gray-100">{m.value}</dd>
                  </div>
                ))}
              </dl>
            )}
          </div>
        )}

        {hasMore && (
          <button
            onClick={() => setExpanded((v) => !v)}
            aria-expanded={expanded}
            className="mt-3 self-start text-sm text-cyan-400 hover:underline"
          >
            {expanded ? "See less" : "See more"}
          </button>
        )}

        <div className="mt-auto flex flex-wrap items-center gap-2 pt-4">
          <a
            href={livePre}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-500 to-cyan-500 py-2 px-3 rounded-full inline-block transform transition-transform duration-300 ease-in-out shadow-custom-light hover:scale-110 hover:shadow-more-custom-light"
          >
            Live Preview
          </a>
          {gitLink && (
            <a
              href={gitLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-1 text-lg border border-white rounded-full inline-block transform transition-transform duration-300 hover:scale-110"
            >
              Github
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;