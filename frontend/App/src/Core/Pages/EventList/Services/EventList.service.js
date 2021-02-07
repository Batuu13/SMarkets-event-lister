import { callApi } from "../../../../Shared/Utils/ApiCaller";
import { EVENTLIST_STORE_NAME } from "../../../Store/reducers";
import { EVENTS_API } from "../Constants/api";
import { EventListActions } from "../Store/EventList.action";
import { filtersToParams } from "../../../../Shared/Utils/StringUtils";

export function LoadEvents(eventFilters) {
  return function (dispatch) {
    dispatch(EventListActions.LoadEvents());
    const params = filtersToParams(eventFilters);
    return callApi(`${EVENTS_API}?${params}`, "GET")
      .then((res) => {
       dispatch(EventListActions.LoadEventsSuccess(res));
      })
      .catch((e) => {
       dispatch(EventListActions.LoadEventsError(e));
      });
  };
}
export function LoadEventsWithPagination(paginationParams) {
  return function (dispatch) {
    return callApi(`${EVENTS_API}${paginationParams}`, "GET")
      .then((res) => {
        dispatch(EventListActions.LoadEventsSuccess(res,true));
      })
      .catch((e) => {
        dispatch(EventListActions.LoadEventsError(e));
      });
  };
}
export function ChangeEventFilters(filter, shouldUpdate = true) {
  return function (dispatch) {
    dispatch(EventListActions.ChangeEventFilter(filter, shouldUpdate));
  };
}
export function ChangeEventFilter(key, value, shouldUpdate = true) {
  return function (dispatch, getState) {
    const newEventFilter = Object.assign(
      {},
      getState()[EVENTLIST_STORE_NAME].filter
    );
    newEventFilter[key] = value;
    dispatch(EventListActions.ChangeEventFilter(newEventFilter, shouldUpdate));
  };
}
