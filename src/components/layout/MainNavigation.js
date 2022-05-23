import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext";
import useScrollDirection from "./../../util-hooks/useScrollDirection";
import classes from "./MainNavigation.module.css";

export default function MainNavigation() {
  const scrollDirection = useScrollDirection();
  const { favoritesCount } = useContext(FavoritesContext);
  return (
    <header
      className={
        scrollDirection === "down"
          ? `${classes.header} ${classes.down}`
          : classes.header
      }
      data-test="navigation-header"
    >
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/new">Add New Meetup</Link>
          </li>
          <li>
            <Link to="/favorites">
              My Favorites
              <span className={classes.badge}>{favoritesCount}</span>
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
