import React, { useEffect, useState } from "react";
import { Socials } from "../../../constants";

const links = [
  { href: "#about", label: "About Us" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact Us" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  // اقفل المنيو لو الشاشة وصلت md أو ضغطت Escape
  useEffect(() => {
    const onResize = () => window.innerWidth >= 768 && setOpen(false);
    const onKey = (e) => e.key === "Escape" && setOpen(false);
    window.addEventListener("resize", onResize);
    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("resize", onResize);
      window.removeEventListener("keydown", onKey);
    };
  }, []);

  return (
    <div className="w-full fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50">
      {/* ====== الشريط الأساسي (نفس تصميمك) ====== */}
      <div className="w-full h-[65px] sm:px-10">
        <div className="w-full h-full flex flex-row items-center justify-between m-auto px-[10px]">
          <a
            href="#about"
            className="h-auto w-auto md:flex md:flex-row items-center hidden text-gray-200"
          >
            welcome
            <span className="font-bold ml-[10px] hidden md:block text-gray-300"></span>
          </a>

          <div className="hidden md:flex w-full  h-full flex-row items-center justify-between md:mx-20">
            <div
              dir="ltr"
              className="flex flex-row-reverse items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] py-1 px-2 lg:px-[20px] lg:py-[10px] rounded-full text-gray-200"
            >
              <a href="#about" className="cursor-pointer hover:scale-110 text-sm lg:text-lg">
                About Us
              </a>
              <a href="#projects" className="cursor-pointer hover:scale-110 text-sm lg:text-lg">
                Projects
              </a>
              <a href="#skills" className="cursor-pointer hover:scale-110 text-sm lg:text-lg">
                Skills
              </a>
              <a href="#contact" className="cursor-pointer hover:scale-110 text-sm lg:text-lg">
                Contact Us
              </a>
            </div>
          </div>

          <div className="hidden md:flex flex-row gap-1 sm:gap-4">
            {Socials.map((social) => (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.name}
              >
                <img
                  src={social.src}
                  alt={social.name}
                  className="rounded-full w-10 lg:w-8"
                />
              </a>
            ))}
          </div>

          <a href="#about" className="md:hidden text-gray-200 font-semibold">
            welcome
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            className="md:hidden flex h-10 w-10 flex-col items-center justify-center gap-1.5"
          >
            <span
              className={`h-0.5 w-6 bg-gray-200 transition-transform duration-300 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-gray-200 transition-opacity duration-300 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-6 bg-gray-200 transition-transform duration-300 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* ====== المنيو (تحت md) ====== */}
      <div
        id="mobile-menu"
        className={`md:hidden overflow-hidden bg-[#030014]/95 transition-[max-height] duration-300 ${
          open ? "max-h-[420px] border-t border-[#7042f861]" : "max-h-0"
        }`}
      >
        <ul className="flex flex-col px-6 py-3 text-gray-200">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => setOpen(false)}
                className="block py-3 text-base"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex gap-3 px-6 pb-5">
          {Socials.map((social) => (
            <a
              key={social.name}
              href={social.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.name}
            >
              <img
                src={social.src}
                alt={social.name}
                className="h-8 w-8 rounded-full object-cover"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;