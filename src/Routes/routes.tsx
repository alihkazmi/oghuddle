import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Login from "../Pages/LoginPage/Login";
import Signup from "../Pages/SignupPage/Signup";
import Feed from "../Pages/Feed/Feed";
import { ForgetPassword } from "../Pages/LoginPage/Forgetpassword";
import Resetpassword from "../Pages/LoginPage/Resetpassword";
export const NavigationRoutes = (type: any) => {




  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/forgetpassword" element={<ForgetPassword />} />
        <Route path="/resetpassword" element={<Resetpassword />} />

        <Route path="/feed" element={<Feed />} />
      </Routes>
    </Router>
  )

}