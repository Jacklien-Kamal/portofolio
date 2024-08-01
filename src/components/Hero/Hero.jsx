import React, { useState, useEffect } from "react";
import Projects from "../Projects/Projects";
import Technologies from "../Technologies/Technologies";

function Hero() {
  const fullText = "Heello, I'm Jacklien";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length-1) {
        clearInterval(interval);
      }
    }, 100 ); // Adjust the interval time as needed
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>

      {/* Profile */}
      <section id="about" className=" pt-20 bg-background mt-20 xxs:w-[200%]">
        <div className=" md:container grid sm:grid-cols-2 grid-cols-1 mt-10 gap-y-24 md:gap-y-1">
          <div className="mt-10 gap-y-30 order-2 md:order-1">
            <div className="text-center md:text-left"> 
              <span className=" text-[38px] md:text-7xl  bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent text-nowrap">
                {displayedText}
              </span>
              <p className="text-[38px] md:text-5xl py-10 text-6xl font-bold">
                a Frontend Developer
              </p>

              <p className="text-gray-400 text-lg dropShadow">
                I design and code beautifully simple things, and I love what I do.
                A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product
              </p>
            </div>
          </div>
          <div className="order-3 md:order-2 lg:order-2 flex justify-center md:justify-start">
            <a
              href="./src/assets/JacklienKamalCV.pdf"
              download
              className="bg-gradient-to-r from-purple-500 to-cyan-500 text-2xl mb-20 font-bold rounded-full md:w-[250px] px-7 py-4  md:py-6 md:px-10 inline-block transform transition-transform duration-300 ease-in-out shadow-custom-light hover:scale-110 hover:shadow-more-custom-light"
            >
              Download CV
            </a>
          </div>

          <div className="group order-1  relative w-52 sm:w-[200px] md:w-[250px] md:h-[250px] lg:w-[500px] lg:h-[500px] mx-auto ">
            <img
              src="https://avatars.githubusercontent.com/u/159618517?s=400&u=2f08910d8387547f283ac704c842c1c75aed19bc&v=4"
              width={300}
              height={300}
              alt="Profile"
              className="relative top- sm:mt-36  sm:-left-6 md:left-20 lg:mt-16 lg:left-20 custom-gradient-border rounded-full object-cover z-10 shadow-custom-light"
            />

            <img
              src="https://yarmoiseev.github.io/frontend_lp_portfolio/img/big-ellipse.svg"
              className="absolute -left-28 top-16 sm:z-0 sm:left-7 sm:top-64 md:-left-9  lg:top-28 lg:-left-44 animate-spin group-hover:scale-105"
            />
            <div className="absolute sm:w-20 sm:h-20  -right-12 bottom-32 sm:right-32 sm:bottom-7 md:-bottom-52 md:-right-16 md:w-28 md:h-28 lg:w-36 lg:h-36 lg:bottom-24 lg:right-12 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 animate-spin group-hover:scale-105 shadow-custom-light"></div>
          </div>
        </div>
      </section>
      <Projects/>
      <Technologies/>
    </>
  );
}

export default Hero;
