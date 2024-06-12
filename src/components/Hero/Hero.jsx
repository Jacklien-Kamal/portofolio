import React from "react";

function Hero() {
  return (
    <>
    {/* Profile */}
      <section className="hero py-20 bg-background ">
        <div className="container grid sm:grid-cols-2 grid-cols-1 mt-10 gap-y-24">
          <div class="mt-10 gap-y-36">
            <div>
              <span className="text-[38px]  md:text-7xl font-bold bg-gradient-to-r from-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Hello, I'm Jacklien,
              </span>
              <p className="text-[38px] md:text-5xl py-10 text-6xl font-bold">
                a Frontend Developer
              </p>

              <p className="text-gray-400 text-lg dropShadow md:mb-16">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias
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
            

          <div className=" group relative w-52 md:w-[200px] md:h-[200px]  lg:w-[500px] lg:h-[500px] mx-auto ">
          <img
            src="https://yarmoiseev.github.io/frontend_lp_portfolio/img/moiseev-photo.png"
            alt="Profile"
            className="relative saturate-[.4] custom-gradient-border rounded-full object-cover  z-10 shadow-custom-light "
          />
          
          <img
            src="https://yarmoiseev.github.io/frontend_lp_portfolio/img/big-ellipse.svg"
            className="absolute -left-72 top-12   z-0 animate-spin group-hover:scale-105 "
          />
          <div className="absolute right-36 bottom-32 w-40 h-40  rounded-full  bg-gradient-to-r from-purple-500 to-cyan-500 hover:animate-spin group-hover:scale-105 shadow-custom-light"></div>
        </div>
        </div>
      </section>

     




    </>
  );
}

export default Hero;
