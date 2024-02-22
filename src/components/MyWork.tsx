import MyWorkCard from "./MyWorkCard";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function MyWork() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div id="work">
      <div className="text-[40px] xl:text-[60px] font-bold text-center text-[#FE2D55]">
        My Works
      </div>
      <div className="grid xl:grid-cols-3 sm:grid-cols-2  gap-4  mt-10">
        <div data-aos="zoom-in-up">
          <MyWorkCard
            link="https://todoapprazia.netlify.app"
            text1="TODO APP"
            text2="ReactTS,Tailwind CSS"
            imageSrc="public/todopic1.png"
          />
        </div>
        <div data-aos="zoom-in-up">
          <MyWorkCard
            link="https://weather-app-razia.netlify.app"
            text1="Weather App"
            text2="ReactTS,Tailwind CSS"
            imageSrc="public/weatherApp.png"
          />
        </div>
        <div data-aos="zoom-in-up">
          <MyWorkCard
            link="https://raziamansuri77.github.io/calculator/"
            text1="Calculator"
            text2="HTML,CSS,JAVASCRIPT"
            imageSrc="public/calculator1.png"
          />
        </div>
        <div data-aos="zoom-in-up">
          <MyWorkCard
            link="https://quiz-app-razia.netlify.app"
            text1="QUIZ APP"
            text2="HTML,CSS,JAVASCRIPT"
            imageSrc="public/quiz.png"
          />
        </div>
      </div>
    </div>
  );
}
