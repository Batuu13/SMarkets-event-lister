import { makeStyles } from "@material-ui/core/styles";
export const HEADER_HEIGHT = 64;
export const useStyles = makeStyles((theme) => ({
  root: {
    height : '100vh',
    maxHeight : '100vh',
  },
  header : {
    height : HEADER_HEIGHT,
  }
}));
