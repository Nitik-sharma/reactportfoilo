import React from "react";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import { BsFillPersonLinesFill } from "react-icons/bs";
function SocialLinks() {
  const links = [
    {
      id: 1,
      child: (
        <>
          LinkedIn <FaLinkedin size={30} />
        </>
      ),
      href: "https://www.linkedin.com/in/nitik-sharma-774b6922a/",
      style: "rounded-tr-md",
    },
    {
      id: 2,
      child: (
        <>
          Github <FaGithub size={30} />
        </>
      ),
      href: "https://github.com/Nitik-sharma",
      style: "rounded-tr-md",
    },
    // {
    //   id: 3,
    //   child: (
    //     <>
    //       Instagram <FaInstagram size={30} />
    //     </>
    //   ),
    //   href: "https://www.instagram.com/_i_m_ni_3_k/?igshid=MzNlNGNkZWQ4Mg%3D%3D",
    //   style: "rounded-tr-md",
    // },

    {
      id: 4,
      child: (
        <>
          Resume <BsFillPersonLinesFill size={30} />
        </>
      ),
      href: "/Nitik Sharma.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="  hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            className={
              " flex justify-between items-center w-40 h-14 px-4 bg-gray-600 ml-[-100px] hover:rounded-md duration-300 hover:ml-[-10px] text-white" +
              "" +
              style
            }
            key={id}
          >
            <a
              className=" flex justify-between items-center w-full text-white "
              href={href}
              download={download}
              target="_blank"
            >
              <>{child}</>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default SocialLinks;
