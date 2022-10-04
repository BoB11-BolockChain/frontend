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
              <NavLink to="/admin">admin</NavLink>
            </li>
            <li>
              <NavLink to="/admin/challenges">Challenges</NavLink>
            </li>
            <li>
              <NavLink to="/admin/editchallenges/fdsa">edit challenge</NavLink>
            </li>

            <li>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
            <li>
              <NavLink to="/signin">Sign In</NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
