import React from 'react'
import { useEffect } from "react";
import { Navigate, useNavigate, useParams } from 'react-router-dom';
const Leaderboard = () => {

  const navigate = useNavigate();
  const { userType } = useParams();
  useEffect(() => {
    navigate(`/${userType}/landingpage/leaderboard`)

  }, []);

  return (
    <div>Leaderboard</div>
  )
}

export default Leaderboard