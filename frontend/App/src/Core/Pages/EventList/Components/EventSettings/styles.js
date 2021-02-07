import { makeStyles } from "@material-ui/core";
import colors from "../../../../../Shared/Layout/Theme/colors";

export const useStyles = makeStyles((theme) => ({
  table : {
    display: 'flex',
    flex : 1,
  },
  tableHeader : {
    backgroundColor : colors.sMarketsDark3,
  },
  tableCell : {
    backgroundColor : colors.sMarketsDark2
  }
}));
