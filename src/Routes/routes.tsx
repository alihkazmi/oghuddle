import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "../Pages/LoginPage/Login";
import Signup from "../Pages/SignupPage/Signup";
import Feed from "../Pages/Feed/HomePage";
import { ForgetPassword } from "../Pages/LoginPage/Forgetpassword";
import Resetpassword from "../Pages/LoginPage/Resetpassword";
import HomePage from "../Pages/Feed/HomePage";
import LandingPage from "../Pages/Feed/LandingPage";

export const NavigationRoutes = (type: any) => {




  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/brand/login" />} />

        <Route path="/:userType/signup" element={<Signup />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword" element={<Resetpassword />} />
        <Route path="/:userType/login" element={<Login />} />
        <Route path="/:userType/landingpage/:screen" element={<LandingPage />} />

      </Routes>
    </Router>
  )

}