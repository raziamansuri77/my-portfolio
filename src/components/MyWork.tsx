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
            link="https://apnabookstore.netlify.app/"
            text1="ECOMMERCE WEBSITE "
            text2="ReactTS,Tailwind CSS"
            imageSrc="/BOOKSTORE.jpg"
          />
        </div>
        <div data-aos="zoom-in-up">
          <MyWorkCard
            link="https://todoapprazia.netlify.app"
            text1="TODO APP"
            text2="ReactTS,Tailwind CSS"
            imageSrc="/todopic1.png"
          />
        </div>
        <div data-aos="zoom-in-up">
          <MyWorkCard
            link="https://my-weather-app-razia.netlify.app/"
            text1="Weather App"
            text2="ReactTS,Tailwind CSS"
            imageSrc="/weather.png"
          />
        </div>
        <div data-aos="zoom-in-up">
          <MyWorkCard
            link="https://raziamansuri77.github.io/calculator/"
            text1="Calculator"
            text2="HTML,CSS,JAVASCRIPT"
            imageSrc="/calculator1.png"
          />
        </div>
        <div data-aos="zoom-in-up">
          <MyWorkCard
            link="https://my-quiz-app-razia.netlify.app"
            text1="QUIZ APP"
            text2="HTML,CSS,JAVASCRIPT"
            imageSrc="/quiz-app.png"
          />
        </div>
        <div data-aos="zoom-in-up">
          <MyWorkCard
            link="https://drum-kit-madebyrazia.netlify.app/"
            text1="DRUM KIT"
            text2="HTML,CSS,JAVASCRIPT"
            imageSrc="/DRUM-KIT.png"
          />
        </div>
      </div>
    </div>
  );
}
