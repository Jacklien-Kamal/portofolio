import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { projects } from "../../constants";

const ProjectDetails = () => {
  const { id } = useParams();
  const index = projects.findIndex((p) => p.id === id);
  const project = projects[index];
  const [activeImg, setActiveImg] = useState(0);

  // عند فتح الصفحة أو التنقل بين المشاريع: ارجع لأول الصفحة وصفّر الصورة
  useEffect(() => {
    window.scrollTo(0, 0);
    setActiveImg(0);
  }, [id]);

  if (!project) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center gap-4 text-white">
        <h1 className="text-3xl font-semibold">Project not found</h1>
        <Link
          to="/#projects"
          className="rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 px-4 py-2"
        >
          Back to projects
        </Link>
      </div>
    );
  }

  const {
    title,
    img,
    images,
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
  } = project;

  const gallery = images && images.length > 0 ? images : [img];
  const prev = projects[index - 1];
  const next = projects[index + 1];

  const meta = [
    { label: "Category", value: category },
    { label: "Role", value: role },
    { label: "Year", value: year },
    { label: "Client", value: client },
    { label: "Status", value: status },
  ].filter((m) => m.value);

  return (
    <div className="mx-auto max-w-5xl px-6 py-16 font-sans text-white">
      <Link
        to="/#projects"
        className="inline-block text-sm text-cyan-400 hover:underline"
      >
        ← Back to projects
      </Link>

      <h1 className="mt-6 text-4xl font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-2 md:text-5xl">
        {title}
      </h1>

      <div className="mt-8 grid gap-10 lg:grid-cols-5">
        {/* Gallery */}
        <div className="lg:col-span-3">
          <img
            src={gallery[activeImg]}
            alt={`${title} screenshot ${activeImg + 1}`}
            className="w-full rounded-lg border border-[#2A0E61] object-cover shadow-lg"
          />
          {gallery.length > 1 && (
            <div className="mt-3 flex gap-3 overflow-x-auto">
              {gallery.map((src, i) => (
                <button
                  key={src}
                  onClick={() => setActiveImg(i)}
                  aria-label={`Show screenshot ${i + 1}`}
                  className={`h-16 w-24 shrink-0 overflow-hidden rounded-md border-2 ${
                    i === activeImg ? "border-cyan-400" : "border-[#2A0E61]"
                  }`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Info */}
        <div className="lg:col-span-2">
          <p className="text-gray-300 leading-relaxed">{longDesc || desc}</p>

          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href={livePre}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 px-4 py-2 transition-transform duration-300 hover:scale-105"
            >
              Live Preview
            </a>
            {gitLink && (
              <a
                href={gitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-full border border-white px-4 py-2 transition-transform duration-300 hover:scale-105"
              >
                Github
              </a>
            )}
          </div>

          {meta.length > 0 && (
            <dl className="mt-8 divide-y divide-[#2A0E61] border-y border-[#2A0E61]">
              {meta.map((m) => (
                <div key={m.label} className="flex justify-between py-2 text-sm">
                  <dt className="text-gray-400">{m.label}</dt>
                  <dd className="text-gray-100">{m.value}</dd>
                </div>
              ))}
            </dl>
          )}
        </div>
      </div>

      {tech.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Built with</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="rounded-md bg-[#2A0E61]/60 px-3 py-1 text-sm text-cyan-300"
              >
                {t}
              </span>
            ))}
          </div>
        </section>
      )}

      {features.length > 0 && (
        <section className="mt-12">
          <h2 className="text-2xl font-semibold">Key features</h2>
          <ul className="mt-4 space-y-2 text-gray-300">
            {features.map((f) => (
              <li key={f} className="flex gap-3">
                <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
                {f}
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Prev / Next */}
      <nav className="mt-16 flex justify-between gap-4 border-t border-[#2A0E61] pt-6 text-sm">
        {prev ? (
          <Link to={`/projects/${prev.id}`} className="text-cyan-400 hover:underline">
            ← {prev.title}
          </Link>
        ) : (
          <span />
        )}
        {next ? (
          <Link to={`/projects/${next.id}`} className="text-cyan-400 hover:underline">
            {next.title} →
          </Link>
        ) : (
          <span />
        )}
      </nav>
    </div>
  );
};

export default ProjectDetails;