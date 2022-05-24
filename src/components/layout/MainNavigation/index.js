import { Link } from "react-router-dom";
import { useContext } from "react";
import { FavoritesContext } from "../../../contexts/FavoritesContext";
import useScrollDirection from "./../../../util-hooks/useScrollDirection";
import { Header } from "./style";
import { Badge, Logo } from "../styles";

export default function MainNavigation() {
  const scrollDirection = useScrollDirection();
  const { favoritesCount } = useContext(FavoritesContext);
  return (
    <Header className={scrollDirection} data-test="navigation-header">
      <Logo>React Meetups</Logo>
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
              <Badge>{favoritesCount}</Badge>
            </Link>
          </li>
        </ul>
      </nav>
    </Header>
  );
}
