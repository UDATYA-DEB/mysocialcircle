import React, { useState } from "react";
import "./login.css";
import Loader from "../../components/loader/Loader";
import { Link } from "react-router-dom";

const Login = () => {
  const [loader, setLoader] = useState(false);
  const handleLogin = () => {
    setLoader(true);
  };

  return (
    <>
      <div className="loginContainer">
        {loader && <Loader />}
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
              <button className="loginBtn" onClick={handleLogin}>
                Log In
              </button>
              <span className="forgotPass">Forgot Password?</span>
              <button className="newAccountBtn">
                <Link
                  to="/signup"
                  style={{ textDecoration: "none", color: "white" }}
                >
                  Create a New Account
                </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
