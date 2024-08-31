import { Card, Input, Checkbox, Button, Typography } from "@material-tailwind/react";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState, useEffect } from "react";

export function SignIn() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showAlert, setShowAlert] = useState(false);
  const navigate = useNavigate();

  // const [isOpen, setIsOpen] = useState(false);
  const [forgetPassword, setForgetPassword] = useState("");

  // const handleForgot=()=>{
  //   navigate("/auth/forgotPassword");
  // }
  // const toggleModal = () => {
  //   setIsOpen(!isOpen);
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
  };


  const handlePasswordToggle = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const handleSignIn = () => {
    navigate("/dashboard/home");
    // try {
    //   if (email === "admin@admin.com" && password === "123456") {
    //     localStorage.setItem("email", email);
    //     localStorage.setItem("password", password);
    //   } else {
    //     setShowAlert(true); 
    //     setTimeout(() => {
    //       setShowAlert(false); 
    //     }, 3000);
    //   }
    // } catch (error) {
    //   console.error(error);
    // }
  };

  return (
    <section className="m-8 flex gap-4">
      <div className="w-full lg:w-3/5 mt-24">
        <div className="text-center">
          <div className="flex flex-col items-center justify-center mb-6"><img src="/img/optimind.jpg" width={100}/></div>
          <Typography variant="h2" className="font-bold mb-4">Sign In To Optimind-Ai</Typography>
          <Typography variant="paragraph" color="blue-gray" className="text-lg font-normal">Enter your email and password to Sign In.</Typography>
        </div>
        <form className="mt-8 mb-2 mx-auto w-80 max-w-screen-lg lg:w-1/2">
          <div className="mb-1 flex flex-col gap-6">
            <Input
              size="lg"
              type="email"
              label="Email"
              required
              className="shadow-md"
              onChange={(e) => setEmail(e.target.value)}
            />
            <div className="relative">
              <Input
                type={passwordVisible ? "text" : "password"}
                size="lg"
                label="Password"
                required
                className="shadow-md"
                onChange={(e) => setPassword(e.target.value)}
              />
              <button
                type="button"
                onClick={handlePasswordToggle}
                className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-500"
              >
                {passwordVisible ? <FaEyeSlash className="h-5 w-5" /> : <FaEye className="h-5 w-5" />}
              </button>
            </div>
          </div>
    
          <Button className="mt-6" type="submit" fullWidth onClick={handleSignIn}>
            Sign In
          </Button>
          <div className="flex items-center justify-between gap-2 mt-6">
            <Typography variant="small" className="font-medium text-gray-900 cursor-pointer" >
          <Link to="/forgotPassword">  Forgot Password?</Link>
            </Typography>
          </div>
          <div className="space-y-4 mt-8">
            <Button size="lg" color="white" className="flex items-center gap-2 justify-center shadow-md" fullWidth>
              <svg width="17" height="16" viewBox="0 0 17 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g clipPath="url(#clip0_1156_824)">
                  <path d="M16.3442 8.18429C16.3442 7.64047 16.3001 7.09371 16.206 6.55872H8.66016V9.63937H12.9813C12.802 10.6329 12.2258 11.5119 11.3822 12.0704V14.0693H13.9602C15.4741 12.6759 16.3442 10.6182 16.3442 8.18429Z" fill="#4285F4" />
                  <path d="M8.65974 16.0006C10.8174 16.0006 12.637 15.2922 13.9627 14.0693L11.3847 12.0704C10.6675 12.5584 9.7415 12.8347 8.66268 12.8347C6.5756 12.8347 4.80598 11.4266 4.17104 9.53357H1.51074V11.5942C2.86882 14.2956 5.63494 16.0006 8.65974 16.0006Z" fill="#34A853" />
                  <path d="M4.16852 9.53356C3.83341 8.53999 3.83341 7.46411 4.16852 6.47054V4.40991H1.51116C0.376489 6.67043 0.376489 9.33367 1.51116 11.5942L4.16852 9.53356Z" fill="#FBBC04" />
                  <path d="M8.65974 3.16644C9.80029 3.1488 10.9026 3.57798 11.7286 4.36578L14.0127 2.08174C12.5664 0.72367 10.6469 -0.0229773 8.65974 0.000539111C5.63494 0.000539111 2.86882 1.70548 1.51074 4.40987L4.1681 6.4705C4.8001 4.57449 6.57266 3.16644 8.65974 3.16644Z" fill="#EA4335" />
                </g>
                <defs>
                  <clipPath id="clip0_1156_824">
                    <rect width="16" height="16" fill="white" transform="translate(0.5)" />
                  </clipPath>
                </defs>
              </svg>
              <span>Sign in With Google</span>
            </Button>
          </div>
          <Typography variant="paragraph" className="text-center text-blue-gray-500 font-medium mt-4">
            Not registered? <Link to="/signUp" className="text-gray-900 ml-1">Create account</Link>
          </Typography>
        </form>

        {showAlert && (
          <div className="fixed bottom-10 left-40 transform -translate-x-1/2 z-50">
            <div className="flex items-center justify-between bg-red-600 text-white px-4 py-3 rounded-lg shadow-md">
              <p className="text-sm font-medium">Uh oh, Invalid credentials!</p>
            </div>
          </div>
        )}
      </div>

      <div className="w-2/5 h-full hidden lg:block">
        <img
          src="/img/pattern.png"
          className="h-full w-full object-cover rounded-3xl"
        />
      </div>
 
    </section>
  );
}

export default SignIn;
