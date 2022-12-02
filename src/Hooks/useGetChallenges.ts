import React, { useContext } from "react";
import axios from "axios";
import { adminContext } from "../Context/AdminContext";
export default function useGetChallenges() {

  const token = window.localStorage.getItem("token");
  const { setChallenges } = React.useContext(adminContext);
  
  
  function getChallengesData() {
    axios
      .get("http://192.168.99.104:3001/api/challenges", {
    
        params: {},
      })
      .then(function (Response) {
        setChallenges(Response.data);
        console.log(Response.data);
        // set_loading(false);
      })
      .catch(function (error) {});
  }
  return { getChallengesData };
}
