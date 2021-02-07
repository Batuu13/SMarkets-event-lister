import { EventListActionTypes } from "./EventList.action";
import initialEventListState from "./EventList.state";

export default function EventListReducer(
  state = initialEventListState,
  action
) {
  switch (action.type) {
    case EventListActionTypes.EVENTLIST_LOAD:
      return {
        ...state,
        events: [],
        error: null,
        isLoading: true,
      };
    case EventListActionTypes.EVENTLIST_LOAD_SUCCESS:
      return {
        ...state,
        events: action.shouldExtend
          ? [...state.events, ...action.eventResponse.events]
          : action.eventResponse.events,
        pagination: action.eventResponse.pagination,
        isLoading: false,
      };
    case EventListActionTypes.EVENTLIST_LOAD_ERROR:
      return {
        ...state,
        error: action.error,
        isLoading: false,
      };
    case EventListActionTypes.EVENTLIST_FILTER_CHANGE:
      return {
        ...state,
        filter: action.newFilter,
        shouldUpdate: action.shouldUpdate,
      };
    default:
      return state;
  }
}
