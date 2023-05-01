import { useState } from "react";
import classes from "./AuthForm.module.css";
import {
  firebaseAuth,
  createUserWithEmailAndPassword,
} from "../../config/firebase";
import { useNavigate } from "react-router-dom";

const AuthForm = () => {
  const navigate = useNavigate();
  const [isSignUp, setIsSignUp] = useState(true);
  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [err, setErr] = useState({ code: "", message: "" });

  const changeEmailHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setEmail(event.target.value);
  };

  const changePwdHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setPwd(event.target.value);
  };

  const onSubmitSignUp = (event: React.FormEvent) => {
    event.preventDefault();

    createUserWithEmailAndPassword(firebaseAuth, email, pwd)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
        return navigate("/interiors");
        // ...
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        setErr({ code: error.code, message: error.message });
      });
  };

  return (
    <form method="POST" className={classes.form} onSubmit={onSubmitSignUp}>
      {isSignUp ? <h1>Sign Up</h1> : <h1>Log In</h1>}
      <label id="email">Email</label>
      <input
        type="text"
        name="email"
        id="email"
        onChange={changeEmailHandler}
      />
      <label id="pwd">Password</label>
      <input type="password" id="pwd" name="pwd" onChange={changePwdHandler} />
      <p className={classes.message}>{err.code}</p>
      <div>
        {isSignUp && <button onClick={() => setIsSignUp(false)}>Log In</button>}
        {!isSignUp && <button onClick={() => setIsSignUp(true)}>Sign Up</button>}
        <button>Send</button>
      </div>
    </form>
  );
};

export default AuthForm;
