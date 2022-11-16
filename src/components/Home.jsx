import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";
function Home() {
  // Using name property for react smooth scroll
  return (
    <div name="home" className="bg-[#0a192f] w-full  h-screen">
      {/*Container*/}
      <div className="max-w-[1000px] mx-auto flex px-10 flex-col justify-center h-full">
        <p className="text-[#59C1BD]">Hy, My name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold">Abdellah El Aajjouri</h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#A0E4CB]">
          I'm a Frontend Developer.
        </h2>
        <p className="max-w-[700px] py-4 sm:text-xl ">
          I'm a Frontend Developer specializing in Converting any web design to
          a professional, pixel-perfect website (and occasionally designing).I'm
          currently learning Backend development.{" "}
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="border-2 px-6 py-3 my-2 flex items-center group hover:bg-[rgb(89,193,189)] hover:border-[#59C1BD]">
              View Work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;
