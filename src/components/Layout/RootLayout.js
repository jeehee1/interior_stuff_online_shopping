import classes from "./RootLayout.module.css";
import InteriorList from "../Interior/InteriorList";
import MainNavigation from "./MainNavigation";

const RootLayout = () => {
  return (
    <>
      <h1>DESIGN your House</h1>
      <div className={classes["page-frame"]}>
        <MainNavigation />
        <main>
          <InteriorList />
        </main>
      </div>
    </>
  );
};

export default RootLayout;
