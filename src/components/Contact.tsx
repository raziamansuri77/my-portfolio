import { LuFacebook } from "react-icons/lu";
import { BsInstagram } from "react-icons/bs";
import { LuLinkedin } from "react-icons/lu";

export default function Contact() {
  return (
    <div className="md:p-[20px] " id="contact">
      <div className="text-[40px] xl:text-[60px] font-bold  text-center text-[#FE2D55]">
        Contact With Me
      </div>
      <div className="bg-#ffffff dark:bg-[#1b1b1d] shadow-md  ">
        <div className=" flex-col lg:flex-row  rounded-lg p-8 space-y-4 w-full justify-between flex gap-10">
          <div className="">
            <div className="md:text-[20px] text-[18px]">
              To discuss your next project toll free to contact. Let build a
              website that is engaging, beautifull,seo friendly and suites your
              business needs .
            </div>
            <div className="md:text-[20px] text-[16px]">
              <a href="tel:8219884939">Phone No. : 8219884939</a>
              <div className=" ">
                <a href="mailto:raziamansuri77@gmail.com" className="flex">
                  EMAIL:
                  <span className="hover:text-sky-400 hover:underline hover:underline-offset-1 px-2 transition-all duration-[0.5s] ">
                    raziamansuri77@gmail.com
                  </span>
                </a>
              </div>
            </div>
          </div>

          <div className="flex  text-right w-full ">
            <div className="w-full mt-8 xl:flex flex-col gap-4 text-center ">
              <div className="text-[20px]">FIND ME</div>
              <div className="flex gap-10 w-full text-rigth  justify-center mt-[20px]">
                <a href="https://www.facebook.com/razia.mansuri.562/">
                  <div className="shadow-md rounded-md hover:text-[#FE2D55] transition-all duration-[0.5s]   p-4 hover:-translate-y-1 ease-in-out delay-150  ">
                    <LuFacebook />
                  </div>
                </a>
                <a href="https://www.instagram.com/razia_mansuri77/">
                  <div className="shadow-md rounded-md hover:text-[#FE2D55] transition-all duration-[0.5s]   p-4 hover:-translate-y-1 ease-in-out delay-150">
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
        </div>
      </div>
    </div>
  );
}
