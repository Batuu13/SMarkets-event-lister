import { EventFilters } from "../Constants/filters";

export const MOCK_EVENTLIST_RESPONSE = {
  events: [
    {
      bet_allowed: true,
      bettable: true,
      chart_time_period: "3w,2w*,1w",
      created: "2017-12-16T00:16:25.936519Z",
      description: "1 mile 7 furlongs 152 yards National Hunt",
      display_order: 100,
      end_date: "2017-12-21T10:58:09.279148Z",
      full_slug: "/sport/horse-racing/ascot/2017/12/22/15:40",
      hidden: true,
      id: "565413",
      inplay_enabled: true,
      modified: "2017-12-21T10:58:09.279148Z",
      name: "15:40",
      parent_id: "565413",
      seo_description: "1 mile 7 furlongs 152 yards National Hunt",
      short_name: "15:40 @ Ascot",
      slug: "ascot-2017-12-22T00:00:00-15-40",
      special_rules: "Additional contracts may be added",
      start_date: "2017-12-21T10:58:09.279148Z",
      start_datetime: "2017-12-21T10:58:09.279148Z",
      state: "new",
    },
  ],
  pagination: {
    next_page: "?limit=20&sort=id&pagination_last_id=20",
  },
};
export const MOCK_EVENTLIST_RESPONSE_ERROR = {
  status: 500,
  title: "Something went wrong",
};
export const MOCK_EVENTLIST_FILTER = {
  key: EventFilters.FILTER_EVENT_TYPE,
  value: "test",
};

export const MOCK_EVENTLIST_FILTERS = {
  [EventFilters.FILTER_EVENT_TYPE]: "test",
  [EventFilters.FILTER_EVENT_STATE]: "test2",
};
