import { GridSpan, ResponsiveGridValue, ResponsiveMapping } from "./Grid/types";

export const TOTAL_GRID_COLS = 16;

export const xsMainCol: [number, GridSpan] = [2, new GridSpan(14)];
export const smMailCol: [number, GridSpan] = [3, new GridSpan(12)];
export const mdMailCol: [number, GridSpan] = [7, new GridSpan(5)];

export const MainCol: ResponsiveMapping<ResponsiveGridValue> = {
  xs: xsMainCol,
  sm: smMailCol,
  md: mdMailCol,
};
