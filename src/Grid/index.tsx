import React from 'react';
import { ResponsiveGridMapping, Repeat } from './types'
import  './index.css'
import { useBreakpoint } from '../BreakPoint';

type GridProps = {
    cols?: Repeat;
    row?: Repeat;
}

const Grid: React.FC<GridProps> = ({ children }) => {
    const bp = useBreakpoint();
    console.log(bp)
    return <div className="gridRoot">{children}</div>;
}

type GridItemProps = {
    col: ResponsiveGridMapping,
    row: ResponsiveGridMapping
}

const GridItem: React.FC<GridItemProps> = ({children}) => {
    return <div>{children}</div>;
}

export {
    Grid, 
    GridItem
}