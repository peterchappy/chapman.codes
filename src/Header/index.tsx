import React from 'react';
import { BreakPointUp } from '../BreakPoint';
import { GridItem } from '../Grid';
import { GridSpan } from '../Grid/types';
import { Typography } from '../Typography';
import { FlexLayout } from '../FlexLayout';

type HeaderProps = {

}

const Header: React.FC<HeaderProps> = () => {
    return (
        <>
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
        </>
    )
}

export { Header }