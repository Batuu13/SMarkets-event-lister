
import EventListPage from "../../Core/Pages/EventList/EventListPage";
import { URL_HOME } from "../Constants/routes";

export const routes = [
  {
    path: URL_HOME,
    view: EventListPage,
  },
  {
    path: "*",
    view: EventListPage,
  },
];
