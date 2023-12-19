import React, { useContext } from "react";

import darkMode from "../assests/dark.png";
import { MdOutlineArrowForwardIos } from "react-icons/md";
import { Link } from "react-scroll";
function Hero() {
  return (
    <div
      name="Home"
      className=" flex justify-center items-center flex-col px-4 py-6 bg-gradient-to-b from-slate-700 to-slate-900 text-gray-300 md:flex-row mt-20"
    >
      <div className="flex flex-col items-center  px-4 py-6 mt-7 mr-6 ml-9 w-full  md:w-3/6">
        <h1 className="text-xl md:text-3xl font-bold font-mono">Hello I'm a</h1>
        <h1 className="text-2xl md:text-6xl font-semibold  mt-3">
          Front-End Developer
        </h1>
        <p className=" px-6 py-8 text-xl font-medium">
          Dedicated Frontend Developer specializing in React.js, adept at
          building dynamic and efficient user interfaces. responsive and
          intuitive user experiences. Committed to staying at the forefront of
          React development to deliver top-notch, modern solutions.
        </p>
        <Link
          to="Portfolio"
          smooth
          duration={500}
          className=" group flex items-center justify-between  gap-2 px-2 py-3 bg-gradient-to-b from-blue-500 to-blue-700 text-xl font-bold rounded-md"
        >
          Portfolio
          <span className=" group-hover:rotate-90 duration-500">
            <MdOutlineArrowForwardIos size={20} />
          </span>
        </Link>
      </div>
      <div className=" w-full md:w-96 flex items-center">
        <img
          src={darkMode}
          alt="dark"
          className=" rounded-md  shadow-lg w-[90%] md:w-full shadow-slate-500 "
        />
      </div>
    </div>
  );
}

export default Hero;
