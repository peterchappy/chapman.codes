import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BreakpointProvider } from './BreakPoint';
import { Grid, GridItem } from './Grid';
import { Repeat, GridSpan } from './Grid/types';
import { Typography } from './Typography';

function App() {
  return (
    <BreakpointProvider>
      <Grid cols={new Repeat(8)}>
        <GridItem col={{ xs: new GridSpan(8), md: [3, new GridSpan(4)]}}>
          <Typography variant='h1'>chapman.codes</Typography>
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                Edit <code>src/App.tsx</code> and save to reload.
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
            </header>
          </div>
        </GridItem>
      </Grid>
    </BreakpointProvider>
  );
}

export default App;
