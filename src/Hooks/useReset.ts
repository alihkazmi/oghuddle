import axios from "axios";
import { useNavigate } from "react-router-dom";
export const useResetPassword = () => {
  const navigate = useNavigate();
  const ResetPassword = (

    password: string,
    setToastOpen: React.Dispatch<React.SetStateAction<boolean>>,
    setLoading: React.Dispatch<React.SetStateAction<boolean>>,
    setResetResponse: React.Dispatch<React.SetStateAction<number | null>>
  ) => {
    
    
    var url_string = window.location.href;
  console.log(url_string);
  var newurl = new URL(url_string);
  var c = newurl.searchParams.get("reset_password_token");
  console.log("coming------------------", c);
    
  
  const changeScreen = () => {
      navigate("/");
    };
    const userType = "brands";
    const baseUrl = `https://project2-p2.herokuapp.com/api/${userType}`;
    const data = {
      brand: {
        password: password,
        reset_password_token: c,
      },
    };
    var config = {
      method: "patch",
      url: `${baseUrl}/password`,
      headers: {
        "Content-Type": "application/json",
      },
      data: data,
    };

    axios(config)
      .then(function (response) {
        setResetResponse(response.status);
        setToastOpen(true);
        setLoading(false);
        setTimeout(changeScreen, 3000);
        console.log(response);
      })
      .catch(function (response) {
        setResetResponse(null);
        console.log(response);
        setToastOpen(true);
        setLoading(false);
      });
  };
  return { ResetPassword };
};
