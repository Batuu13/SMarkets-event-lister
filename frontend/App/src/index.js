import { ThemeProvider } from "@material-ui/core";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./Core/Store/config";
import "./index.css";
import theme from "./Shared/Layout/Theme/theme";
import Navigator from "./Shared/Navigation/Navigator";

const store = configureStore();

ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Navigator />
      </ThemeProvider>
    </Provider>,
  document.getElementById("root")
);
