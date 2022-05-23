import { shallow } from "enzyme";
import MeetupItem from "../components/meetups/MeetupItem";
import { FavoritesProvider } from "../contexts/FavoritesContext";
import AllMeetupsPage from "./AllMeetupsPage";

test("Favorites without crashing", () => {
  const wrapper = shallow(
    <FavoritesProvider>
      <AllMeetupsPage />
    </FavoritesProvider>
  );
  wrapper.find(<MeetupItem />).forEach((node) => {
    expect(node.find("li").props()["data-test"]).toBe("meet-up-item");
  });
});
