import { Link } from "react-router-dom";
import SignInPage from "../components/signInPage";
import SignUpPage from "../components/signUpPage";

const SignIn = () => {
  return (
    <>
      {/* logo */}
      <div className="border-b w-32 mb-16">
        <Link to="/">
          <img src="./images/logo.png" alt="LOGO" />
        </Link>
      </div>
      <div className="flex flex-col min-h-screen items-center">
        {/* form container */}
        <div className="flex flex-col gap-4 md:flex-row md:space-x-20">
          <SignInPage />
          <SignUpPage />
        </div>
      </div>
    </>
  );
};

export default SignIn;
