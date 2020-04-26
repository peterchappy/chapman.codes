import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AboutPage } from "./About";
import { PostPage } from "./Posts";
import { FullPost } from "./Posts/FullPost";
import { ProjectsPage } from "./Projects";
import "./App.css";
import { BreakpointProvider } from "./BreakPoint";
import { MainCol, TOTAL_GRID_COLS } from "./constants";
import { GridItem, GridLayout } from "./Grid";
import { Repeat } from "./Grid/types";
import { Header } from "./Header";
import { Routes } from "./Routes";
import { HorizontalRule } from "./HorizontalRule";

function App() {
  return (
    <Router>
      <BreakpointProvider>
        <GridLayout cols={new Repeat(TOTAL_GRID_COLS)}>
          <Header />
          <GridItem col={MainCol}>
            <HorizontalRule />
          </GridItem>
          <GridItem style={{ marginBottom: "5rem" }} col={MainCol}>
            <Switch>
              <Route
                exact
                path={["/", Routes.ABOUT]}
                render={() => <AboutPage />}
              />
              <Route exact path={Routes.POSTS} render={() => <PostPage />} />
              <Route
                exact
                path={Routes.PROJECTS}
                render={() => <ProjectsPage />}
              />
              <Route path={Routes.FULL_POST} render={() => <FullPost />} />
            </Switch>
          </GridItem>
        </GridLayout>
      </BreakpointProvider>
    </Router>
  );
}

export default App;
