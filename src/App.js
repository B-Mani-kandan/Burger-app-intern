import { Route, Routes } from "react-router";
import React, { useEffect, useState } from "react";
import "./App.css";
import Home from "./components/Home";
import Menu from "./components/Menu";
import Contact from "./components/Contact";
import Login from "./components/Login/Login";
import Signup from "./components/Signup/Signup";
import Payment from "./components/Payment";
import { auth } from "./firebase";

function App() {
  const [userName, setUserName] = useState("");

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUserName(user.displayName);
      } else setUserName("");
    });
  }, []);
  return (
    <Routes>
      <Route path="/" element={<Home name={userName} />} />
      <Route path="Menu" element={<Menu />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="Contact" element={<Contact />} />
      <Route path="Payment" element={<Payment />} />
    </Routes>
  );
}

export default App;
