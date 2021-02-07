import { Box, Grid, Typography } from "@material-ui/core";
import React from "react";
import { connect } from "react-redux";
import { useHistory, useLocation } from "react-router-dom";
import { bindActionCreators } from "redux";
import LoadingSpinner from "../../../Shared/Components/LoadingSpinner/LoadingSpinner";
import { URL_HOME } from "../../../Shared/Constants/routes";
import {
  filtersToParams,
  paramsToFilter,
} from "../../../Shared/Utils/StringUtils";
import { EVENTLIST_STORE_NAME } from "../../Store/reducers";
import EventList from "./Components/EventList/EventList";
import EventSettings from "./Components/EventSettings/EventSettings";
import {
  ChangeEventFilter,
  ChangeEventFilters,
  LoadEvents,
  LoadEventsWithPagination,
} from "./Services/EventList.service";
import Alert from "@material-ui/lab/Alert";
import { useStyles } from "./styles";
class _EventListPage extends React.Component {
  constructor(props) {
    super(props);

    this.onEventFilterChange = this.onEventFilterChange.bind(this);
  }
  componentDidMount() {
    if (this.props.query) {
      const filter = paramsToFilter(this.props.query);
      this.props.ChangeEventFilters(filter);
    }
  }

  componentDidUpdate(prevProps) {
    if (
      prevProps.eventFilter !== this.props.eventFilter &&
      this.props.shouldUpdate
    ) {
      this.props.LoadEvents(this.props.eventFilter);

      this.props.history.replace({
        pathname: URL_HOME,
        search: filtersToParams(this.props.eventFilter),
      });
    }
  }
  onEventFilterChange(key, value, shouldUpdate = true) {
    this.props.ChangeEventFilter(key, value, shouldUpdate);
  }
  renderEventList() {
    const { classes } = this.props;
    if (this.props.isLoading) {
      return <LoadingSpinner />;
    }
    if (this.props.error) {
      return (
        <Grid container className={classes.emptyResult} justify="center">
          <Grid item>
            <Alert severity="error">{`Error! ${this.props.error.status}`}</Alert>
          </Grid>
        </Grid>
      );
    }
    if (this.props.events.length === 0) {
      return (
        <Grid container className={classes.emptyResult} justify="center">
          <Typography variant="body1">
            There are no events with these settings.
          </Typography>
        </Grid>
      );
    }
    return (
      <EventList
        data={this.props.events}
        pagination={this.props.pagination}
        onLoadMore={this.props.LoadEventsWithPagination}
      />
    );
  }
  render() {
    const { classes } = this.props;

    return (
      <Box display="flex" flex={1}>
        <Grid container spacing={0} direction="row">
          <Grid item className={classes.settingsPanelWrapper} xs={12} md={3}>
            <EventSettings
              onEventFilterChange={this.onEventFilterChange}
              eventFilter={this.props.eventFilter}
            />
          </Grid>
          <Grid item className={classes.eventsPanel} xs={12} md={9}>
            {this.renderEventList()}
          </Grid>
        </Grid>
      </Box>
    );
  }
}
function mapStateToProps(state) {
  return {
    events: state[EVENTLIST_STORE_NAME].events,
    eventFilter: state[EVENTLIST_STORE_NAME].filter,
    shouldUpdate: state[EVENTLIST_STORE_NAME].shouldUpdate,
    pagination: state[EVENTLIST_STORE_NAME].pagination,
    isLoading: state[EVENTLIST_STORE_NAME].isLoading,
    error: state[EVENTLIST_STORE_NAME].error,
  };
}
function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      LoadEvents,
      ChangeEventFilter,
      ChangeEventFilters,
      LoadEventsWithPagination,
    },
    dispatch
  );
}
function EventListPage(props) {
  const classes = useStyles();
  const query = useLocation().search;
  const history = useHistory();
  return (
    <_EventListPage
      classes={classes}
      query={query}
      history={history}
      {...props}
    />
  );
}
export default connect(mapStateToProps, matchDispatchToProps)(EventListPage);
