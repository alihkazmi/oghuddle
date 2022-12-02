import axios from "axios";
import { useNavigate } from "react-router-dom";
export const useLogin = (userType: any) => {
  const navigate = useNavigate();
  const Login = (
    email: string,
    password: string,
    setToastOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const ChangeScreen = () => {
      navigate(`/${userType}/landingpage/homepage`);
    };

    axios
      .post(`http://192.168.99.104:3001/api/${userType}s/login.json`, {
        [`${userType}`]: {
          email: email,
          password: password,
        },
      })

      .then(function (response: any) {
        window.localStorage.setItem("token", response.data[userType].token);
        setToastOpen(true);
        setLoading(false);
        setTimeout(ChangeScreen, 2000);
        console.log("here-----------------", response.data);

        window.localStorage.setItem("authUser", userType);
        setToastOpen(true);
        setLoading(false);
        setTimeout(ChangeScreen);
      })
      .catch(function (response) {
        window.localStorage.setItem("token", "");
        console.log(response.data);
        setToastOpen(true);
        setLoading(false);
      });
  };
  return { Login };
};
