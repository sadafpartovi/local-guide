import "./login.css";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useState, useEffect } from "react";
import { useHistory } from 'react-router';


const LogIn = () => {

  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  const history = useHistory()

  const handleLogIn = (e) => {
    e.preventDefault()
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        history.push("/feed");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        const errorMsgs = {
          "auth/invalid-email": "Please enter a valid email",
          "auth/user-not-found":
            "This email account is not registered with us. Please check the spelling and try again.",
          "auth/wrong-password":
            "Password does not match this email. Please try again.",
        };

      });
  };
  return (
    <div className="container full-height form-group">
      <div className="d-flex flex-row h-100 align-items-center">
        <form onSubmit={(e) => handleLogIn(e)}>
          <label>Email address</label>
          <input
            className="form-control-lg"
            type="text"
            placeholder="Enter email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <label>Password</label>
          <input
            className="form-control-lg"
            type="password"
            placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="d-flex  justify-content-center align-items-center  mt-0">
            <button type="submit">Login</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LogIn;
