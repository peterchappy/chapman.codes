import React from "react";
import { Link as RRLink } from "react-router-dom";
import { Typography, TypographyProps } from "Typography";

const LINK_STYLE = { textDecoration: "none", color: "#000" };

type LinkProps = {
  external?: boolean;
  to: string;
  label: React.ReactNode;
  typographyProps?: Partial<TypographyProps>;
  style?: React.CSSProperties;
};

export const Link: React.FC<LinkProps> = ({
  external = false,
  to,
  label,
  typographyProps,
  style = {},
}) => {
  return external ? (
    <a
      style={{ ...LINK_STYLE, ...style }}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Typography {...typographyProps}>{label}</Typography>
    </a>
  ) : (
    <RRLink style={{ ...LINK_STYLE, ...style }} to={to}>
      <Typography {...typographyProps}>{label}</Typography>
    </RRLink>
  );
};
