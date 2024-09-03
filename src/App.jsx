import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { SignIn,SignUp } from "./pages/auth";
import ForgotPassword from "./pages/auth/forgotPassword"
import Otp from "./pages/auth/otp"
import RestPassword from "./pages/auth/restPassword"
import Chatbot from "./pages/chatBot/Chatbot";
import PatientDetail from "./pages/dashboard/details/viewPatientDetails"


function App() {
  return (
    <>    
    <Routes>
      <Route path="/dashboard/*" element={<Dashboard />} />
      <Route path="/auth/*" element={<Auth />} />
      <Route path="/" element={<SignIn />} />
      <Route path="/signUp" element={<SignUp />} />
      <Route path="/otp" element={<Otp />} />
      <Route path="/restPassword" element={<RestPassword />} />
      <Route path="/forgotPassword" element={<ForgotPassword />} />
      {/* <Route path="/patientDetail" element={<PatientDetail />} /> */}
      {/* <Route path="*" element={<Navigate to="/dashboard/home" replace />} /> */}
    </Routes>
    <Chatbot/>
    </>

  );
}

export default App;
