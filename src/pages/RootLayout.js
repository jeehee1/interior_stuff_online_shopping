import classes from "./RootLayout.module.css";
import MainNavigation from "../components/layout/MainNavigation";
import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <>
      <h1>DESIGN your House</h1>
      <main className={classes["page-frame"]}>
        <MainNavigation />
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
