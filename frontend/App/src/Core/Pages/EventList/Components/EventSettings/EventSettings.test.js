import renderer from "react-test-renderer";
import { MOCK_EVENTSETTINGS } from "../../Mocks/EventSettings.mock";
import EventSettings from "./EventSettings";


test("EventSettings renders correctly", () => {
  const component = renderer.create(
    <EventSettings
      onEventFilterChange={() => {}}
      eventFilter={MOCK_EVENTSETTINGS}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
