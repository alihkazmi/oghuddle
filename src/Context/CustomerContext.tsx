import { useState, createContext } from "react";
import React from "react";
import Login from "../Pages/LoginPage/Login";

const CustomerContext = createContext(null);

function CustomerNewContext() {
  const [username, setUsername] = useState("");
}

export default CustomerNewContext;
