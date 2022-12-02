import React from "react";
import axios from "axios";
import useGetChallenges from "./useGetChallenges";
const usePostLikes = () => {
const { getChallengesData } = useGetChallenges();
  const postLikes = (challengeId: string | undefined) => {
    const token = window.localStorage.getItem("token");
    var config = {
      method: "post",
      url: `http://192.168.99.104:3001/api/challenges/${challengeId}/likes`,
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    };

    axios(config)
      .then(function (response: any) {
        console.log(response.data);
        getChallengesData();
      })
      .catch(function (error: any) {
        console.log(error);
        getChallengesData();

      });
  };
  return { postLikes };
};

export default usePostLikes;