import { makeStyles } from "@material-ui/core/styles";
import { HEADER_HEIGHT } from "../../../Navigation/styles";

export const useStyles = makeStyles((theme) => ({
  fullPage: {
    height: `calc(100% - ${HEADER_HEIGHT}px)`,
    minHeight: `calc(100% - ${HEADER_HEIGHT}px)`,
    display: 'flex',
  },
}));
