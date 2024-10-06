/** @format */

import React from "react";
import "./Login.css";
import Button from "react-bootstrap/Button";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { signInWithGoogle } = useAuth();

  return (
    <div>
      <h2>I'm From Login Page</h2>
      <button onClick={signInWithGoogle} type='submit'>
        Sign In
      </button>
    </div>
  );
};

export default Login;
