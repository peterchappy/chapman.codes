import React from "react";
import { Link as RRLink } from "react-router-dom";
import { Typography, TypographyProps } from "Typography";

const LINK_STYLE = {
  textDecoration: "none",
  color: "#000",
  paddingRight: "0.25rem",
};
const ACTIVE_LINK_STYLE = { borderRight: "2px solid #333333" };

type LinkProps = {
  external?: boolean;
  to: string;
  label: React.ReactNode;
  typographyProps?: Partial<TypographyProps>;
  style?: React.CSSProperties;
  active?: boolean;
};

export const Link: React.FC<LinkProps> = ({
  external = false,
  to,
  label,
  typographyProps,
  style = {},
  active = false,
}) => {
  const defaultStyles = {
    ...LINK_STYLE,
    ...(active ? ACTIVE_LINK_STYLE : {}),
  };

  return external ? (
    <a
      style={{ ...defaultStyles, ...style }}
      href={to}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Typography {...typographyProps}>{label}</Typography>
    </a>
  ) : (
    <RRLink style={{ ...defaultStyles, ...style }} to={to}>
      <Typography {...typographyProps}>{label}</Typography>
    </RRLink>
  );
};
