import { TypeAnimation } from "react-type-animation";

export default function Home() {
  return (
    <div
      id="home"
      className=" flex flex-col gap-20 items-center justify-center   "
    >
      <div className="    flex flex-col items-center  justify-center     xl:w-full">
        <div className=" text-[50px] sm:text-[60px]  lg:text-[80px]  font-bold">
          Hi, I'm <span className="text-[#FE2D55]">Razia</span>
        </div>
        <TypeAnimation
          className="text-[30px] xl:text-[60px]  md:text-[40px] font-semibold"
          sequence={[
            "Web Designer", // Types 'One'
            1000, // Waits 1s
            "Web Developer", // Deletes 'One' and types 'Two'
            2000, // Waits 2s
            "Front End Developer",
            3000, // Types 'Three' without deleting 'Two'
          ]}
          wrapper="span"
          cursor={true}
          repeat={Infinity}
        />
      </div>
      <div className="flex gap-8 flex-col sm:flex-row">
        <button className="bg-#ffffff dark:bg-[#1b1b1d]  text-[#FE2D55] w-[200px] shadow-md   p-4     hover:-translate-y-1 transition-all ease-in-out delay-150  ">
          <a href="#contact"> CONTACT ME</a>
        </button>
        <button className="bg-#ffffff dark:bg-[#1b1b1d]  text-[#FE2D55] w-[200px] shadow-md  p-4    hover:-translate-y-1 transition-all ease-in-out delay-150  ">
          <a href="public/razia_fullstack_Developer.pdf" download>
            DOWNLOAD RESUME
          </a>
        </button>
      </div>
    </div>
  );
}
