import React, { useContext, useState } from "react";
import axios from "axios";
import './signup.css'

import { useHistory } from "react-router";

const SignUp = () => {
  const [OTP, setOTP] = useState("");
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [mode, setMode] = useState("email");

  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (mode === "email") {
        await axios.head(`/api/user?email=${email}`);
        setMode("OTP");
        console.log(mode)
      } else if (mode === "OTP") {
        const { data } = await axios.post("/api/verifyOTP", { OTP, email });
        localStorage.setItem("token", data.token);
        if (data.isRegistered) history.push("/home");
        else setMode("register");
      } else if (mode === 'register') {
        await axios.post('/api/register', {name, password}, {headers: {authorization: localStorage.getItem('token')}})
        history.push("/home");
      }
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <>
    <h1 className="mx-5 p-3">Signup</h1>
    <form className="mx-5 p-3  d-flex justify-content-center flex-column align-items-center" onSubmit={handleSubmit}>

      <input className="localForm m-3 p-3" placeholder="email" onChange={(e) => setEmail(e.target.value)} />

      {mode === "OTP" && (
        <input className="localForm m-3 p-3" onChange={(e) => setOTP(e.target.value)} placeholder="OTP" />
      )}
      {mode === "register" && (
        <>
          <input className="localForm m-3 p-3" onChange={(e) => setName(e.target.value)} placeholder="name" />
          <input className="localForm" onChange={(e) => setPassword(e.target.value)} placeholder="password" />
        </>
      )}
      <button className="submit-button" type="submit">Sign Up</button>
    </form>
    </>
  );
};

export default SignUp;
