import React from 'react';
import { ResponsiveGridMapping, Repeat, getBP } from './types'
import  './index.css'
import { useBreakpoint } from '../BreakPoint';

type GridProps = {
    cols: Repeat;
    row?: Repeat;
}

const Grid: React.FC<GridProps> = ({ cols, children }) => {
    const bp = useBreakpoint();
    const bpSelector = getBP(bp);
    console.log(bp)
    return <div className="gridRoot" style={{
        display: 'grid',
        gridGap: '1rem',
        height: "100%",
        width: "100%",
        margin: "0 auto",
        gridAutoRows: "min-content",
        position: "relative",
        gridTemplateColumns: cols.toString(),
    }}>{children}</div>;
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