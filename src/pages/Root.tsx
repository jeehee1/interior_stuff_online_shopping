import { Outlet } from "react-router-dom";
import MainNavigation from "../components/layout/MainNavigation";
import SideNavigation from "../components/layout/SideNavigation";

const RootLayout = () => {
  return (
    <>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
