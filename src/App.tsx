import React from 'react';
import './App.css';
import { BreakpointProvider } from './BreakPoint';
import { GridLayout, GridItem } from './Grid';
import { Repeat, GridSpan } from './Grid/types';
import { Typography } from './Typography';
import { FlexLayout } from './FlexLayout';

function App() {
  return (
    <BreakpointProvider>
      <GridLayout cols={new Repeat(8)}>
        <GridItem col={{ xs: [1, new GridSpan(7)], md: [3, new GridSpan(3)]}} row={{ xs: 1 }}>
          <Typography variant='h1'>chapman.codes</Typography>
          <Typography variant='h5'>My little piece of the internet.</Typography>
        </GridItem>
        <GridItem col={{ xs: [7, new GridSpan(2)], md: [6, new GridSpan(1)] }} row={{ xs: 1 }}>
          <FlexLayout flexDirection='column' alignItems='flex-end' justifyContent='center'>
            {['About', "Blog", "Projects", "Contact"].map(val => <div><Typography variant='h6' key={val}>{val}</Typography></div>)}
          </FlexLayout>
        </GridItem>
        <GridItem col={{ xs: [1, new GridSpan(7)], md: [3, new GridSpan(3)] }} row={{ xs: 2 }}>
          <Typography>{"This site is currently in progress. Feel Free to reach out to me "}<a href="mailto:petechapman@protonmail.com">here</a></Typography>
        </GridItem>
      </GridLayout>
    </BreakpointProvider>
  );
}

export default App;
