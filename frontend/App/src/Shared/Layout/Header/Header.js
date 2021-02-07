import React from "react";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useStyles } from "./styles";
import { withStyles } from "@material-ui/core";
class Header extends React.Component {
  render() {
    const { classes } = this.props;
    
    return (
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            SMarkets Event Lister
          </Typography>
        </Toolbar>
      </AppBar>
    );
  }
}
export default withStyles(useStyles)(Header)