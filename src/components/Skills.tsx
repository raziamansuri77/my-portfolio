import "./skills.css";
export default function Skills() {
  return (
    <div className="w-full lg:h-screen lg:flex justify-center ">
      <div className="w-full h-full flex flex-col items-center  lg:mt-48">
        <div className="w-full   text-center text-[40px] font-bold py-4">
          Development Skill
        </div>
        <div className="skills w-[90%] font-bold space-y-10  ">
          <div>
            <h3>HTML</h3>
            <span className="bar bg-#ffffff dark:bg-[#1b1b1d] shadow-lg block h-[20px] bottom-1 rounded-[10px] transform-all">
              <span className="html rounded-[10px]">90%</span>
            </span>
          </div>
          <div>
            <h3>CSS</h3>
            <span className="bar bg-#ffffff dark:bg-[#1b1b1d] shadow-lg block h-[20px] bottom-1 rounded-[10px] transform-all">
              <span className="css rounded-[10px]">70%</span>
            </span>
          </div>
          <div>
            <h3>Tailwind CSS</h3>
            <span className="bar bg-#ffffff dark:bg-[#1b1b1d] shadow-lg block h-[20px] bottom-1 rounded-[10px] transform-all">
              <span className="tailwind rounded-[10px]">80%</span>
            </span>
          </div>
          <div>
            <h3>JAVA SCRIPT</h3>
            <span className="bar bg-#ffffff dark:bg-[#1b1b1d] shadow-lg block h-[20px] bottom-1 rounded-[10px] transform-all">
              <span className="js rounded-[10px]">50%</span>
            </span>
          </div>
          <div>
            <h3>REACT JS</h3>
            <span className="bar bg-#ffffff dark:bg-[#1b1b1d] shadow-lg block h-[20px] bottom-1 rounded-[10px] transform-all">
              <span className="react rounded-[10px]">50%</span>
            </span>
          </div>
        </div>
      </div>
      <div className="w-full h-full flex flex-col items-center    lg:mt-48 ">
        <div className="w-full   text-center text-[40px] font-bold py-4">
          Design Skill
        </div>
        <div className="skills w-[90%] font-bold space-y-10  ">
          <div>
            <h3>FIGMA</h3>
            <span className="bar bg-#ffffff dark:bg-[#1b1b1d] shadow-lg block h-[20px] bottom-1 rounded-[10px] transform-all">
              <span className="css rounded-[10px]">70%</span>
            </span>
          </div>

          <div>
            <h3>PHOTOSHOP</h3>
            <span className="bar bg-#ffffff dark:bg-[#1b1b1d] shadow-lg block h-[20px] bottom-1 rounded-[10px] transform-all">
              <span className="js rounded-[10px]">50%</span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
