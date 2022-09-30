import { NavLink } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.contents}>
        <div>
          PDxF Logo
          <img src="img\asdf.png" alt="logo"></img>
        </div>
        <nav className={styles.navigation}>
          <ul>
            <li>
              <NavLink to="/admin">Main</NavLink>
            </li>
            <li>
              <NavLink to="/challenges">Challenges</NavLink>
            </li>
            <li>
              <NavLink to="/admin">Admin</NavLink>
            </li>

            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
            <li>
              <NavLink to="/">Sign In</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
