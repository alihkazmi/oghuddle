import * as React from "react";
import MiniDrawer from "./MiniDrawer";
import { Box } from "@mui/material";
import { useState, useEffect } from "react";
import HomePage from "./HomePage";
import { Challenges } from "./Challenges";
import Tricks from "./Tricks";
import Leaderboard from "./Leaderboard";
import { Route, Routes, Link, useParams } from "react-router-dom";
import AdminHome from "./AdminHome";


const LandingPage = (props: any) => {
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(0);
  const { userType } = useParams();
  console.log(userType);

  console.log("index", selectedIndex);

  return (

    <Box component="main" sx={{ display: "flex", flexGrow: 1 }}>
      <MiniDrawer
        selectedIndex={selectedIndex}
        setSelectedIndex={setSelectedIndex}
      />
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        {selectedIndex === 0 && userType === "admin" && <AdminHome />}
        {selectedIndex === 0 && userType !== "admin" && <HomePage />}

        {selectedIndex === 1 && <Challenges></Challenges>}
        {selectedIndex === 2 && <Tricks></Tricks>}
        {selectedIndex === 3 && <Leaderboard></Leaderboard>}
      </Box>
    </Box>
  );
};

export default LandingPage;