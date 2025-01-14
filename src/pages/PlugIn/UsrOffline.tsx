import signl from "../../assets/images/signl.webp";
import { Link } from "react-router-dom";

const UsrOffline = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col px-9 md:px-10">
      <div className="w-full h-full flex mt-[50px] md:mt-[100px] flex-col pb-[20px]">
        <div className="flex flex-col items-center justify-center md:flex-row">
          <img
            src={signl}
            alt="디스코드 연동 예시 이미지"
            className="md:w-[30rem] lg:w-[35rem] xl:w-[40rem]"
          />
          <div className="flex flex-col items-start justify-center md:ml-[50px] h-full">
            <p className="text-3xl font-bold leading-normal md:text-4xl font-main">
              Easy lerning for sign language 
            </p>
            <p className="text-xl leading-normal text-gray-400 font-main mt-[20px]">
              start learning sign language by using 수어리움
            </p>
            <Link to="/login">
              <button className="flex flex-row justify-center items-center bg-main-2 w-[250px] h-[48px] md:w-[300px] md:h-[50px] text-xl text-white font-main mt-[20px] rounded-lg">
                sign in to use
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsrOffline;
