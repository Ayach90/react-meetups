import { useContext } from "react";
import Helmet from "react-helmet";
import MeetupItem from "../../components/meetups/MeetupItem";
import { Feedback } from "../../components/ui/Feedback";
import List from "../../components/ui/List";
import { FavoritesContext } from "../../contexts/FavoritesContext";

export default function FavoritesPage() {
  const { favorites } = useContext(FavoritesContext);
  return (
    <section>
      <Helmet>
        <title>Favorites Meetups</title>
        <meta name="description" content="Your favorite meetups" />
      </Helmet>
      <h1>Favorites Page</h1>
      <List>
        {favorites.length > 0 ? (
          favorites.map((item) => <MeetupItem key={item.id} item={item} />)
        ) : (
          <Feedback>:( You don't have any favorite meetup yet.</Feedback>
        )}
      </List>
    </section>
  );
}
