import main2 from "../../assets/images/main2.webp";
import logo from "../../assets/icons/logo.svg";

const Page2 = () => {
  return (
    <div
      id="section2"
      className="w-full h-[100vh] flex flex-row items-center justify-start md:space-x-20 px-10 md:pr-20"
    >
      <img
        src={main2}
        alt="main2"
        className="hidden md:block w-auto max-w-full md:h-[23rem] lg:h-[27rem] xl:h-[30rem]"
      />

      <div className="md:min-w-[26rem] md:w-[28rem] lg:w-[35rem] xl:w-[43rem] flex flex-col">
        <div className="flex flex-row items-center justify-start">
          
          <p className="text-3xl md:text-4xl font-bold text-black font-main ml-[15px]">
           introduction
          </p>
        </div>
        <p className="text-base text-gray-400 font-main mt-[20px] leading-8">
        This project was created for the purpose of sign language translation and education
        </p>
        <p className="hidden md:block text-base text-gray-400 font-main mt-[15px] leading-8">
        For the sign language speaker around you, translate sign language, and further learn about sign language with them
        </p>
        <p className="text-base text-gray-400 font-main mt-[15px] leading-8">
        we use (사용한 툴, 프레임워크, 데이터셋 등등) to make this project
        </p>
        <p className="text-base text-gray-400 font-main mt-[15px] leading-8">
          
        </p>
      </div>
    </div>
  );
};

export default Page2;
