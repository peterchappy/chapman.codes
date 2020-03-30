import React from "react";
import "./App.css";
import { BreakpointProvider } from "./BreakPoint";
import { GridLayout, GridItem } from "./Grid";
import {
  Repeat,
  GridSpan,
  ResponsiveMapping,
  ResponsiveGridValue,
} from "./Grid/types";
import { Typography } from "./Typography";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Header } from "./Header";
import { Routes } from "./Routes";

const MainCol: ResponsiveMapping<ResponsiveGridValue> = {
  xs: [2, new GridSpan(6)],
  md: [3, new GridSpan(4)],
};

function App() {
  return (
    <Router>
      <BreakpointProvider>
        <GridLayout cols={new Repeat(8)}>
          <Header />
          <GridItem col={MainCol} row={{ xs: 2 }}>
            <div
              style={{
                width: "100%",
                height: "2px",
                backgroundColor: "#333333",
              }}
            />
          </GridItem>
          <GridItem col={MainCol} row={{ xs: 3 }}>
            <Switch>
              <Route path={Routes.ABOUT}>
                <GridLayout cols="subgrid">{Routes.ABOUT}</GridLayout>
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
