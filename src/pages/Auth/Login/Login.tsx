import Header from "../../../components/Header/Header";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="w-full h-[100vh] flex flex-col">
      <Header />
      <LoginForm />
    </div>
  );
};

export default Login;
