import { createContext, useState } from "react";

const FavoritesContext = createContext();

const initialFavorites = [];

const FavoritesProvider = ({ children }) => {
  const [favorites, setFavorites] = useState(initialFavorites);

  const favoritesCount = favorites.length;

  const data = { favoritesCount, favorites, setFavorites };
  return (
    <FavoritesContext.Provider value={data}>
      {children}
    </FavoritesContext.Provider>
  );
};

export { FavoritesProvider, FavoritesContext };
