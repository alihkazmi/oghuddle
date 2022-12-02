import axios from "axios";

const usePostTrick = () => {
  
  
  const PostTrick = (
    trickDescription: string,
    trickImage: Blob,
    challengeId: string
  ) => {
    console.log("id", challengeId);
    const token = window.localStorage.getItem("token");
    const data = new FormData();
    data.append("trick[description]", trickDescription);
    data.append("trick[images][]", trickImage);
    var config = {
      method: "post",
      url: `http://192.168.99.104:3001/api/challenges/${challengeId}/tricks`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: data,
    };

    axios(config)
      .then(function (response: any) {
        console.log(response.data);
    
      })
      .catch(function (error: any) {
        console.log(error);
      });
  };
  return { PostTrick };
};

export default usePostTrick;
