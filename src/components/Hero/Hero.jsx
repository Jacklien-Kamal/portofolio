import React, { useState, useEffect } from "react";

function Hero() {
  const fullText = "Heello, I'm Jacklien,";
  const [displayedText, setDisplayedText] = useState("");

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText((prev) => prev + fullText[index]);
      index++;
      if (index === fullText.length-1) {
        clearInterval(interval);
      }
    }, 150); // Adjust the interval time as needed
    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, []);

  return (
    <>
      {/* Profile */}
      <section className="hero py-20 bg-background ">
        <div className="container grid sm:grid-cols-2 grid-cols-1 mt-10 gap-y-24">
          <div className="mt-10 gap-y-30 ">
            <div>
              <span className="text-[38px] md:text-7xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
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
          <div className="order-3 md:order-2">
            <a
              href="./src/assets/JacklienKamalCV.pdf"
              download
              className="bg-gradient-to-r from-purple-500 to-cyan-500 text-xl mb-20 font-bold rounded-full md:w-[250px] px-5 py-3 md:text-2xl md:py-6 md:px-10 inline-block transform transition-transform duration-300 ease-in-out shadow-custom-light hover:scale-110 hover:shadow-more-custom-light"
            >
              Download CV
            </a>
          </div>

          <div className="group relative w-52 md:w-[200px] md:h-[200px] lg:w-[500px] lg:h-[500px] mx-auto ">
            <img
              src="https://avatars.githubusercontent.com/u/159618517?s=400&u=2f08910d8387547f283ac704c842c1c75aed19bc&v=4"
              width={300}
              height={300}
              alt="Profile"
              className="relative custom-gradient-border rounded-full object-cover z-10 shadow-custom-light"
            />

            <img
              src="https://yarmoiseev.github.io/frontend_lp_portfolio/img/big-ellipse.svg"
              className="absolute -left-72 top-12 z-0 animate-spin group-hover:scale-105"
            />
            <div className="absolute right-36 bottom-32 w-40 h-40 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 animate-spin group-hover:scale-105 shadow-custom-light"></div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Hero;
