import React, { useContext, useState } from "react";
import { FiMenu } from "react-icons/fi";
import { MdClose } from "react-icons/md";

function Navbar() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className=" fixed top-0 w-full h-20 flex justify-between items-center bg-slate-800 text-gray-300 shadow-lg shadow-slate-800">
        <h1 className=" text-2xl md:text-4xl font-my font-semibold px-3 py-4">
          Nitik
        </h1>

        <div>
          <ul className="  justify-between items-center  gap-3 mr-3 hidden md:flex">
            <li className=" text-2xl font-bold hover:text-blue-500 duration-200">
              Home
            </li>
            <li className=" text-2xl font-bold hover:text-blue-500 duration-200">
              About
            </li>
            <li className="  text-2xl  font-bold hover:text-blue-500 duration-200">
              Portfolio
            </li>
            <li className=" text-2xl font-bold hover:text-blue-500 duration-200">
              Experience
            </li>
            <li className=" text-2xl font-bold hover:text-blue-500 duration-200">
              Contact{" "}
            </li>
          </ul>
          {/* For mobile design */}
          <div
            className=" absolute top-7 right-5 flex md:hidden mr-2"
            onClick={() => handleOpen()}
          >
            {open ? <MdClose size={30} /> : <FiMenu size={30} />}
          </div>
          {open && (
            <div className=" absolute right-0 top-14 w-72 h-scree bg-gray-800 px-6 py-10">
              <ul className="flex flex-col gap-6  justify-between items-center   mr-3  md:hidden">
                <li className="  text-4xl  font-bold hover:text-blue-500 duration-200">
                  Home
                </li>
                <li className="  text-4xl  font-bold hover:text-blue-500 duration-200">
                  About
                </li>
                <li className="  text-4xl  font-bold hover:text-blue-500 duration-200">
                  Portfolio
                </li>
                <li className="  text-4xl  font-bold hover:text-blue-500 duration-200">
                  Experience
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
