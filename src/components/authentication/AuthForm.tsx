import classes from "./AuthForm.module.css";

import {
  Form,
  Link,
  useActionData,
  useNavigation,
  useSearchParams,
} from "react-router-dom";

const AuthForm = () => {
  const navigation = useNavigation();
  const [searchParams] = useSearchParams();
  const isLogin = searchParams.get("mode") === "login";
  const error: any = useActionData();

  let isSubmitting = false;
  navigation.state === "submitting"
    ? (isSubmitting = true)
    : (isSubmitting = false);

  return (
    <Form method="POST" className={classes.form}>
      {isLogin ? <h1>Log In</h1> : <h1>Sign Up</h1>}
      <label id="email">Email</label>
      <input type="text" name="email" id="email" />
      <label id="pwd">Password</label>
      <input type="password" id="pwd" name="pwd" />
      {error && <p className={classes.message}>{error.code}</p>}
      <div>
        <Link className={classes.mode} to={isLogin ? "/auth?mode=signup" : "/auth?mode=login"}>
          {isLogin ? "Sign Up" : "Log In"}
        </Link>
        <button>{isSubmitting ? "Submitting..." : "Send"}</button>
      </div>
    </Form>
  );
};

export default AuthForm;
