import React, { useState, useEffect } from "react";
import Projects from "../Projects/Projects";
import Technologies from "../Technologies/Technologies";
import Contact from "../contact/Contact";

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
        <section id="about" className="w-full xl:ps-40  pt-20 mt-20 xxs:w-[200%] ">
            <div className=" grid  grid-cols-1  mt-10 gap-y-24 sm:grid-cols-2 md:gap-y-1 sm:mx-20 md:mx-24">
              <div className="mt-10 gap-y-30 order-2 sm:order-1">
                <div className="text-center md:text-left mx-3">
                  <span className=" text-3xl lg:text-6xl font-bold bg-gradient bg-clip-text text-transparent">
                    Jacklien kamal {" "}
                  </span>
                  
                  <p className=" md:text-4xl py-10 text-3xl font-bold  bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent ">
                    <span className=" text-white ">I'm a  </span>
                      Frontend Developer 
                  </p>

                  <p className="text-gray-400  dropShadow mx-4">
                    I design and code beautifully simple things, and I love what I
                    do. A Result-Oriented Web Developer building and managing
                    Websites and Web Applications that leads to the success of the
                    overall product
                  </p>
                </div>
              </div>
              <div className="order-3 md:order-2 lg:order-2 flex justify-center md:justify-start">
                <a
                  href="https://res.cloudinary.com/dk2uh7sho/image/upload/v1732589610/Jacklien_Kamal_CV-1_eotiee.pdf"
                  download
                  className="bg-gradient-to-r from-purple-500 to-cyan-500 text-2xl mb-20 font-bold rounded-full md:w-[250px] px-7 py-4  md:py-6 md:px-10 inline-block transform transition-transform duration-500 ease-in-out shadow-custom-light hover:scale-100  hover:shadow-more-custom-light z-20"
                >
                  Download CV
                </a>
              </div>

              <div className="group order-1  relative w-40 sm:w-[200px] md:w-[250px] md:h-[250px] lg:w-[500px] lg:h-[500px] mx-auto  z-20">
                <img
                  src="https://avatars.githubusercontent.com/u/159618517?s=400&u=2f08910d8387547f283ac704c842c1c75aed19bc&v=4"
                  width={300}
                  height={300}
                  alt="Profile"
                  className="relative top- sm:mt-36  sm:-left-6 md:left-20 lg:mt-16 lg:left-20 custom-gradient-border rounded-full object-cover z-10 shadow-custom-light"
                />

                <img
                  src="https://yarmoiseev.github.io/frontend_lp_portfolio/img/big-ellipse.svg"
                  className="absolute -left-16 top-16 sm:z-0 sm:left-7 sm:top-64 md:-left-9 lg:top-28 lg:-left-44 animate-spin group-hover:scale-110 duration-200 "
                />
                <div className="absolute -right-10 bottom-24  md:-bottom-52 md:-right-16 md:w-28 md:h-28 lg:w-36 lg:h-36 lg:bottom-24 lg:right-12 w-24 h-24 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 animate-spin group-hover:scale-110 duration-500 shadow-custom-light"></div>
              </div>
            </div>
          </section>
      <Technologies/>
      <Projects/>
      <Contact/>
    </>
  );
}

export default Hero;
