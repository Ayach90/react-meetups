import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import { useContext } from "react";
import { FavoritesContext } from "../../contexts/FavoritesContext";

export default function MeetupItem({ item }) {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  return (
    <li className={classes.item} data-test="meet-up-item">
      <Card>
        <div className={classes.image}>
          <img src={item.image} alt={item.title} />
        </div>
        <div className={classes.content}>
          <h3>{item.title}</h3>
          <address>{item.address}</address>
          <p>{item.description}</p>
        </div>
        {favorites.findIndex((fav) => fav.id === item.id) === -1 ? (
          <div className={classes.actions}>
            <button onClick={() => setFavorites([...favorites, item])}>
              Add to favorites
            </button>
          </div>
        ) : (
          <div className={`${classes.actions} ${classes.remove}`}>
            <button
              onClick={() =>
                setFavorites(favorites.filter((fav) => fav.id !== item.id))
              }
            >
              Remove of favorites
            </button>
          </div>
        )}
      </Card>
    </li>
  );
}
