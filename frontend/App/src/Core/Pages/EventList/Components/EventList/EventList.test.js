import renderer from "react-test-renderer";
import { MOCK_EVENTLIST_RESPONSE } from "../../Mocks/EventList.mock";

import EventList from "./EventList";

test("EventList renders correctly", () => {
  const component = renderer.create(
    <EventList
      data={MOCK_EVENTLIST_RESPONSE.events}
      pagination={MOCK_EVENTLIST_RESPONSE.pagination}
      onLoadMore={() => {}}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
