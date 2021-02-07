import { EventListActions } from "./EventList.action";
import EventListReducer from "./EventList.reducer";
import initialEventListState from "./EventList.state";
import {
  MOCK_EVENTLIST_FILTER,
  MOCK_EVENTLIST_RESPONSE,
  MOCK_EVENTLIST_RESPONSE_ERROR,
} from "../Mocks/EventList.mock";

describe("Event List Reducer", () => {
  it("should return initial state", () => {
    expect(EventListReducer(initialEventListState, {})).toEqual(
      initialEventListState
    );
  });
  it("should handle EventLoad", () => {
    const updatedState = EventListReducer(
      initialEventListState,
      EventListActions.LoadEvents()
    );
    expect(updatedState.events).toEqual([]);
    expect(updatedState.error).toEqual(null);
    expect(updatedState.isLoading).toEqual(true);
    expect(updatedState.pagination).toEqual(null);
  });
  it("should handle EventLoad Success", () => {
    const updatedState = EventListReducer(
      initialEventListState,
      EventListActions.LoadEventsSuccess(MOCK_EVENTLIST_RESPONSE)
    );
    expect(updatedState.events.length).toEqual(1);
    expect(updatedState.error).toEqual(null);
    expect(updatedState.isLoading).toEqual(false);
    expect(updatedState.pagination).not.toEqual(null);
    const updatedExtendedState = EventListReducer(
      updatedState,
      EventListActions.LoadEventsSuccess(MOCK_EVENTLIST_RESPONSE, true)
    );
    expect(updatedExtendedState.events.length).toEqual(2);
  });
  it("should handle EventLoad Error", () => {
    const updatedState = EventListReducer(
      initialEventListState,
      EventListActions.LoadEventsError(MOCK_EVENTLIST_RESPONSE_ERROR)
    );
    expect(updatedState.error).not.toEqual(null);
    expect(updatedState.error.status).toEqual(500);
    expect(updatedState.isLoading).toEqual(false);
  });
  it("should handle Event Filter Change", () => {
    const updatedState = EventListReducer(
      initialEventListState,
      EventListActions.ChangeEventFilter(MOCK_EVENTLIST_FILTER)
    );
    expect(updatedState.filter).toEqual(MOCK_EVENTLIST_FILTER);
  });
});
