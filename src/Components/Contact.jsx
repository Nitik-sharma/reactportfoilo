import React from "react";

function Contact() {
  return (
    <div
      name="contact "
      className=" bg-gradient-to-b from-black to-slate-900 w-full h-full text-gray-300 px-2 py-5"
    >
      <div>
        <div className=" px-20 py-16 text-start">
          <p className=" text-xl md:text-4xl font-bold mb-5 border-b-4 border-gray-500 w-28">
            Contact
          </p>
          <p className=" text-md font-medium mb-4 ">
            Submit the form below to get touch with me
          </p>
        </div>
        <div className=" px-3 py-5">
          <form
            action="https://getform.io/f/02992203-4d9f-4acf-be34-1b7a8577a7af"
            method="POST"
            className=" flex flex-col items-center justify-center"
          >
            <input
              type="text"
              name="name"
              className=" p-2  bg-transparent  border-2 rounded-md text-white focus:outline-none w-[75%]"
              placeholder="Enter your name"
              required
            ></input>
            <input
              type="text"
              name="email"
              className=" my-4 p-2  bg-transparent  border-2 rounded-md text-white focus:outline-none w-[75%] "
              placeholder="Enter your emial"
              required
            ></input>
            <textarea
              name=""
              id=""
              cols="30"
              rows="10"
              className="p-2  bg-transparent  border-2 rounded-md text-white focus:outline-none w-[75%] "
            ></textarea>
            <button className=" text-gray-300 bg-gradient-to-b from-cyan-500 to-blue-600 mt-10 px-6 py-4 rounded-md flex items-center text-xl hover:scale-105 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
