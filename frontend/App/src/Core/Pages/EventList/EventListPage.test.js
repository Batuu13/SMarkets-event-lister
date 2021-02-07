import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import renderer from "react-test-renderer";
import { createMemoryHistory } from "history";
import configureMockStore from "redux-mock-store";
import LoadingSpinner from "../../../Shared/Components/LoadingSpinner/LoadingSpinner";
import { EVENTLIST_STORE_NAME } from "../../Store/reducers";
import EventListPage from "./EventListPage";
import initialEventListState from "./Store/EventList.state";
import thunk from "redux-thunk";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);
describe("Event List Service", () => {
  let store;
  let history;
  beforeEach(() => {
    store = mockStore({
      [EVENTLIST_STORE_NAME]: initialEventListState,
    });
    history = createMemoryHistory();
  });
  it("EventListPage renders correctly", () => {
    const component = renderer.create(
      <Router history={history}>
        <Provider store={store}>
          <EventListPage />
        </Provider>
      </Router>
    );
    expect(component.root.findAllByType(LoadingSpinner).length).toBe(0);
  });
  it("EventListPage renders loading correctly", () => {
    store = mockStore({
      [EVENTLIST_STORE_NAME]: { ...initialEventListState, isLoading: true },
    });
    const component = renderer.create(
      <Router history={history}>
        <Provider store={store}>
          <EventListPage />
        </Provider>
      </Router>
    );
    expect(component.root.findAllByType(LoadingSpinner).length).toBe(1);
  });
});
