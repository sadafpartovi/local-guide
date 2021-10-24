import { useState } from "react";
import axios from "axios";
import {useHistory} from 'react-router';


const Login = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [wrong, setWrong] = useState(false)
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/login", { email, password });
      history.push('/home')
    } catch (error) {
      setWrong(true)
      console.log("hjhjwhd");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input onChange={(e) => setEmail(e.target.value)} placeholder="Email" />
      <input
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
      />
      {wrong && <p>password or username is incorrect!</p>}
      <button type="submit">login</button>
      <button onClick={() => history.push('/signup')}> Signup</button>
    </form>
  );
};

export default Login;
