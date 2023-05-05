import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import classes from "./MainNavigation.module.css";
import { useState } from "react";
import {
  Form,
  Link,
  NavLink,
  useLoaderData,
  useRouteLoaderData,
} from "react-router-dom";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const MainNavigation = () => {
  const [showNav, setShowNav] = useState(false);
  const token = useRouteLoaderData("root");
  const showLogout: boolean = token ? true : false;

  return (
    <header className={classes.header}>
      <h1>MAKE YOUR INTERIOR DESIGN</h1>
      <nav>
        <div className={classes.icon}>
          <FontAwesomeIcon
            icon={faBars as IconProp}
            onClick={() => setShowNav(!showNav)}
          />
        </div>
        <div className={[classes.nav, showNav ? classes.show : null].join(" ")}>
          <ul>
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
                LISTS
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
                NEW
              </NavLink>
            </li>
            <div className={classes.auth}>
              {!showLogout && (
                <li>
                  <NavLink
                    to="/auth?mode=login"
                    end
                    className={({ isActive }) =>
                      isActive ? classes.active : undefined
                    }
                  >
                    Authentication
                  </NavLink>
                </li>
              )}
              {showLogout && (
                <li>
                  <Form action="/logout" method="post">
                    <button className={classes.logout}>Logout</button>
                  </Form>
                </li>
              )}
            </div>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default MainNavigation;
