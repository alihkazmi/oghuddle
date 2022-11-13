import { useState, createContext } from "react";
import React from "react";
import Login from "../Pages/LoginPage/Login";

const AdminContext = createContext(null);

function AdminNewContext() {
  const [username, setUsername] = useState("");
}

export default AdminNewContext;
