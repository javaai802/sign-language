import LazyLoad from "react-lazy-load";
import logo from "../../assets/icons/logo.svg";
import main from "../../assets/images/main.webp";
import { Link } from "react-router-dom";

const Page1 = () => {
  return (
    <div
      id="section1"
      className="h-[100vh] flex flex-col md:flex-row items-center justify-center w-full"
    >
      <div className="flex flex-col items-start justify-start mt-16">
        <p className="font-bold text-black text-[2rem] mb-[10px] font-main">
          translate and learning sign language
        </p>
        <LazyLoad>
          <img src={logo} alt="logo" className="w-[190px] mb-[20px]" />
        </LazyLoad>

        <p className="text-lg text-gray-400 font-main mb-[10px]">
          수어리움과 함께하는 수어 번역&교육
          <br /> 언제든 수어 번역 서비스를 이용하실 수 있습니다.
        </p>
        <Link to="/translate">
          <button className="bg-green-500 text-white font-main text-base rounded-md mb-[10px] w-[200px] h-[50px] ">
            start translate
          </button>
        </Link>
      </div>
      <img
        src={main}
        alt="main"
        className="hidden md:block w-auto md:h-[17rem] lg:h-[20rem] 2xl:h-[25rem] ml-[120px] mt-[60px]"
      />
    </div>
  );
};

export default Page1;
