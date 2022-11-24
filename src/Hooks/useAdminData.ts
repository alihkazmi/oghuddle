import React, { useContext } from "react";
import axios from "axios";
import { adminContext } from "../Context/AdminContext";
export default function useAdminData() {
  // const { setFieldTechsData, fieldTechsData, set_loading } = useContext(formContext);
  const token = window.localStorage.getItem("token");
  const { setBrandStats } = React.useContext(adminContext);
  function AdminData() {
    axios
      .get(`https://project2-p2.herokuapp.com/api/admin/feed`, {
        headers: {
          Authorization: `Bearer ${token}`,
          "Access-Control-Allow-Origin": "*",
        },
        params: {},
      })
      .then(function (Response) {
        setBrandStats(Response.data);
        // set_loading(false);
      })
      .catch(function (error) {});
  }
  return { AdminData };
}
