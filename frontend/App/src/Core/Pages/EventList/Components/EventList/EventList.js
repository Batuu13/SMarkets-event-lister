import { Grid } from "@material-ui/core";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import React from "react";
import LoadingSpinner from "../../../../../Shared/Components/LoadingSpinner/LoadingSpinner";
import { boolToString } from "../../../../../Shared/Utils/StringUtils";
import { useStyles } from "./styles";
import PropTypes from "prop-types";

class _EventList extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      prevY: 0,
    };
    this.renderLoading = this.renderLoading.bind(this);
    this.handleLoadingRef = this.handleLoadingRef.bind(this);
    this.loadingRef = React.createRef();
  }
  componentDidMount() {
    this.handleLoadingRef();
  }
  handleLoadingRef() {
    if (this.loadingRef === null || this.loadingRef.current === null) {
      return;
    }
    var options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.8,
    };

    this.observer = new IntersectionObserver(
      this.handleObserver.bind(this),
      options
    );
    this.observer.observe(this.loadingRef);
  }
  handleObserver(entities, observer) {
    const y = entities[0].boundingClientRect.y;
    if (this.state.prevY > y && this.props.pagination.next_page) {
      this.props.onLoadMore(this.props.pagination.next_page, true);
    }
    this.setState({ prevY: y });
  }
  renderLoading() {
    return (
      this.props.pagination &&
      this.props.pagination.next_page && (
        <LoadingSpinner ref={(ref) => (this.loadingRef = ref)} />
      )
    );
  }
  render() {
    const { classes } = this.props;
    return (
      <Grid container direction="column">
        <TableContainer className={classes.table} component={Paper}>
          <Table stickyHeader>
            <TableHead className={classes.tableHeader}>
              <TableRow>
                <TableCell>ID</TableCell>
                <TableCell>Name</TableCell>
                <TableCell>Start Date</TableCell>
                <TableCell>Bet Allowed?</TableCell>
                <TableCell>Bettable?</TableCell>
                <TableCell>In Play Enabled?</TableCell>
              </TableRow>
            </TableHead>
            <TableBody className={classes.tableCell}>
              {this.props.data.map((row) => (
                <TableRow key={row.name}>
                  <TableCell>{row.id}</TableCell>
                  <TableCell>{row.name}</TableCell>
                  <TableCell>
                    {new Date(row.start_datetime).toUTCString()}
                  </TableCell>
                  <TableCell>{boolToString(row.bet_allowed)}</TableCell>
                  <TableCell>{boolToString(row.bettable)}</TableCell>
                  <TableCell>{boolToString(row.isplay_enabled)}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
          {this.renderLoading()}
        </TableContainer>
      </Grid>
    );
  }
}
function EventList(props) {
  const classes = useStyles();
  return <_EventList classes={classes} {...props} />;
}
EventList.propTypes = {
  data: PropTypes.array.isRequired,
  onLoadMore: PropTypes.func.isRequired,
  pagination: PropTypes.shape({
    next_page: PropTypes.string,
  }).isRequired,
};

export default EventList;
