export const EventListActionTypes = {
  EVENTLIST_LOAD: "EVENTLIST_LOAD",
  EVENTLIST_LOAD_SUCCESS: "EVENTLIST_LOAD_SUCCESS",
  EVENTLIST_LOAD_ERROR: "EVENTLIST_LOAD_ERROR",
  EVENTLIST_FILTER_CHANGE: "EVENTLIST_FILTER_CHANGE",
};

function LoadEvents() {
  return {
    type: EventListActionTypes.EVENTLIST_LOAD,
  };
}

function LoadEventsSuccess(eventResponse, shouldExtend = false) {
  return {
    type: EventListActionTypes.EVENTLIST_LOAD_SUCCESS,
    eventResponse,
    shouldExtend,
  };
}

function LoadEventsError(error) {
  return {
    type: EventListActionTypes.EVENTLIST_LOAD_ERROR,
    error,
  };
}

function ChangeEventFilter(newFilter, shouldUpdate) {
  return {
    type: EventListActionTypes.EVENTLIST_FILTER_CHANGE,
    newFilter,
    shouldUpdate,
  };
}
export const EventListActions = {
  LoadEvents,
  LoadEventsSuccess,
  LoadEventsError,
  ChangeEventFilter,
};
