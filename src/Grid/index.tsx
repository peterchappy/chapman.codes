import React from 'react';
import { ResponsiveGridMapping, Repeat } from './types'

type GridProps = {
    cols: Repeat;
    row?: Repeat;
}

const Grid: React.FC<GridProps> = () => {
    return null;
}

type GridItemProps = {
    col: ResponsiveGridMapping,
    row: ResponsiveGridMapping
}

const GridItem: React.FC<GridItemProps> = () => {
    return null;
}

export {
    Grid, 
    GridItem
}