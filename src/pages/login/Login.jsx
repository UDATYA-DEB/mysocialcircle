import React, { useState, useRef } from "react";
import "./login.css";
import Loader from "../../components/loader/Loader";
import { Link } from "react-router-dom";
import { useFirebase } from "../../context/Firebase";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [loader, setLoader] = useState(false);
  const emailRef = useRef(null);
  const passRef = useRef(null);
  const firebase = useFirebase();
  const navigate = useNavigate();

  const handleLogin = () => {
    if (emailRef.current.value && passRef.current.value) {
      setLoader(true);
      firebase
        .signinWithEmailPass(emailRef.current.value, passRef.current.value)
        .then((value) => {
          // alert("Success");
          navigate("/");
        })
        .catch((err) => {
          alert("Not Found");
          setLoader(false);
        });
    } else {
      alert("Inputs are required!");
    }
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
                ref={emailRef}
              />
              <input
                type="password"
                placeholder="Enter Password"
                className="loginInput"
                ref={passRef}
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
