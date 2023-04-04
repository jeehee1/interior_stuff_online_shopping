import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.nav}>
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/interiors"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              INTERIORS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/interiors/new"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              REGISTER NEW INTERORS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/interiors/details"
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              DETAILS
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
