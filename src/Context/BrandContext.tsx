import { useState, createContext } from "react";
import React from "react";
import Login from "../Pages/LoginPage/Login";

const BrandContext = createContext(null);

function BrandNewContext() {
  const [username, setUsername] = useState("");
}

export default BrandNewContext;
