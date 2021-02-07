import { EventListActionTypes } from "../../../../../src/Core/Pages/EventList/Store/EventList.action";
import {
  MOCK_EVENTLIST_FILTER,
  MOCK_EVENTLIST_RESPONSE,
  MOCK_EVENTLIST_FILTERS,
  MOCK_EVENTLIST_RESPONSE_ERROR,
} from "../Mocks/EventList.mock";
import thunk from "redux-thunk";
import { EVENTS_API } from "../Constants/api";
import initialEventListState from "../Store/EventList.state";
import {
  ChangeEventFilter,
  ChangeEventFilters,
  LoadEvents,
  LoadEventsWithPagination,
} from "./EventList.service";
import configureMockStore from "redux-mock-store";
import fetchMock from "fetch-mock";
import { filtersToParams } from "../../../../Shared/Utils/StringUtils";
import { EVENTLIST_STORE_NAME } from "../../../Store/reducers";

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Event List Service", () => {
  afterEach(() => {
    fetchMock.restore();
  });
  it("should call LoadEvents successfully", () => {
    const params = filtersToParams(MOCK_EVENTLIST_FILTER);
    fetchMock.getOnce(`${EVENTS_API}?${params}`, {
      status: 200,
      body: MOCK_EVENTLIST_RESPONSE,
      headers: { "content-type": "application/json" },
    });
    const expectedActions = [
      { type: EventListActionTypes.EVENTLIST_LOAD },
      {
        type: EventListActionTypes.EVENTLIST_LOAD_SUCCESS,
        eventResponse: MOCK_EVENTLIST_RESPONSE,
        shouldExtend: false,
      },
    ];
    const store = mockStore(initialEventListState);

    return store.dispatch(LoadEvents(MOCK_EVENTLIST_FILTER)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("should call LoadEvents with errors", () => {
    const params = filtersToParams(MOCK_EVENTLIST_FILTER);
    fetchMock.getOnce(`${EVENTS_API}?${params}`, {
      status: 500,
      body: MOCK_EVENTLIST_RESPONSE_ERROR,
      headers: { "content-type": "application/json" },
    });
    const expectedActions = [
      { type: EventListActionTypes.EVENTLIST_LOAD },
      {
        type: EventListActionTypes.EVENTLIST_LOAD_ERROR,
        error: MOCK_EVENTLIST_RESPONSE_ERROR,
      },
    ];
    const store = mockStore(initialEventListState);

    return store.dispatch(LoadEvents(MOCK_EVENTLIST_FILTER)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
    });
  });
  it("should call LoadEventsWithPagination successfully", () => {
    fetchMock.getOnce(`${EVENTS_API}${MOCK_EVENTLIST_RESPONSE.pagination}`, {
      status: 200,
      body: MOCK_EVENTLIST_RESPONSE,
      headers: { "content-type": "application/json" },
    });
    const expectedActions = [
      {
        type: EventListActionTypes.EVENTLIST_LOAD_SUCCESS,
        eventResponse: MOCK_EVENTLIST_RESPONSE,
        shouldExtend: true,
      },
    ];
    const store = mockStore(initialEventListState);

    return store
      .dispatch(LoadEventsWithPagination(MOCK_EVENTLIST_RESPONSE.pagination))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it("should call LoadEventsWithPagination with errors", () => {
    fetchMock.getOnce(`${EVENTS_API}${MOCK_EVENTLIST_RESPONSE.pagination}`, {
      status: 500,
      body: { message: "error" },
      headers: { "content-type": "application/json" },
    });
    const expectedActions = [
      {
        type: EventListActionTypes.EVENTLIST_LOAD_ERROR,
        error: { message: "error" },
      },
    ];
    const store = mockStore(initialEventListState);

    return store
      .dispatch(LoadEventsWithPagination(MOCK_EVENTLIST_RESPONSE.pagination))
      .then(() => {
        expect(store.getActions()).toEqual(expectedActions);
      });
  });
  it("should call ChangeEventFilters", () => {
    const expectedActions = [
      {
        type: EventListActionTypes.EVENTLIST_FILTER_CHANGE,
        newFilter: MOCK_EVENTLIST_FILTERS,
        shouldUpdate: true,
      },
    ];
    const store = mockStore(initialEventListState);

    store.dispatch(ChangeEventFilters(MOCK_EVENTLIST_FILTERS));

    expect(store.getActions()).toEqual(expectedActions);
  });
  it("should call ChangeEventFilter", () => {
    const expectedActions = [
      {
        type: EventListActionTypes.EVENTLIST_FILTER_CHANGE,
        newFilter: { [MOCK_EVENTLIST_FILTER.key]: MOCK_EVENTLIST_FILTER.value },
        shouldUpdate: false,
      },
    ];
    const store = mockStore({ [EVENTLIST_STORE_NAME]: initialEventListState });

    store.dispatch(
      ChangeEventFilter(
        MOCK_EVENTLIST_FILTER.key,
        MOCK_EVENTLIST_FILTER.value,
        false
      )
    );
    expect(store.getActions()).toEqual(expectedActions);
  });
});
