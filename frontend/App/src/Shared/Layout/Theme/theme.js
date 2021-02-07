import { createMuiTheme } from "@material-ui/core";
import colors from "./colors";

const theme = createMuiTheme({
  palette: {
    type: "dark",
    primary: {
      main: colors.sMarketsDark,
      light:  colors.sMarketsDark2,
    },
    secondary: {
      main: colors.accent,
    },
  },
  typography: {
    fontSize: 14,
    color: colors.white,
    h1: {
      color : colors.accent,
      fontWeight: "bold",
      fontSize: 24,
      lineHeight: 1.5,
    },
    h2: {
      color : colors.accent,
      fontSize: 18,
      lineHeight: 1,
      marginBottom: 10,
      marginTop: 10,
    },
  },
});
export default theme;
