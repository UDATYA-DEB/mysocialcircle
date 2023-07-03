import { createContext, useContext, useEffect, useState } from "react";
import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

const firebaseConfig = {
  apiKey: "AIzaSyDx-X540v-JiYsyI8lEtblRw-kerFlLiLo",
  authDomain: "mysocialcircle-a23b0.firebaseapp.com",
  projectId: "mysocialcircle-a23b0",
  storageBucket: "mysocialcircle-a23b0.appspot.com",
  messagingSenderId: "386822358167",
  appId: "1:386822358167:web:faf2fa9210945d283295d2",
};

const app = initializeApp(firebaseConfig);
const firebaseAuth = getAuth(app);
const FirebaseContext = createContext(null);

export const useFirebase = () => useContext(FirebaseContext);

export const FirebaseProvider = (props) => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (us) => {
      if (us) {
        setUser(us);
        navigate("/");
      } else {
        setUser(null);
        navigate("/login");
      }
    });
  }, [firebaseAuth]);

  const signupWithEmailPass = (email, pass) => {
    return createUserWithEmailAndPassword(firebaseAuth, email, pass);
  };

  const signinWithEmailPass = (email, pass) => {
    return signInWithEmailAndPassword(firebaseAuth, email, pass);
  };

  const handleSignOut = () => {
    signOut(firebaseAuth);
  };
  return (
    <FirebaseContext.Provider
      value={{ signupWithEmailPass, signinWithEmailPass, handleSignOut }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};
