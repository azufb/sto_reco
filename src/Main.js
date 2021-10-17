import React from "react";
import { getAuth, signOut } from "firebase/auth";

const Main = () => {

  const logout = () => {
    const auth = getAuth();
    signOut(auth).then(() => {
      console.log("ログアウトしました。");
    }).catch((error) => {
      console.log(error);
    });
  }

  return (
    <div>
      Main
      <button onClick={logout}>ログアウト</button>
    </div>
  )
}

export default Main;