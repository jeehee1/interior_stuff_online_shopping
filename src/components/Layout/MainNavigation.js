import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes["nav-list"]}>
          <li>
            <a href="/">HOME</a>
          </li>
          <li>
            <a href="/livingroom">LIVING ROOM</a>
          </li>
          <li>
            <a href="/kitchen">KITCHEN</a>
          </li>
          <li>
            <a href="bedroom">BED ROOM</a>
          </li>
          <li>
            <a href="library">LIBRARY</a>
          </li>
          <li>
            <a href="bathroom">BATHROOM</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
