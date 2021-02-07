import { makeStyles } from "@material-ui/core";
import colors from "../../../Shared/Layout/Theme/colors";

export const useStyles = makeStyles((theme) => ({
  settingsPanelWrapper: {
    display: "flex",
    flex: 1,
    backgroundColor: theme.palette.primary.light,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 10,
    paddingBottom: 20,
    borderRightWidth: 2,
    borderRightColor: colors.sMarketsDark3,
    borderRightStyle: "solid",
    position: "relative",
  },
  emptyResult: {
    padding: 20,
  },
  eventsPanel: {
    backgroundColor: colors.black,
    display: "flex",
    flex: 1,
    height: `100%`,
  },
}));
