import React from "react";
import tour from "../assests/tour app.avif";
import ecommarce from "../assests/e-commarce.avif";
import tic from "../assests/tic.avif";
import crypto from "../assests/crpto.jpg";
import note from "../assests/notes.avif";
import gym from "../assests/gym.avif";
import { Link } from "react-router-dom";
function Portfolio() {
  const portfolio = [
    {
      id: 1,
      img: tour,
      source: "https://github.com/Nitik-sharma/ReactTourApp.git",
      demo: "https://react-tour-app-sooty.vercel.app/",
    },
    {
      id: 2,
      img: ecommarce,
      source:
        "https://github.com/Nitik-sharma/React-E-Commarce-app-firebase.git",
      demo: "https://react-e-commarce-app-firebase.vercel.app/",
    },
    {
      id: 3,
      img: tic,
      source: "https://github.com/Nitik-sharma/TicTacToe.git",
      demo: "https://tic-tac-toe-one-steel.vercel.app/",
    },
    {
      id: 4,
      img: crypto,
      source: "https://github.com/Nitik-sharma/CryptoDasboard.git",
      demo: "https://crypto-dasboard.vercel.app/",
    },
    {
      id: 5,
      img: gym,
      source: "https://github.com/Nitik-sharma/fitclub.git",
      demo: "https://fitclub-iota.vercel.app/",
    },
    {
      id: 6,
      img: note,
      source: "https://github.com/Nitik-sharma/React-NoteApp.git",
      demo: "https://react-note-app-six.vercel.app/",
    },
  ];
  return (
    <div
      name="portfolio"
      className=" bg-gradient-to-b from-black to-gray-800  text-gray-300 w-full h-full"
    >
      <div className=" px-20 py-16 text-start">
        <div>
          <p className=" text-xl md:text-4xl font-bold mb-5 border-b-4 border-gray-500 w-28">
            Portfolio
          </p>
          <p className=" text-md font-medium mb-4 ">
            Check out some of my work there
          </p>
        </div>
        <div className=" w-full grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {portfolio.map(({ id, img, source, demo }) => (
            <div
              className=" border-2 border-gray-400 shadow-lg shadow-gray-300  rounded-lg"
              key={id}
            >
              <img
                src={img}
                alt=""
                className=" rounded-lg hover:scale-105 duration-300"
              />
              <div className=" flex items-center justify-center gap-6  font-semibold  text-lg px-4 py-4">
                <a
                  href={source}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-blue-500 duration-100   hover:scale-105"
                >
                  Source{" "}
                </a>
                <a
                  href={demo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" hover:text-blue-500 duration-100   hover:scale-105  "
                >
                  Demo{" "}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
