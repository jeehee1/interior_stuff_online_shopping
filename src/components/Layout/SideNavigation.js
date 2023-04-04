import classes from "./SideNavigation.module.css";
import { Link } from "react-router-dom";

const SideNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.nav}>
          <li>
            <Link to="/interiors">All</Link>
          </li>
          <li>
            <Link to="/interiors?type=livingroom">LIVING ROOM</Link>
          </li>
          <li>
            <Link to="/interiors?type=kitchen">KITCHEN</Link>
          </li>
          <li>
            <Link to="/interiors?type=bedroom">BED ROOM</Link>
          </li>
          <li>
            <Link to="/interiors?type=library">LIBRARY</Link>
          </li>
          <li>
            <Link to="/interiors?type=bathroom">BATHROOM</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default SideNavigation;
