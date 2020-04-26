import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { AboutPage } from "About";
import { PostListPage } from "PostsListPage";
import { FullPost } from "PostsListPage/FullPostPage";
import { ProjectsPage } from "Projects";
import { BreakpointProvider } from "BreakPoint";
import { MainCol, TOTAL_GRID_COLS } from "utils/constants";
import { GridItem, GridLayout } from "Grid";
import { Repeat } from "Grid/types";
import { Header } from "Header";
import { Routes } from "utils/Routes";
import { HorizontalRule } from "HorizontalRule";

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
            <main>
              <Switch>
                <Route
                  exact
                  path={["/", Routes.ABOUT]}
                  render={() => <AboutPage />}
                />
                <Route
                  exact
                  path={Routes.POSTS}
                  render={() => <PostListPage />}
                />
                <Route
                  exact
                  path={Routes.PROJECTS}
                  render={() => <ProjectsPage />}
                />
                <Route path={Routes.FULL_POST} render={() => <FullPost />} />
              </Switch>
            </main>
          </GridItem>
        </GridLayout>
      </BreakpointProvider>
    </Router>
  );
}

export default App;
