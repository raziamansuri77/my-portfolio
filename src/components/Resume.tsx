import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import Education from "./education";
import Skills from "./Skills";
export default function Resume() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [show, setShow] = useState(false);
  return (
    <div className="w-full   py-20" id="resume ">
      <div
        className="text-[40px] xl:text-[60px] font-bold text-center
       w-full   text-[#FE2D55]"
      >
        My Resume
      </div>
      <div className="flex flex-col lg:flex-row gap-4 text-[20px] w-full">
        <div
          className="bg-#ffffff dark:bg-[#1b1b1d] cursor-pointer shadow-md w-full flex justify-center rounded-lg hover:text-[#FE2D55]  transition-all duration-[0.5s]  p-4   "
          onClick={() => {
            setShow(!show);
          }}
        >
          Education
        </div>

        <div
          className="bg-#ffffff dark:bg-[#1b1b1d] shadow-md cursor-pointer w-full flex justify-center rounded-lg hover:text-[#FE2D55] text-[20px] transition-all duration-[0.5s]  p-4   "
          onClick={() => {
            setShow(!show);
          }}
        >
          Professional Skills
        </div>
        <div
          className="bg-#ffffff dark:bg-[#1b1b1d] shadow-md w-full cursor-pointer flex justify-center rounded-lg hover:text-[#FE2D55] transition-all duration-[0.5s]  p-4   "
          onClick={() => {
            setShow(!show);
          }}
        >
          Experience
        </div>
      </div>
      <div
        style={{
          display: show === true ? "block" : "none",
        }}
      >
        <Education />
      </div>
      <div
        style={{
          display: show === false ? "block" : "none",
        }}
      >
        <Skills />
      </div>
    </div>
  );
}
