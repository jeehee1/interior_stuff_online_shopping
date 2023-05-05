import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { firebaseAuth } from "./config/firebase";

console.log(firebaseAuth.currentUser)

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
