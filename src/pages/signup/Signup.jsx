import React, { useState } from "react";
import Loader from "../../components/loader/Loader";
import { Link } from "react-router-dom";
import "./signup.css";

const Signup = () => {
  const [loader, setLoader] = useState(false);
  const handleLogin = () => {
    setLoader(true);
  };
  return (
    <div className="signupContainer">
      {loader && <Loader />}
      <div className="signupWrapper">
        <div className="signupLeft">
          <h2 className="signupLogo">MySocialCircle</h2>
          <span className="signupLeftDesc">
            Connect with friends and the world around you on MySocialCircle
          </span>
        </div>
        <div className="signupRight">
          <div className="signupRightBox">
            <input type="text" placeholder="Username" className="signupInput" />
            <input type="email" placeholder="Email" className="signupInput" />
            <input
              type="password"
              placeholder="Password"
              className="signupInput"
            />
            <input
              type="password"
              placeholder="Password Again"
              className="signupInput"
            />
            <button className="signupBtn" onClick={handleLogin}>
              Sign Up
            </button>
            <button className="newAccountBtn">
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                Log into Account
              </Link>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
