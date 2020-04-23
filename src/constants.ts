import { GridSpan, ResponsiveGridValue, ResponsiveMapping } from "./Grid/types";

export const TOTAL_GRID_COLS = 16;

export const xsMainCol: [number, GridSpan] = [2, new GridSpan(14)];

export const MainCol: ResponsiveMapping<ResponsiveGridValue> = {
  xs: xsMainCol,
  md: [3, new GridSpan(4)],
};
