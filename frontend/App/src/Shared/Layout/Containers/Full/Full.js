import CssBaseline from "@material-ui/core/CssBaseline";
import React from "react";
import { useStyles } from "./styles";

export default function FullContainer(props) {
  const classes = useStyles();
  return (
    <React.Fragment>
      <CssBaseline />
      <div className={classes.fullPage}>{props.children}</div>
    </React.Fragment>
  );
}
