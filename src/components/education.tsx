import ResumeCard from "./ResumeCard";

export default function Education() {
  return (
    <div>
      <div className="w-full lg:flex lg:flex-row md:hidden flex-col text-center text-[40px] hidden font-bold py-4">
        <div className="w-full ">Education Quality</div>
        <div className="w-full">Job Experience</div>
      </div>
      <div className="flex gap-10 flex-col w-full lg:flex-row ">
        <div
          className="text-[35px] font-bold text-center mt-[30px] lg:hidden
        "
        >
          Education Quality
        </div>
        <div className="w-full h-full  md:flex-row   ">
          <div className="relative py-10  w-full bg-gay-400 ">
            <div className="  h-[850px] bg-gray-400 w-[3px]"></div>
            <div className="absolute top-20 left-[-8px] ">
              <div data-aos="zoom-in-up">
                <ResumeCard
                  text1="BCA(Bachelor of Computer Application)"
                  text2="87.4% from SGGSJ GOVT. COLLEGE Paonta Sahib HP  in 2021"
                />
              </div>
            </div>
            <div className="absolute top-[380px] left-[-8px] ">
              <div data-aos="zoom-in-up">
                <ResumeCard
                  text1="12th "
                  text2=" 84.6% from Govt.Girls Ser.Sec.School Paonta Sahib HP with HP BOARD in 2018"
                />
              </div>
            </div>
            <div className="absolute top-[680px] left-[-8px]">
              <div data-aos="zoom-in-up">
                <ResumeCard
                  text1="10th "
                  text2="79.56% from Govt.Girls Ser.Sec.School Paonta Sahib HP with HP BOARD in 2016"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-full     ">
          <div
            className="text-[35px] font-bold text-center mt-[30px] lg:hidden
        "
          >
            Job Experience
          </div>
          <div className="relative py-10  ">
            <div className="  h-[250px] bg-gray-400 w-[3px]"></div>
            {/* <div className="absolute top-20 left-[-8px]">
              <ResumeCard
                text1="Internship in Web Designing"
                text2="6 months intrenship in web designing from Scaptor"
              />
            </div> */}
            <div className="absolute top-[80px] left-[-8px]">
              <div data-aos="zoom-in-up">
                <ResumeCard
                  text1="Computer Instructor "
                  text2="
                I have been teaching for 2 and half years in Galaxy Private ITI Heerpur Paonta Sahib Himachal Pradesh"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
