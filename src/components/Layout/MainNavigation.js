import { NavLink } from "react-router-dom";

const MainNavigation = () => {
  return (
    <header>
      <nav>
        <ul>
            <li>
                <a href='/'>
                    HOME
                </a>
                <a href='/livingroom'>
                    LIVING ROOM
                </a>
                <a href='/kitchen'>
                    KITCHEN
                </a>
                <a href='bedroom'>
                    BED ROOM
                </a>
                <a href='library'>
                    LIBRARY
                </a>
                <a href='bathroom'>
                    BATHROOM
                </a>
            </li>
        </ul>
      </nav>
    </header>
  );
};


export default MainNavigation;