import React from "react";

type VariantKind = "p" | "h6" | "h5" | "h4" | "h3" | "h2" | "h1" | "small";

type FontOptionsProps = {
  fontSize: string;
  letterSpacing?: string;
  fontFamily: string;
  fontWeight: number;
  lineHeight?: number;
  margin?: string;
  color?: string;
};

// TODO: Memoization Function with this being defaults
// TODO: REM CLASS
const DEFAULT_THEME: Record<VariantKind, FontOptionsProps> = {
  small: {
    fontSize: "0.5rem",
    fontFamily: "'Roboto Mono', monospace",
    fontWeight: 400,
  },
  p: {
    fontSize: "0.75rem",
    fontFamily: "'Roboto Mono', monospace",
    fontWeight: 400,
  },
  h6: {
    fontSize: "1rem",
    fontFamily: "'Roboto Mono', monospace",
    fontWeight: 400,
  },
  h5: {
    fontSize: "1.25rem",
    fontFamily: "'Roboto Mono', monospace",
    fontWeight: 500,
    letterSpacing: "-0.108rem",
  },
  h4: {
    fontSize: "1.5rem",
    fontFamily: "'Roboto Mono', monospace",
    fontWeight: 500,
    letterSpacing: "-0.19rem",
  },
  h3: {
    fontSize: "2rem",
    fontFamily: "'Roboto Mono', monospace",
    fontWeight: 500,
    letterSpacing: "-0.19rem",
  },
  h2: {
    fontSize: "2.25rem",
    fontFamily: "'Roboto Mono', monospace",
    fontWeight: 500,
    letterSpacing: "-0.19rem",
  },
  h1: {
    fontSize: "2.5rem",
    fontFamily: "'Roboto Mono', monospace",
    fontWeight: 700,
    color: "#948C7E",
    letterSpacing: "-0.19rem",
  },
};

export type TypographyProps = {
  variant?: VariantKind;
  style?: Partial<FontOptionsProps>;
};

const Typography: React.FC<TypographyProps> = ({
  variant = "p",
  style,
  ...rest
}) => {
  return React.createElement(variant, {
    style: { margin: 0, ...DEFAULT_THEME[variant], ...style },
    ...rest,
  });
};

export { Typography };
