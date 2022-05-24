import { shallow } from "enzyme";
import NewMeetupForm from "../../components/meetups/NewMeetupForm";
import NewMeetupsPage from "./";

test("<NewMeetup/> renders without crashing", () => {
  const wrapper = shallow(<NewMeetupsPage />);
  expect(wrapper.contains([<h1>Add New Meetup</h1>])).toBe(true);
  expect(wrapper.find(NewMeetupForm).length).toBe(1);
});
