import axios from "axios";
import * as React from "react";
import { adminContext } from "../Context/AdminContext";

const useGetTricks = () => {
  const { setTricks } = React.useContext(adminContext);
  const getTricks = (challengeId: any) => {
    var config = {
      method: "get",
      url: `http://192.168.99.104:3001/api/challenges/170/tricks`,
    };

    axios(config)
      .then(function (response: any) {
        console.log(response.data);
        setTricks(response.data);
        console.log('setTricks -------------------------', setTricks)
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };
  return { getTricks };
};

export default useGetTricks;
