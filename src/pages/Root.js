import { Outlet } from "react-router-dom";
import MainNavigation from "../components/layout/MainNavigation";
import SideNavigation from "../components/layout/SideNavigation";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <h1>DESIGN your House</h1>
      <main>
        <SideNavigation />
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
