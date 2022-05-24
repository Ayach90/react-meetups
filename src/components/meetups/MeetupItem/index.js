import Card from "../../ui/Card";
import { useContext } from "react";
import { FavoritesContext } from "../../../contexts/FavoritesContext";
import { Actions, Button, Content, Image, Item } from "./styles";

export default function MeetupItem({ item }) {
  const { favorites, setFavorites } = useContext(FavoritesContext);

  return (
    <Item data-test="meet-up-item">
      <Card>
        <Image>
          <img src={item.image} alt={item.title} />
        </Image>
        <Content>
          <h3>{item.title}</h3>
          <address>{item.address}</address>
          <p>{item.description}</p>
        </Content>
        {favorites.findIndex((fav) => fav.id === item.id) === -1 ? (
          <Actions>
            <Button onClick={() => setFavorites([...favorites, item])}>
              Add to favorites
            </Button>
          </Actions>
        ) : (
          <Actions>
            <Button
              className="remove"
              onClick={() =>
                setFavorites(favorites.filter((fav) => fav.id !== item.id))
              }
            >
              Remove of favorites
            </Button>
          </Actions>
        )}
      </Card>
    </Item>
  );
}
