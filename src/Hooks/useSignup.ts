import axios from "axios";
import { useNavigate } from "react-router-dom";
export const useSignup = () => {
  const navigate = useNavigate();
  const Signup = (
    username: string,
    email: string,
    password: string,
    setToastOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>
  ) => {
    const userType = "brands";
    const baseUrl = `https://project2-p2.herokuapp.com/api/${userType}`;

    const data: { [key: string]: any } = {
      brand: { username: username, email: email, password: password },
    };
    var config = {
      method: "post",
      url: `${baseUrl}.json`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        window.localStorage.setItem("token", response.data.brand.token);
        setToastOpen(true);
        setLoading(false);
        navigate("/feed");
        console.log("here-----------------", response.data);
      })
      .catch(function (response) {
        window.localStorage.setItem("token", "");
        console.log(response.data);
        setToastOpen(true);
        setLoading(false);
      });
  };
  return { Signup };
};
