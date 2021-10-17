import React, { useState } from "react";
import { initializeApp } from "firebase/app";
//import firebase from "./Firebase";
import { getAuth, signInWithRedirect, GoogleAuthProvider } from "firebase/auth";

const Auth = () => {
  const [logIn, setlogIn] = useState(false);

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_API_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_API_PROJECT_ID,
    storageBucket: process.env.REACT_APP_API_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_API_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_API_APP_ID
  };
  
  initializeApp(firebaseConfig);

  const auth = getAuth();

  const login = () => {
    const provider = new GoogleAuthProvider();

    signInWithRedirect(auth, provider);

    setlogIn(true);
  }

  return (
    <div>
      <button onClick={login}>ログイン</button>
    </div>
  );
}

export default Auth;