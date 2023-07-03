import React, { useState, useRef } from "react";
import Loader from "../../components/loader/Loader";
import { Link } from "react-router-dom";
import "./signup.css";
import { useFirebase } from "../../context/Firebase";

const Signup = () => {
  const [loader, setLoader] = useState(false);
  const emailRef = useRef(null);
  const userNameRef = useRef(null);
  const passRef = useRef(null);
  const passAgainRef = useRef(null);
  const firebase = useFirebase();
  const handleSignup = () => {
    if (
      emailRef.current.value &&
      passRef.current.value &&
      passAgainRef.current.value &&
      userNameRef.current.value
    ) {
      if (passRef.current.value === passAgainRef.current.value) {
        if (passRef.current.value.length < 6) {
          alert("Atleast 6 character password is preferred!");
        } else {
          setLoader(true);
          firebase
            .signupWithEmailPass(emailRef.current.value, passRef.current.value)
            .then((value) => {
              console.log(value);
            });
        }
      } else {
        alert("Passwords do not match");
      }
    } else {
      alert("All inputs are required!");
    }
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
            <input
              type="text"
              placeholder="Username"
              className="signupInput"
              ref={userNameRef}
            />
            <input
              type="email"
              placeholder="Email"
              className="signupInput"
              ref={emailRef}
            />
            <input
              type="password"
              placeholder="Password"
              className="signupInput"
              ref={passRef}
            />
            <input
              type="password"
              placeholder="Password Again"
              className="signupInput"
              ref={passAgainRef}
            />
            <button className="signupBtn" onClick={handleSignup}>
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
