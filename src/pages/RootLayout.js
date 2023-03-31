import classes from "./RootLayout.module.css";
import MainNavigation from "../components/layout/MainNavigation";
import InteriorLists from "../components/interiors/InteriorLists";

const RootLayout = () => {
  return (
    <>
      <h1>DESIGN your House</h1>
      <main className={classes["page-frame"]}>
        <MainNavigation />
        <InteriorLists />
      </main>
    </>
  );
};

export default RootLayout;
