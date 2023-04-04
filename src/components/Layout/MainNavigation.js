import classes from "./MainNavigation.module.css";
import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        <NavLink to="/" className={({isActive}) => isActive? classes.active : undefined}>HOME</NavLink>
        <NavLink to="/interiors" className={({isActive}) => isActive? classes.active : undefined}>INTERIORS</NavLink>
        <NavLink to="/interiors/new" className={({isActive}) => isActive? classes.active : undefined}>REGISTER NEW INTERORS</NavLink>
        <NavLink to="/interiors/details" className={({isActive}) => isActive? classes.active : undefined}>DETAILS</NavLink>
      </nav>
    </header>
  );
};

export default MainNavigation;
