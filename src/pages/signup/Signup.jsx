import React from "react";
import "./signup.css";

const Signup = () => {
  return (
    <div className="signupContainer">
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
            <button className="signupBtn">Sign Up</button>
            <button className="newAccountBtn">Log into Account</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signup;
