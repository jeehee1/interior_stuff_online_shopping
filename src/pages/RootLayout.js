import classes from './RootLayout.module.css'
import InteriorList from "../components/InteriorList";
import MainNavigation from "../components/Layout/MainNavigation";

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
