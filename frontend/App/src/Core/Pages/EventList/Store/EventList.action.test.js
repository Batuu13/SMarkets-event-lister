import {
  EventListActionTypes,
  EventListActions,
} from "../../../../../src/Core/Pages/EventList/Store/EventList.action";
import {
  MOCK_EVENTLIST_FILTER,
  MOCK_EVENTLIST_RESPONSE,
  MOCK_EVENTLIST_RESPONSE_ERROR,
} from "../Mocks/EventList.mock";

describe("Event List Actions", () => {
  it("should start fetching event list", () => {
    const expectedAction = {
      type: EventListActionTypes.EVENTLIST_LOAD,
    };
    expect(EventListActions.LoadEvents()).toEqual(expectedAction);
  });
  it("should update errors on event list", () => {
    const exampleError = MOCK_EVENTLIST_RESPONSE_ERROR;
    const expectedAction = {
      type: EventListActionTypes.EVENTLIST_LOAD_ERROR,
      error: exampleError,
    };
    expect(EventListActions.LoadEventsError(exampleError)).toEqual(
      expectedAction
    );
  });
  it("should update event list successfully", () => {
    const exampleResponse = MOCK_EVENTLIST_RESPONSE;
    const expectedAction = {
      type: EventListActionTypes.EVENTLIST_LOAD_SUCCESS,
      eventResponse: exampleResponse,
      shouldExtend: false,
    };
    expect(EventListActions.LoadEventsSuccess(exampleResponse)).toEqual(
      expectedAction
    );
  });
  it("should update event filter", () => {
    const exampleFilter = MOCK_EVENTLIST_FILTER;
    const expectedAction = {
      type: EventListActionTypes.EVENTLIST_FILTER_CHANGE,
      newFilter: exampleFilter,
    };
    expect(EventListActions.ChangeEventFilter(exampleFilter)).toEqual(
      expectedAction
    );
  });
});
