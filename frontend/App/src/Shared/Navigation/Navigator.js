import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { routes } from "./routes";
import Header from "../Layout/Header/Header";
import FullContainer from "../Layout/Containers/Full/Full";
import { useStyles } from "./styles";

export default function Navigator() {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Router>
        <Header className={classes.header} />
        <Switch>
          {routes.map((route) => (
            <Route key={route.path} exact path={`/${route.path}`}>
              <FullContainer>
                <route.view />
              </FullContainer>
            </Route>
          ))}
        </Switch>
      </Router>
    </div>
  );
}
