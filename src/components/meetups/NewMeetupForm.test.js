/* eslint-disable testing-library/no-debugging-utils */
import { shallow } from "enzyme";
import NewMeetupForm from "./NewMeetupForm";

test("<NewMeetupForm/> renders without crashing", () => {
  const wrapper = shallow(<NewMeetupForm />);
  expect(wrapper.exists()).toBe(true);
});
