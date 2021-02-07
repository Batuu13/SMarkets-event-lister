import React from "react";
import {
  EventStateList,
  EventStatesEnum,
} from "../../Constants/eventState.enum";
import { EventTypeList } from "../../Constants/eventTypes.enum";
import { EventFilters } from "../../Constants/filters";
import { useStyles } from "./styles";
import { Grid, Typography } from "@material-ui/core";
import Dropdown from "../../../../../Shared/Components/Dropdown/Dropdown";
import PropTypes from "prop-types";

class _EventSettings extends React.PureComponent {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid
        className={classes.settingsPanel}
        container
        direction="column"
        alignItems="center"
      >
        <Typography variant={"h2"}>Event Settings</Typography>
        <Grid container spacing={2} direction="column">
          <Dropdown
            title="Event State"
            options={EventStateList}
            onChange={this.props.onEventFilterChange}
            filterKey={EventFilters.FILTER_EVENT_STATE}
            filters={this.props.eventFilter}
            defaultValue={EventStatesEnum.upcoming}
          />
          <Dropdown
            title="Event Type"
            options={EventTypeList}
            onChange={this.props.onEventFilterChange}
            filterKey={EventFilters.FILTER_EVENT_TYPE}
            filters={this.props.eventFilter}
          />
        </Grid>
      </Grid>
    );
  }
}
function EventSettings(props) {
  const classes = useStyles();
  return <_EventSettings classes={classes} {...props} />;
}
EventSettings.propTypes = {
  onEventFilterChange: PropTypes.func.isRequired,
  eventFilter: PropTypes.object.isRequired,
};
export default EventSettings;
