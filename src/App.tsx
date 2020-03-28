import React from 'react';
import './App.css';
import { BreakpointProvider } from './BreakPoint';
import { Grid, GridItem } from './Grid';
import { Repeat, GridSpan } from './Grid/types';
import { Typography } from './Typography';
import { FlexLayout } from './FlexLayout';

function App() {
  return (
    <BreakpointProvider>
      <Grid cols={new Repeat(8)}>
        <GridItem col={{ xs: [1, new GridSpan(7)], md: [3, new GridSpan(3)]}} row={{ xs: 1 }}>
          <Typography variant='h1'>chapman.codes</Typography>
          <Typography variant='h6'>My little piece of the internet.</Typography>
        </GridItem>
        <GridItem col={{ xs: [7, new GridSpan(1)], md: [6, new GridSpan(1)] }} row={{ xs: 1 }}>
          <FlexLayout flexDirection='column'>
            {['About', "Blog", "Projects", "Contact"].map(val => <Typography key={val}>{val}</Typography>)}
          </FlexLayout>
        </GridItem>
      </Grid>
    </BreakpointProvider>
  );
}

export default App;
