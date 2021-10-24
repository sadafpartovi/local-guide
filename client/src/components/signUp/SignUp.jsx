import React, { useContext, useState } from "react";
import axios from "axios";


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
    <form onSubmit={handleSubmit}>

      <input placeholder="email" onChange={(e) => setEmail(e.target.value)} />

      {mode === "OTP" && (
        <input onChange={(e) => setOTP(e.target.value)} placeholder="OTP" />
      )}
      {mode === "register" && (
        <>
          <input onChange={(e) => setName(e.target.value)} placeholder="name" />
          <input onChange={(e) => setPassword(e.target.value)} placeholder="password" />
        </>
      )}
      <button type="submit">Sign Up</button>
    </form>
  );
};

export default SignUp;
