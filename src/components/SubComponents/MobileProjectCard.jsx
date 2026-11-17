import React, { useState } from "react";

const MobileProjectCard = ({
  images = [],
  title,
  desc,
  tech = [],
  features = [],
  category,
  platform,
  role,
  playStore,
  appStore,
  livePre,
  gitLink,
}) => {
  const [idx, setIdx] = useState(0);

  const links = [
    { label: "Google Play", href: playStore },
    { label: "App Store", href: appStore },
    { label: "Live Preview", href: livePre },
  ].filter((l) => l.href);

  return (
    <div className="flex flex-col overflow-hidden rounded-lg border border-[#2A0E61] font-sans shadow-lg sm:flex-row z-20">
      {/* Left: screenshots */}
      <div className="flex shrink-0 flex-col items-center gap-3 bg-[#2A0E61]/20 p-4 sm:w-56 lg:w-64">
        <div className="h-80 w-44 overflow-hidden rounded-[1.75rem] border-4 border-[#2A0E61] bg-black shadow-lg sm:h-96 sm:w-full">
          <img
            src={images[idx]}
            alt={`${title} screenshot ${idx + 1}`}
            className="h-full w-full object-cover object-top"
          />
        </div>

        {images.length > 1 && (
          <div className="flex gap-2">
            {images.map((src, i) => (
              <button
                key={src}
                onClick={() => setIdx(i)}
                aria-label={`Show screenshot ${i + 1}`}
                className={`h-12 w-8 overflow-hidden rounded-md border-2 transition ${
                  i === idx
                    ? "border-cyan-400"
                    : "border-transparent opacity-60 hover:opacity-100"
                }`}
              >
                <img src={src} alt="" className="h-full w-full object-cover object-top" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Right: content */}
      <div className="flex flex-1 flex-col p-5">
        <div className="flex flex-wrap items-start justify-between gap-2">
          <h2 className="text-2xl font-semibold text-white">{title}</h2>
          <div className="flex shrink-0 gap-2">
            {platform && (
              <span className="rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 px-2 py-0.5 text-xs text-white">
                {platform}
              </span>
            )}
            {category && (
              <span className="rounded-full border border-[#2A0E61] px-2 py-0.5 text-xs text-gray-400">
                {category}
              </span>
            )}
          </div>
        </div>

        {role && <p className="mt-1 text-sm text-gray-400">{role}</p>}

        <p className="mt-3 text-gray-300">{desc}</p>

        {features.length > 0 && (
          <ul className="mt-4 space-y-1.5 text-sm text-gray-300">
            {features.map((f) => (
              <li key={f} className="flex gap-2">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500" />
                {f}
              </li>
            ))}
          </ul>
        )}

        {tech.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {tech.map((t) => (
              <span
                key={t}
                className="rounded-md bg-[#2A0E61]/60 px-2 py-0.5 text-xs text-cyan-300"
              >
                {t}
              </span>
            ))}
          </div>
        )}

        {(links.length > 0 || gitLink) && (
          <div className="mt-auto flex flex-wrap items-center gap-2 pt-5">
            {links.map((l) => (
              <a
                key={l.label}
                href={l.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transform rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 px-3 py-2 transition-transform duration-300 ease-in-out hover:scale-110"
              >
                {l.label}
              </a>
            ))}
            {gitLink && (
              <a
                href={gitLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transform rounded-full border border-white px-3 py-1 text-lg transition-transform duration-300 hover:scale-110"
              >
                Github
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileProjectCard;