import React from 'react';
import { ResponsiveGridMapping, Repeat } from './types'
import styles from './index.css'
import classnames from 'classnames'

type GridProps = {
    cols: Repeat;
    row?: Repeat;
}

const Grid: React.FC<GridProps> = ({children}) => {
    return <div className={classnames(styles.gridRoot)}>{children}</div>;
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