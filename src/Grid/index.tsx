import React from "react";
import {
  ResponsiveGridMapping,
  Repeat,
  getBP,
  ResponsiveGridValue,
} from "./types";
import "./index.css";
import { useBreakpoint } from "../BreakPoint";

type GridProps = {
  cols: Repeat;
  row?: Repeat;
};

//TODO: Rename To GridLayout
const GridLayout: React.FC<GridProps> = ({ cols, children }) => {
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
        gridTemplateColumns: cols.toString(),
      }}
    >
      {children}
    </div>
  );
};

type GridItemProps = {
  col: ResponsiveGridMapping;
  row?: ResponsiveGridMapping;
};

const joinSelectors = (mapping: ResponsiveGridValue): string =>
  Array.isArray(mapping) ? mapping.map(String).join(" / ") : mapping.toString();

const GridItem: React.FC<GridItemProps> = ({ children, col, row }) => {
  const bp = useBreakpoint();
  const bpSelector = getBP(bp);

  return (
    <div
      style={{
        position: "relative",
        gridColumn: joinSelectors(bpSelector(col)),
        gridRow: row && joinSelectors(bpSelector(row)),
      }}
    >
      {children}
    </div>
  );
};

export { GridLayout, GridItem };
