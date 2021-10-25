import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";
import "./login.css";

const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [wrong, setWrong] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/login", { email, password });
      history.push("/home");
    } catch (error) {
      setWrong(true);
      console.log("hjhjwhd");
    }
  };

  return (
    <>
    <h1 className="mx-5 p-3" >Login</h1>
    <form
      onSubmit={handleSubmit}
      className="mx-5 p-3  d-flex justify-content-center flex-column align-items-center"
    >
      <input
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        className="localForm m-3 p-3"
      />
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        className="localForm m-3 p-3"
      />
      {wrong && <p>password or username is incorrect!</p>}
      <div className='d-flex justify-content-center flex-column'>
        <button type="submit" className="submit-button mb-5 ">
          login
        </button>
        <p className="signup-text">don't have an account? signup here</p>
        <button
          onClick={() => history.push("/signup")}
          className="submit-button my-1"
        >
          {" "}
          Signup
        </button>
      </div>
    </form>
    </>
  );
};

export default Login;
