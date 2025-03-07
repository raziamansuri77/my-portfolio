export default function ResumeCard(props: any) {
  return (
    <div className="relative  ">
      <div className="w-[20px] bg-[#FE2D55] h-[20px] border-gray-400 rounded-full border-4"></div>
      <div className="w-[50px] h-[4px] bg-gray-400 absolute top-2 left-4"></div>
      <div
        className="bg-#ffffff dark:bg-[#1b1b1d]   shadow-md lg:w-[400px] xl:w-[480px] sm:w-[700px]  w-[300px] h-[250px] absolute  top-[-40px] left-[45px]
          rounded-lg  p-8 transition-all duration-[0.5s]   xl:h-[275px]  flex flex-col justify-between hover:bg-[#FE2D55] hover:transition-all hover:duration-[0.5s]  "
      >
        <div>
          <div className=" md:text-[25px]  font-bold">{props.text1}</div>
        </div>
        <div className="flex flex-col gap-6">
          <div className="h-[1px] bg-gray-400"></div>
          <div className="md:text-[22px]">{props.text2}</div>
        </div>
      </div>
    </div>
  );
}
