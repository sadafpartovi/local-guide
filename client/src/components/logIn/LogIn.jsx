import './login.css'
import { useState, useEffect } from "react";
const LogIn = () => {
  return (

    <div className='container full-height form-group'>
      <div className='d-flex flex-row h-100 align-items-center'>
      <form>
        <label>Email address</label>
        <input className='form-control-lg'type='text' placeholder='Enter email'></input>
        <label>Password</label>
        <input className='form-control-lg' type="password" placeholder="Password"></input>
        <div className='d-flex  justify-content-center align-items-center  mt-0'>
        <button type="submit">Login</button>
        </div>
      </form>
      </div>
    </div>

  );
};

export default LogIn;
