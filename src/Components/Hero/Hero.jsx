import React from "react";
import hero from "../../assests/Hero-1.jpg";
function Hero() {
  return (
    <div className=" flex justify-between flex-row px-4 py-6 bg-slate-600 text-gray-300 ">
      <div className="flex flex-col items-center  px-4 py-6 mt-7 mr-6 ml-9">
        <h1 className="text-3xl font-bold font-mono">Hello I'm </h1>
        <h1 className="text-6xl font-semibold  mt-3">Nitik</h1>
        <p className=" px-6 py-8 text-xl font-medium">
          Dedicated Frontend Developer specializing in React.js, adept at
          building dynamic and efficient user interfaces. With a keen eye for
          detail and a passion for creating engaging web applications, I bring
          expertise in leveraging React's powerful capabilities to deliver
          responsive and intuitive user experiences. Committed to staying at the
          forefront of React development to deliver top-notch, modern solutions.
        </p>
      </div>
      <div>
        <img
          src={hero}
          alt=""
          className=" rounded-md  shadow-lg shadow-black"
        />
      </div>
    </div>
  );
}

export default Hero;
