import { useContext } from "react";
import MeetupItem from "../components/meetups/MeetupItem";
import { FavoritesContext } from "../contexts/FavoritesContext";

export default function FavoritesPage() {
  const { favorites } = useContext(FavoritesContext);
  return (
    <section>
      <h1>Favorites Page</h1>
      <ul>
        {favorites.map((item) => (
          <MeetupItem key={item.id} item={item} />
        ))}
      </ul>
    </section>
  );
}
