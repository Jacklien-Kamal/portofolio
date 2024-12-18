import React from "react";
import {
  RxDiscordLogo,
  RxGithubLogo,
  RxInstagramLogo,
  RxTwitterLogo,
  RxLinkedinLogo,
} from "react-icons/rx";

import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="  h-full bg-transparent text-gray-200 shadow-lg  pt-20">
        <div className=" flex flex-col items-center justify-center ">
            <div className="w-full h-full grid grid-cols-2 md:grid-cols-3 gap-y-5  items-center justify-around flex-wrap ">
                

                <div className=" h-auto flex flex-col mx-12 md:mx-auto">
                    <div className="font-bold text-[16px]">Community</div>
                   
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <Link to='https://github.com/Jacklien-Kamal' className="text-[15px] ml-[6px] z-20">Github</Link>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxDiscordLogo />
                        <Link to={'https://discord.gg/YXKWmpCA'} className="text-[15px] ml-[6px] z-20">Discord</Link>    
                    </p>
                </div>
                <div className=" h-auto flex flex-col mx-12 md:mx-auto">
                    <div className="font-bold text-[16px]">Social Media</div>
                   
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxGithubLogo />
                        <Link to='https://x.com/Jackline_kmal' className="text-[15px] ml-[6px] z-20">Twitter</Link>    
                    </p>
                    <p className="flex flex-row items-center my-[15px] cursor-pointer">
                        <RxLinkedinLogo />
                        <Link to='https://www.linkedin.com/in/jacklin-kmal' className="text-[15px] ml-[6px] z-20    ">Linkedin</Link>    
                    </p>
                </div>
                <div className=" h-auto flex flex-col mx-12 md:mx-auto">
                    <div className="font-bold text-[16px]">About</div>
                   <p className="flex flex-row  my-[15px] cursor-pointer">
                     
                        <span className="text-[15px] ml-[6px]">Become Sponsor</span>    
                    </p>
                    <p className="flex flex-row  my-[15px] cursor-pointer">
                      
                        <span className="text-[15px] ml-[6px]">Learning about me</span>    
                    </p>
                  
                        <a href='mailto:jaclienkamal442@gmail.com' className="underline text-blue-500 text-[15px] ml-[6px] z-20">Jacklienkamal442@gmail.com</a>    
                </div>
            </div>

            <div className="my-[36px] text-[15px] text-center underline">
            &copy;  Dev 2024 Inc. All rights reserved
            </div>
        </div>
    </div>
  )
}

export default Footer