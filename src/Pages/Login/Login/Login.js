/** @format */

import React from "react";
import "./Login.css";
import Button from "react-bootstrap/Button";

const Login = () => {
  return (
    <div>
      <h2>I'm From Login Page</h2>
      <Button variant='primary'>Primary</Button>{" "}
      <button type='button' class='btn btn-warning'>
        Warning
      </button>
    </div>
  );
};

export default Login;
