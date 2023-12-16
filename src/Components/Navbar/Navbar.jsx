import React, { useContext, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";
import myContext from "../../Context/Context";

function Navbar() {
  const context = useContext(myContext);
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };
  const { mode, toggleBtn } = context;

  return (
    <div>
      <div
        className=" relative flex justify-between items-center bg-red-500 text-slate-200"
        style={{
          backgroundColor: mode === "dark" ? "#000" : "",
          color: mode === "dark" ? "white" : "",
        }}
      >
        <h1 className=" text-2xl md:text-4xl font-my font-semibold px-3 py-4">
          Nitik
        </h1>
        <div onClick={toggleBtn}>
          {mode === "light" ? <CiLight size={60} /> : <MdDarkMode size={60} />}
        </div>
        <div>
          <ul className="  justify-between items-center  gap-3 mr-3 hidden md:flex">
            <li className=" text-2xl font-bold hover:text-blue-500 duration-200">
              Home
            </li>
            <li className=" text-2xl font-bold hover:text-blue-500 duration-200">
              About
            </li>
            <li className=" text-2xl font-bold hover:text-blue-500 duration-200">
              Project
            </li>
            <li className=" text-2xl font-bold hover:text-blue-500 duration-200">
              Contact{" "}
            </li>
          </ul>
          {/* For mobile design */}
          <div className=" flex md:hidden mr-2" onClick={() => handleOpen()}>
            {open ? <MdClose size={30} /> : <FiMenu size={30} />}
          </div>
          {open && (
            <div className=" absolute right-0 top-14 w-72 h-screen bg-red-500">
              <ul className="flex flex-col gap-6  justify-between items-center   mr-3  md:hidden">
                <li className="  text-4xl  font-bold hover:text-blue-500 duration-200">
                  Home
                </li>
                <li className="  text-4xl  font-bold hover:text-blue-500 duration-200">
                  About
                </li>
                <li className="  text-4xl  font-bold hover:text-blue-500 duration-200">
                  Project
                </li>
                <li className="  text-4xl  font-bold hover:text-blue-500 duration-200">
                  Contact{" "}
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
