import { createContext } from "react";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

const FirebaseContext = createContext(null);

const firebaseConfig = {
  apiKey: "AIzaSyDx-X540v-JiYsyI8lEtblRw-kerFlLiLo",
  authDomain: "mysocialcircle-a23b0.firebaseapp.com",
  projectId: "mysocialcircle-a23b0",
  storageBucket: "mysocialcircle-a23b0.appspot.com",
  messagingSenderId: "386822358167",
  appId: "1:386822358167:web:faf2fa9210945d283295d2",
};

const app = initializeApp(firebaseConfig);

// const auth = getAuth(app);
// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });

export const FirebaseContextProvider = (props) => {
  return <FirebaseContextProvider>{props.children}</FirebaseContextProvider>;
};
