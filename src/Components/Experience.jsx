import React from "react";
import html from "../assests/html.png";
import css from "../assests/css.png";
import js from "../assests/javascript.png";
import react from "../assests/react.png";
import redux from "../assests/redux.jpeg";
import bootstrap from "../assests/bootstrap.png";
import tailwind from "../assests/tailwind.jpeg";
import firebase from "../assests/firebase.png";
import git from "../assests/git.png";

function Experience() {
  const skiils = [
    {
      id: 1,
      img: html,
      title: "html",
      style: "shadow-orange-400",
    },
    {
      id: 2,
      img: css,
      title: "css",
      style: "shadow-blue-400",
    },
    {
      id: 3,
      img: js,
      title: "Java-Script",
      style: "shadow-yellow-400",
    },
    {
      id: 4,
      img: react,
      title: "react-js",
      style: "shadow-blue-700",
    },
    {
      id: 5,
      img: redux,
      title: "redux",
      style: "shadow-purple-500",
    },
    {
      id: 6,
      img: bootstrap,
      title: "bootstrap",
      style: "shadow-purple-700",
    },
    {
      id: 7,
      img: tailwind,
      title: "tailwind",
      style: "shadow-blue-500",
    },
    {
      id: 8,
      img: firebase,
      title: "firebase",
      style: "shadow-yellow-700",
    },
    {
      id: 9,
      img: git,
      title: "git-hub",
      style: "shadow-gray-400",
    },
  ];
  return (
    <div
      name="experience"
      className=" bg-gradient-to-b from-black to-gray-800  text-gray-300 w-full h-full"
    >
      <div className=" px-20 py-16 text-start">
        <div>
          <p className=" text-xl md:text-4xl font-bold mb-5 border-b-4 border-gray-500 w-28">
            Experience
          </p>
          <p className=" text-md font-medium mb-4 ">
            These are the technologies I've worked with
          </p>
        </div>
        <div className=" w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {skiils.map(({ id, img, title, style }) => (
            <div
              className={` border-2 border-gray-400 shadow-lg   rounded-lg w-52 flex flex-col items-center ${style} `}
              key={id}
            >
              <img
                src={img}
                alt=""
                className=" rounded-lg hover:scale-105 duration-300 w-48 h-40 mt-3"
              />
              <div className=" flex items-center justify-center gap-6  font-semibold  text-lg px-4 py-4">
                <p className=" hover:text-blue-500 duration-100   hover:scale-105   uppercase">
                  {title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Experience;
