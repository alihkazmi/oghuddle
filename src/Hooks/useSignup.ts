import axios from "axios";
import { useNavigate } from "react-router-dom";
export const useSignup = (userType: any) => {
  const navigate = useNavigate();
  const Signup = (
    username: string,
    email: string,
    password: string,
    setToastOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setResponse: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    // const baseUrl = `https://project2-p2.herokuapp.com/api/${userType}`;

    axios
      .post(`http://192.168.99.104:3001/api/${userType}s`, {
        [`${userType}`]: {
          email: email,
          password: password,
        },
      })

      .then(function (response) {
        window.localStorage.setItem("token", response.data[userType].token);
        setToastOpen(true);
        setLoading(false);
        navigate(`/${userType}/landingpage/:screen`);
        setResponse(true);
        console.log("here-----------------", response.data);
      })
      .catch(function (response) {
        window.localStorage.setItem("token", "");
        console.log(response.data);
        setToastOpen(true);
        setLoading(false);
        setResponse(false);
      });
  };
  return { Signup };
};
