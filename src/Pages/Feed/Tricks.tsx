import React from 'react'
import { useEffect } from "react";
import { Navigate, useNavigate, useParams } from 'react-router-dom';
const Tricks = () => {


  const navigate = useNavigate();
  const { userType } = useParams();
  useEffect(() => {
    navigate(`/${userType}/landingpage/tricks`)

  }, []);
  return (
    <div>Tricks</div>
  )
}

export default Tricks