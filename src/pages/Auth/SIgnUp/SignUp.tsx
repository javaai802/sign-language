import Header from "../../../components/Header/Header";
import SignUpForm from "./SignUpForm";

const SignUp = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col">
      <Header />
      <SignUpForm />
    </div>
  );
};

export default SignUp;

