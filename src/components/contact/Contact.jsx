import React from "react";

const Contact = () => {
  return (
    <div className="  items-center justify-center relative">
      
      <form id="contact" className="w-[50%] mx-auto mt-40 grid gap-3 ">
        <h2 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 pb-12 text-center">
          Contact Me
        </h2>
        <div className="mb-3   z-20">
          <input
            type="text"
            placeholder="Your name"
            name="name"
            className="w-full py-2 h-12 text-sm text-gray-200 placeholder-gray-400 bg-inherit border border-gray-100 rounded shadow px-3"
          />
        </div>
        <div className="mb-3 z-20">
          <input
            type="email"
            placeholder="Email"
            name="email"
            className="w-full  py-2 h-12 text-sm text-gray-200 placeholder-gray-400 bg-inherit border border-gray-100 rounded shadow px-3"
          />
        </div>
        <div className="mb-3 z-20">
          <textarea
            placeholder="Your message"
            name="message"
            className="w-full py-2 h-32 text-sm text-gray-200 placeholder-gray-400 bg-inherit border border-gray-100 rounded shadow px-3"
          />
        </div>
        <div className="flex justify-center">
          <button className="bg-gradient-to-r from-purple-500 to-cyan-500 text-xl mb-20 font-bold rounded-full px-3 py-1 my-2 inline-block transform transition-transform duration-300 ease-in-out shadow-custom-light hover:scale-100  hover:shadow-more-custom-light z-20">
            Send a message
          </button>
        </div>
      </form>
      
    </div>
  );
};

export default Contact;
