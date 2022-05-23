import AllMeetupsPage from "./pages/AllMeetupsPage";
import FavoritesPage from "./pages/Favorites";
import NewMeetupForm from "./components/meetups/NewMeetupForm";
import MainNavigation from "./components/layout/MainNavigation";
import Layout from "./components/layout/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { FavoritesProvider } from "./contexts/FavoritesContext";

function App() {
  return (
    <div data-test="app">
      <BrowserRouter>
        <FavoritesProvider>
          <MainNavigation />
          <Layout>
            <Routes>
              <Route path="/" element={<AllMeetupsPage />} />
              <Route path="/new" element={<NewMeetupForm />} />
              <Route path="favorites" element={<FavoritesPage />} />
            </Routes>
          </Layout>
        </FavoritesProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
