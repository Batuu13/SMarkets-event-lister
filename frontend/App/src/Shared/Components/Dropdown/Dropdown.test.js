import renderer from "react-test-renderer";
import { EventFilters } from "../../../Core/Pages/EventList/Constants/filters";
import { MOCK_EVENTLIST_FILTER, MOCK_EVENTLIST_FILTERS } from "../../../Core/Pages/EventList/Mocks/EventList.mock";
import Dropdown from "./Dropdown";

test("Dropdown renders correctly", () => {
  const component = renderer.create(
    <Dropdown
      title={"Test Dropdown"}
      filters={MOCK_EVENTLIST_FILTERS}
      filterKey={EventFilters.FILTER_EVENT_TYPE}
      onChange={() => {}}
      options={[MOCK_EVENTLIST_FILTER]}
    />
  );
  let tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
