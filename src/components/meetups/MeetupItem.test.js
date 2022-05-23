/* eslint-disable testing-library/no-debugging-utils */
import { shallow } from "enzyme";
import { FavoritesProvider } from "../../contexts/FavoritesContext";
import MeetupItem from "./MeetupItem";

test("<MeetupItem/> renders without crashing", () => {
  const wrapper = shallow(
    <FavoritesProvider>
      <MeetupItem />
    </FavoritesProvider>
  );
  expect(wrapper.exists()).toBe(true);
});
