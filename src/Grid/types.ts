import { Functor } from "../Functor";

export class GridCSSItem {}

export class GridSpan extends GridCSSItem {
  value: number;

  constructor(x: number) {
    super();
    this.value = x;
  }

  toString() {
    return `span ${this.value}`;
  }
}

export class FR extends GridCSSItem {
  value: number;

  constructor(x: number) {
    super();
    this.value = x;
  }

  toString() {
    return `${this.value}fr`;
  }
}

export class Repeat extends GridCSSItem {
  x: number;
  y: number;

  constructor(x: number, y: number = 1) {
    super();
    this.x = x;
    this.y = y;
  }

  // TODO: Support more than fr
  toString() {
    return `repeat(${this.x}, minmax(0px, ${this.y}fr))`;
  }
}

export type ResponsiveGridValue =
  | GridSpan
  | [number, number | GridSpan]
  | number;

export type ResponsiveMapping<T> = {
  xs: T;
  sm?: T;
  md?: T;
  lg?: T;
  xl?: T;
};

const RESPONSIVE_SIZES: Array<keyof ResponsiveMapping<{}>> = [
  "xs",
  "sm",
  "md",
  "lg",
  "xl",
];

const safeKeys = <T extends {}>(x: T) => Object.keys(x) as Array<keyof T>;

// TODO: Better type saftey on bp and context
// TODO: Test Coverage
// TODO: Utils
export const getBP = (bp: string) => <T>(rm: ResponsiveMapping<T>) => {
  const _bp = bp as keyof ResponsiveMapping<{}>;
  const activeSizes: Array<keyof ResponsiveMapping<{}>> =
    RESPONSIVE_SIZES.indexOf(_bp) > -1
      ? RESPONSIVE_SIZES.slice(0, RESPONSIVE_SIZES.indexOf(_bp) + 1)
      : ["xs"];

  const active = activeSizes
    .map((size) => rm[size])
    .filter((val) => val !== undefined);
  return active[active.length - 1] || rm["xs"];
};

export class ResponsiveMappingFunctor<T> implements Functor<T> {
  value: ResponsiveMapping<T>;

  constructor(x: ResponsiveMapping<T>) {
    this.value = x;
  }

  map<U>(f: (x: T) => U): ResponsiveMappingFunctor<U> {
    const keys = safeKeys(this.value);
    const newValue = keys.reduce((acc, key) => {
      const x = this.value[key];
      return x !== undefined ? { ...acc, [key]: f(x) } : acc;
    }, {} as ResponsiveMapping<U>);
    return new ResponsiveMappingFunctor(newValue);
  }
}

export type ResponsiveGridMapping = ResponsiveMapping<ResponsiveGridValue>;
