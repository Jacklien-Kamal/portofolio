import {
  Backend_skill,
  Frontend_skill,
  Full_stack,
  Other_skill,
  Skill_data,
} from "../../../constants";
import React from "react";
import SkillDataProvider from "../SkillDataProvider";

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
        {Backend_skill.map((image, index) => (
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
        {Full_stack.map((image, index) => (
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
        {Other_skill.map((image, index) => (
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
            src="https://video.fcai21-3.fna.fbcdn.net/v/t42.1790-2/453654930_1207968130233764_2827588045108834233_n.mp4?_nc_cat=105&ccb=1-7&_nc_sid=55d0d3&efg=eyJybHIiOjMwMCwicmxhIjo1MTIsInZlbmNvZGVfdGFnIjoic3ZlX3NkIiwidmlkZW9faWQiOjE0Mzk4NDc2ODAwMzIxMjd9&_nc_ohc=Nau1G2_W-5EQ7kNvgHtjHOM&_nc_rml=0&_nc_ht=video.fcai21-3.fna&oh=00_AYDxr3yarftyXkSTRy-E5D7vU_1lssYmZWJCwVfJ5wLqcA&oe=66B29CFD"
          />
        </div>
      </div>
    </section>
  );
};

export default Technologies;
