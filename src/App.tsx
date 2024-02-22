import { useEffect, useState } from "react";
import "./App.css";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Resume from "./components/Resume";
import MyWork from "./components/MyWork";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  const [theme, setTheme] = useState(true);
  return (
    <div
      className="flex  "
      style={{
        backgroundColor: theme == true ? "#ffffff" : "#111015",
        color: theme == true ? "#1b1b1d" : "#ffffff",
      }}
    >
      <div className="xl:w-[20%]">
        <Navbar />
      </div>

      <div className="xl:w-[80%] p-4">
        <div
          className="flex  w-[100%]  justify-end z-50 relative mb-[80px] mt-[80px] pr-[10px]"
          onClick={() => {
            setTheme(!theme);
            if (theme == true) {
              document.documentElement.classList.add("dark");
            } else {
              document.documentElement.classList.remove("dark");
            }
          }}
        >
          <div className="w-[60px] bg-[#FE2D55] h-[30px] absolute rounded-full">
            <div
              className="w-[25px] h-[25px]  rounded-full relative transition-all duration-[0.5s] "
              style={{
                left: theme == true ? "8px" : "28px",
                top: theme == true ? "2px" : "2px",
                backgroundColor: theme == true ? "#fff" : "#000",
              }}
            ></div>
          </div>
        </div>
        <div data-aos="zoom-in">
          <Home />
        </div>
        <div data-aos="zoom-in-up">
          <About />
        </div>
        <div data-aos="zoom-in-up">
          <MyWork />
        </div>
        <div data-aos="zoom-in-up">
          <Resume />
        </div>
        <div data-aos="zoom-in-up">
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default App;
