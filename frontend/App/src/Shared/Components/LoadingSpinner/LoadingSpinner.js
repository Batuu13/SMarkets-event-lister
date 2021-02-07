import { Box, CircularProgress } from "@material-ui/core";
import React from "react";
import { useStyles } from "./styles";
const LoadingSpinner = React.forwardRef((props, ref) => {
  const classes = useStyles();
  return (
    <Box
      display="flex"
      flex="1"
      justifyContent="center"
      className={classes.spinner}
      ref={ref}
    >
      <CircularProgress color="secondary" />
    </Box>
  );
});

export default LoadingSpinner;
