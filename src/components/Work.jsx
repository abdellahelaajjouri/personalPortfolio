import React from "react";
import WorkImg from "../assets/logo.png";
import clipord from "../assets/prImgs/clipordLanding.jpg";
import countries from "../assets/prImgs/countriesApi.jpg";
import HandleBund from "../assets/prImgs/HandleBundl.jpg";
import meet from "../assets/prImgs/meet.jpg";
import shrtly from "../assets/prImgs/shrtly.jpg";
import Todo from "../assets/prImgs/Todo.jpg";

function Work() {
  return (
    <div name="work" className="w-full   bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline  border-b-4  border-[#59C1BD]">
            work
          </p>
          <p className="py-6">// check out some of my recent work</p>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-col-3 gap-4">
          <div
            style={{ backgroundImage: `url(${countries})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* HOVER EFFECTS */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold -tracking-wider">
                React JS Rest API
              </span>
              <div className="pt-8 text-center">
                <a
                  href=""
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Demo
                  </button>
                </a>

                <a
                  href=""
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${Todo})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* HOVER EFFECTS */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold -tracking-wider">
                React Js To Do App
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://gilded-seahorse-809755.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Demo
                  </button>
                </a>

                <a
                  href="https://github.com/abdellahelaajjouri/ToDo-App/tree/main/src"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${clipord})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* HOVER EFFECTS */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold -tracking-wider">
                Clipboard landing page
              </span>
              <div className="pt-8 text-center">
                <a
                  href="http://clipboard-landing-page-mster.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Demo
                  </button>
                </a>

                <a
                  href="https://github.com/abdellahelaajjouri/clipboard-landing-page-mster"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>

          <div
            style={{ backgroundImage: `url(${HandleBund})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* HOVER EFFECTS */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold -tracking-wider">
                huddle Landing page
              </span>
              <div className="pt-8 text-center">
                <a
                  href="http://huddle-landing-page-with-alternating-feature-blocks-self.vercel.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Demo
                  </button>
                </a>

                <a
                  href="https://github.com/abdellahelaajjouri/Huddle-landing-page-with-alternating-feature-blocks"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${meet})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* HOVER EFFECTS */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold -tracking-wider">
                Meet Landing Page
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://resonant-muffin-8d52ce.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Demo
                  </button>
                </a>

                <a
                  href="https://github.com/abdellahelaajjouri/Meet-landing-page-master"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${shrtly})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div"
          >
            {/* HOVER EFFECTS */}
            <div className="opacity-0 group-hover:opacity-100">
              <span className="text-2xl font-bold -tracking-wider">
                Shrtly landing Page
              </span>
              <div className="pt-8 text-center">
                <a
                  href="https://dazzling-daifuku-ef1f9e.netlify.app/"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Demo
                  </button>
                </a>

                <a
                  href="https://github.com/abdellahelaajjouri/shrtly/blob/main/design/desktop-preview.jpg"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg ">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
