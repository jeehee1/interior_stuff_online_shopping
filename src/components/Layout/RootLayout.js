import classes from './RootLayout.module.css'
import InteriorList from "../InteriorList";
import MainNavigation from "./MainNavigation";

const RootLayout = () => {
  return (
    <div className={classes['page-frame']}>
      <MainNavigation />
      <main>
        <InteriorList />
      </main>
    </div>
  );
};

export default RootLayout;
