import React from "react";
import {
  ResponsiveGridMapping,
  Repeat,
  getBP,
  ResponsiveGridValue,
} from "./types";
import "./index.css";
import { useBreakpoint } from "BreakPoint";

//TODO: Better default for Context.
const SubGridContext: React.Context<ResponsiveGridValue> = React.createContext(
  -1 as ResponsiveGridValue
);
const useSubGrid = () => {
  const context = React.useContext(SubGridContext);
  // if(context === {}) {
  //     throw new Error('useBreakpoint must be used within BreakpointProvider');
  // }
  return context;
};

type GridProps = {
  cols: Repeat | "subgrid";
  row?: Repeat;
};

const getColSpan = (val: ResponsiveGridValue) =>
  typeof val === "number"
    ? new Repeat(1)
    : Array.isArray(val)
    ? new Repeat(typeof val[1] === "number" ? val[1] : val[1].value)
    : new Repeat(val.value);

//TODO: Rename To GridLayout
const GridLayout: React.FC<GridProps> = ({ cols, children }) => {
  const gridValues = useSubGrid();
  const gridTemplateColumns =
    cols === "subgrid" ? getColSpan(gridValues).toString() : cols.toString();

  return (
    <div
      className="gridRoot"
      style={{
        display: "grid",
        gridGap: "1rem",
        height: "100%",
        width: "100%",
        margin: "0 auto",
        gridAutoRows: "min-content",
        position: "relative",
        gridTemplateColumns,
      }}
    >
      {children}
    </div>
  );
};

type GridItemProps = {
  col: ResponsiveGridMapping;
  row?: ResponsiveGridMapping;
  style?: React.CSSProperties;
};

const joinSelectors = (mapping: ResponsiveGridValue): string =>
  Array.isArray(mapping) ? mapping.map(String).join(" / ") : mapping.toString();

const GridItem: React.FC<GridItemProps> = ({
  children,
  col,
  row,
  style = {},
}) => {
  const bp = useBreakpoint();
  const bpSelector = getBP(bp);
  const gridColumn: ResponsiveGridValue = bpSelector(col);

  return (
    <div
      style={{
        position: "relative",
        gridColumn: joinSelectors(gridColumn),
        gridRow: row && joinSelectors(bpSelector(row)),
        ...style,
      }}
    >
      <SubGridContext.Provider value={gridColumn}>
        {children}
      </SubGridContext.Provider>
    </div>
  );
};

export { GridLayout, GridItem };
