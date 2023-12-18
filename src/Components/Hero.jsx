import React, { useContext } from "react";

import darkMode from "../assests/dark.png";
import { FaArrowRight } from "react-icons/fa";
function Hero() {
  return (
    <div
      name="home"
      className=" flex justify-center flex-col px-4 py-6 bg-gradient-to-b from-slate-700 to-slate-900 text-gray-300 md:flex-row mt-20"
    >
      <div className="flex flex-col items-center  px-4 py-6 mt-7 mr-6 ml-9 w-full  md:w-3/6">
        <h1 className="text-3xl font-bold font-mono">Hello I'm a</h1>
        <h1 className="text-6xl font-semibold  mt-3">Front-End Developer</h1>
        <p className=" px-6 py-8 text-xl font-medium">
          Dedicated Frontend Developer specializing in React.js, adept at
          building dynamic and efficient user interfaces. responsive and
          intuitive user experiences. Committed to staying at the forefront of
          React development to deliver top-notch, modern solutions.
        </p>
        <button className=" flex items-center justify-between  gap-2 border border-gray-400 px-2 py-3 bg-gradient-to-b from-blue-500 to-blue-700">
          <p className=" text-xl font-bold text-yellow-50"> Portfolio</p>
          <span>
            <FaArrowRight size={20} />
          </span>
        </button>
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
