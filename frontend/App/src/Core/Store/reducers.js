import { combineReducers } from "redux";
import EventListReducer from "../Pages/EventList/Store/EventList.reducer";

export const EVENTLIST_STORE_NAME = "eventlist";

const allReducers = combineReducers({
  [EVENTLIST_STORE_NAME]: EventListReducer,
});
export default allReducers;
