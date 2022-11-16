import React from "react";

function About() {
  return (
    <div name="about" className="bg-[#0a192f] w-full h-screen">
      <div className="w-full h-full flex flex-col items-center justify-center">
        <div className="max-w-[1000px] w-full px-4 grid grid-cols-2 gap-8 ">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4  border-[#59C1BD] ">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4 ">
          <div className="sm:text-right text-4xl font-bold">
            <p>
              Hi, I'm Abdellah, nice to meet you. Please take a look around.
            </p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large corporations. What would you do if you had a software
              expert available at your fingertips?
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
