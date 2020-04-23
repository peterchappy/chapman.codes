import { GridSpan, ResponsiveGridValue, ResponsiveMapping } from "./Grid/types";

export const xsMainCol: [number, GridSpan] = [2, new GridSpan(6)];

export const MainCol: ResponsiveMapping<ResponsiveGridValue> = {
  xs: xsMainCol,
  md: [3, new GridSpan(4)],
};
