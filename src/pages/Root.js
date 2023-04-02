import { Outlet } from "react-router-dom";
import SideNavigation from "../components/layout/SideNavigation";

const RootLayout = () => {
  return (
    <>
      <h1>DESIGN your House</h1>
      <main>
        <SideNavigation />
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
