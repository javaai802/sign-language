import Header from "../../components/Header/Header";
import UsrOnline from "./UsrOnline";
import { useRecoilValue } from "recoil";
import { authState } from "../../utils/recoil/atom";
import UsrOffline from "./UsrOffline";

const Plugin = () => {
  const isLogin = useRecoilValue(authState);

  return (
    <div className="flex flex-col w-full h-[100vh]">
      <Header />
      {isLogin ? <UsrOnline /> : <UsrOffline />}
    </div>
  );
};

export default Plugin;
