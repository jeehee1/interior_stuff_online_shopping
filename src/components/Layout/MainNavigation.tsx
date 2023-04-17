import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <h1>MAKE YOUR INTERIOR DESIGN</h1>
      <nav>
        <ul className={classes.nav}>
          <li>
            <NavLink
              to="/"
              end
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
              end
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              INTERIOR DESIGN LISTS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/interiors/new"
              end
              className={({ isActive }) =>
                isActive ? classes.active : undefined
              }
            >
              REGISTER NEW INTERORS
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainNavigation;
