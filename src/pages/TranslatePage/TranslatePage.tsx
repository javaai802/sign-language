
import Header from "../../components/Header/Header";
import Translate from "./translate/Translate";

const TranslatePage = () => {
  return (
    <div className="flex flex-col h-[100vh] w-full">
      <Header />
      <Translate />
    </div>
  );
};

export default TranslatePage;
