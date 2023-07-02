import React from "react";
import "./login.css";

const Login = () => {
  return (
    <div className="loginContainer">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h2 className="loginLogo">MySocialCircle</h2>
          <span className="loginLeftDesc">
            Connect with friends and the world around you on MySocialCircle
          </span>
        </div>
        <div className="loginRight">
          <div className="loginRightBox">
            <input
              type="email"
              placeholder="Enter Email"
              className="loginInput"
            />
            <input
              type="password"
              placeholder="Enter Password"
              className="loginInput"
            />
            <button className="loginBtn">Log In</button>
            <span className="forgotPass">Forgot Password?</span>
            <button className="newAccountBtn">Create a New Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
