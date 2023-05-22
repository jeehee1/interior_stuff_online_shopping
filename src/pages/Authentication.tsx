import { json, redirect } from "react-router-dom";
import AuthForm from "../components/authentication/AuthForm";
import {
  firebaseAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../config/firebase";

const Authentication = () => {
  return <AuthForm />;
};

export default Authentication;

export const action = async ({ request }: { request: Request }) => {
  try {
    const searchParams = new URL(request.url).searchParams;
    const mode = searchParams.get("mode") || "login";

    if (mode !== "login" && mode !== "signup") {
      throw json({ message: "Unsupported mode." }, { status: 422 });
    }

    const data = await request.formData();
    const authData: { email: string; pwd: string } = {
      email: data.get("email")?.toString() || "",
      pwd: data.get("pwd")?.toString() || "",
    };

    let getAuth;
    mode === "signup"
      ? (getAuth = createUserWithEmailAndPassword)
      : (getAuth = signInWithEmailAndPassword);

    const response = await getAuth(firebaseAuth, authData.email, authData.pwd);
    const token = response.user.uid;
    localStorage.setItem("token", token);

    const expiration = new Date();
    expiration.setHours(expiration.getHours() + 1);
    localStorage.setItem("expiration", expiration.toISOString());

    return redirect("/interiors");
  } catch (error) {
    return error;
  }
};
