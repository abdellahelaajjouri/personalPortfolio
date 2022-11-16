import React from "react";
import HTML from "../assets/HTML.png";
import Github from "../assets/Github.png";
import CSS from "../assets/CSS.png";
import JS from "../assets/JS.png";
import Tailwind from "../assets/Tailwind.png";
import ReactJS from "../assets/ReactJS.png";
function Skills() {
  return (
    <div name="skills" className="w-full h-screen bg-[#0a192f] ">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4  border-[#59C1BD] ">
            Experience
          </p>
          <p className="py-4">// These are the technologies I've Mastered</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500  flex flex-col justify-between">
            <img className="w-[65px] mx-auto" src={HTML} alt="HTMl icon" />
            <p className="my-4">HTML</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500  flex flex-col justify-between">
            <img className="w-20 mx-auto" src={CSS} alt="CSS icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500  flex flex-col justify-between">
            <img className="w-20 mx-auto" src={JS} alt="JS icon" />
            <p className="my-4">JS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500  flex flex-col justify-between">
            <img className="w-20 mx-auto" src={ReactJS} alt="ReactJS icon" />
            <p className="my-4">ReactJS</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 flex flex-col justify-between duration-500">
            <img className="w-20 mx-auto" src={Github} alt="Github icon" />
            <p className="my-4">Github</p>
          </div>
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500   flex flex-col justify-between">
            <img className="w-20 mx-auto" src={Tailwind} alt="Tailwind icon" />
            <p className="my-4">Tailwind</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Skills;
