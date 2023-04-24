import { signInWithPopup } from "firebase/auth";
import "./Login.scss";
import { Button } from "@mui/material";
import { auth, provider } from "../firebase";

export const Login = () => {
  // https://firebase.google.com/docs/auth/web/google-signin?hl=ja
  const signIn = () => {
    signInWithPopup(auth, provider).catch((err) => {
      alert(err.message);
    });
  };

  return (
    <div className="login">
      <div className="loginLogo">
        <img src="./discordIcon.png" alt="" />
      </div>

      <Button onClick={signIn}>ログイン</Button>
    </div>
  );
};
