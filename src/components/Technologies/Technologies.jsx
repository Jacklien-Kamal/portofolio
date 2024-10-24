import {
  Test_skill,
  Frontend_skill,
  Mobile_skill,
  others,
  Skill_data,
} from "../../../constants";
import React from "react";
import SkillDataProvider from "../SubComponents/SkillDataProvider";

const Technologies = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-y-3 h-full relative overflow-hidden pb-40 py-20 "
      style={{ transform: "scale(0.9" }}
    >
      <p className="md:text-3xl mb-12 ">Making App with modern technologies</p>

      <div className="grid grid-cols-7 gap-5 flex-wrap mt-4 md:gap-8 items-center">
        {Skill_data.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            title={image.skill_name}
            index={index}
          />
        ))}
      </div>

      <div className="grid grid-cols-6  flex-wrap mt-4 gap-5 mx-4 items-center">
        {Frontend_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            title={image.skill_name}
            index={index}
          />
        ))}
      </div>
      <div className="grid grid-cols-3 flex-wrap mt-4 gap-5 items-center mx-4 md:mx-10">
        {Test_skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            title={image.skill_name}
            index={index}
          />
        ))}
      </div>
      <div className="grid grid-cols-2 mt-4 gap-5 items-center ">
        {others.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            title={image.skill_name}
            index={index}
          />
        ))}
      </div>
      <div className="flex flex-row  flex-wrap mt-4 gap-5 items-center">
        {Mobile_Skill.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            title={image.skill_name}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="https://res.cloudinary.com/dk2uh7sho/video/upload/v1729618228/AQMGcbDhzJs8tFsh6YMj2pVG14AQtY0z8Ak8Dn1P4ZeJrEFkIEqwKRaU4_ZWNjhptpLBgLRjZwcPXUM7NjIuZZeT_avyiag.mp4"
          />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
