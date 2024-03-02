import { AiOutlineHome } from "react-icons/ai";
import { LuLayers } from "react-icons/lu";
import { AiOutlineUser } from "react-icons/ai";
import { LuUsers } from "react-icons/lu";
import { FiMessageCircle } from "react-icons/fi";
import { LuFacebook } from "react-icons/lu";
import { BsInstagram } from "react-icons/bs";
import { LuLinkedin } from "react-icons/lu";
import { BiMenu } from "react-icons/bi";
export default function Navbar() {
  return (
    <div
      className=" xl:border-r-2 w-full  xl:w-[20%]
     xl:h-screen  flex xl:flex-col xl:p-12  justify-between gap-12
     xl:items-center xl:justify-center items-center 
     text-[18px] p-4 fixed "
    >
      <div
        className="  h-[60px] w-[60px]
        xl:w-[180px]  xl:h-[180px]   rounded-full    "
      >
        <img
          src="/dp1.jpeg"
          alt=""
          className=" h-[60px] w-[60px] rounded-full xl:w-[180px]  xl:h-[180px] border-gray-600 border-4 "
        />
      </div>
      <div className="text-[40px] text-[#FE2D55] xl:hidden ">
        <BiMenu />
      </div>
      <div className="w-full   xl:flex hidden xl:flex-col gap-4">
        <a href="#home">
          <div className="flex gap-2 items-center hover:text-[#FE2D55] cursor-pointer  ">
            <AiOutlineHome />
            Home
          </div>
        </a>
        <a href="#about">
          <div
            className="flex gap-2   items-center hover:text-[#FE2D55]
        transition-all duration-[0.5s] cursor-pointer"
          >
            <AiOutlineUser />
            About
          </div>
        </a>
        <a href="#work">
          <div
            className="flex gap-2 items-center hover:text-[#FE2D55]
         transition-all duration-[0.5s] cursor-pointer"
          >
            <LuLayers />
            WORKS
          </div>
        </a>
        <a href="#resume">
          <div
            className="flex gap-2 items-center hover:text-[#FE2D55]
        transition-all duration-[0.5s] cursor-pointer"
          >
            <LuUsers /> RESUME
          </div>
        </a>
        <a href="#contact">
          {" "}
          <div
            className="flex gap-2 items-center hover:text-[#FE2D55]
        transition-all duration-[0.5s] cursor-pointer"
          >
            <FiMessageCircle /> CONTACT
          </div>
        </a>
      </div>
      <div className="w-full mt-8 xl:flex flex-col gap-4 hidden">
        <div className="w-full h-[1px] bg-gray-600 "></div>
        <div>FIND ME</div>

        <div className="flex justify-between w-full ">
          <a href="https://www.facebook.com/razia.mansuri.562/">
            <div className="shadow-md  rounded-md hover:text-[#FE2D55] transition-all duration-[0.5s]   p-4 hover:-translate-y-1 ease-in-out delay-150  ">
              <LuFacebook />
            </div>
          </a>
          <a href="https://www.instagram.com/razia_mansuri77/">
            <div className="shadow-md  rounded-md hover:text-[#FE2D55] transition-all duration-[0.5s]   p-4 hover:-translate-y-1 ease-in-out delay-150">
              <BsInstagram />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/raziamansuri/">
            <div className="shadow-md rounded-md hover:text-[#FE2D55] transition-all duration-[0.5s]  p-4  hover:-translate-y-1 ease-in-out delay-150">
              <LuLinkedin />
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
