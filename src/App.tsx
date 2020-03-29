import React from 'react';
import './App.css';
import { BreakpointProvider, BreakPointUp } from './BreakPoint';
import { GridLayout, GridItem } from './Grid';
import { Repeat, GridSpan, ResponsiveMapping, ResponsiveGridValue } from './Grid/types';
import { Typography } from './Typography';
import { FlexLayout } from './FlexLayout';

const MainCol: ResponsiveMapping<ResponsiveGridValue> = { xs: [2, new GridSpan(6)], md: [3, new GridSpan(4)]};

function App() {
  return (
    <BreakpointProvider>
      <GridLayout cols={new Repeat(8)}>
        <GridItem col={{ xs: [2, new GridSpan(5)], md: [3, new GridSpan(3)]}} row={{ xs: 1 }}>
          <Typography variant='h1'>chapman.codes</Typography>
          <Typography variant='h5'>My little piece of the internet.</Typography>
        </GridItem>
        <GridItem col={{ xs: [7, new GridSpan(1)], md: [6, new GridSpan(1)]}} row={{ xs: 1 }}>
          <BreakPointUp 
            xs={() => null} 
            sm={() => (
              <FlexLayout flexDirection='column' alignItems='flex-end' justifyContent='center'>
                {['About', "Blog", "Projects", "Contact"].map(val => 
                  <div>
                    <Typography variant='h6' key={val}>{val.toUpperCase()}</Typography>
                  </div>
                )}
              </FlexLayout>
            )}
          />
        </GridItem>
        {/* 333333 */}
        <GridItem col={MainCol} row={{ xs: 2 }}>
          <div style={{
              width: "100%",
              height: "2px",
              backgroundColor: "#333333"
            }} 
          />
        </GridItem>
        <GridItem col={MainCol} row={{ xs: 3 }}>
          <div style={{ padding: '0.25rem'}}>
            <Typography>
              {"This site is currently in progress. Feel Free to reach out to me "}
              <a href="mailto:petechapman@protonmail.com">here</a>
            </Typography>
          </div>
        </GridItem>
      </GridLayout>
    </BreakpointProvider>
  );
}

export default App;
