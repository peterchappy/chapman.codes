import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { About } from "./About";
import "./App.css";
import { BreakpointProvider } from "./BreakPoint";
import { MainCol } from "./constants";
import { GridItem, GridLayout } from "./Grid";
import { Repeat } from "./Grid/types";
import { Header } from "./Header";
import { Routes } from "./Routes";
import { Typography } from "./Typography";
import { HorizontalRule } from "./HorizontalRule";

function App() {
  return (
    <Router>
      <BreakpointProvider>
        <GridLayout cols={new Repeat(8)}>
          <Header />
          <GridItem col={MainCol}>
            <HorizontalRule />
          </GridItem>
          <GridItem col={MainCol}>
            <Switch>
              <Route path={Routes.ABOUT}>
                <About />
              </Route>
              <div style={{ padding: "0.25rem" }}>
                <Typography>
                  {
                    "This site is currently in progress. Feel Free to reach out to me "
                  }
                  <a href="mailto:petechapman@protonmail.com">here</a>
                </Typography>
              </div>
            </Switch>
          </GridItem>
        </GridLayout>
      </BreakpointProvider>
    </Router>
  );
}

export default App;
