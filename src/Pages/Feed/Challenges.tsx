import React from 'react'
import { useEffect } from "react";
import { Navigate, useNavigate, useParams } from 'react-router-dom';

const Challenges = () => {
  const navigate = useNavigate();
  const { userType } = useParams();
  useEffect(() => {
    navigate(`/${userType}/landingpage/challenges`)

  }, []);


  return (
    <>
      <div>Challenges</div>
    </>
  )
}

export default Challenges