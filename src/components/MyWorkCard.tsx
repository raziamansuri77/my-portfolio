export default function MyWorkCard(props: any) {
  const { imageSrc, text1, text2, link } = props;

  return (
    <div className="bg-#ffffff dark:bg-[#1b1b1d]">
      <div className="shadow-md rounded-lg p-8 ">
        <div className="hover:scale-110 duration-500 transition-transform">
          <div
            className="w-full h-[250px] rounded-lg bg-cover"
            style={{ backgroundImage: `url(${imageSrc})` }}
          ></div>
        </div>
        <div className="p-4 ">
          <a
            href={link}
            className="text-[25px] cursor-pointer hover:text-[#FE2D55] transition-all duration-[0.5s] font-bold"
          >
            {text1}
          </a>
          <div className="text-[20px]">{text2}</div>
        </div>
      </div>
    </div>
  );
}
