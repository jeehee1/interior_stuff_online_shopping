import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";

console.log(process.env.REACT_APP_FB_API_KEY)

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<App />);
