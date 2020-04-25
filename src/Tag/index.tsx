import React from "react";
import { Typography } from "../Typography";

type TagProps = {
  label: string;
};

export enum TagKind {
  REACT = "React",
  TYPESCRIPT = "Typescript",
  MISC_PROGRAMMING = "Misc Programming",
}

export const Tag: React.FC<TagProps> = ({ label }) => (
  <div
    style={{
      margin: "0 0.25rem 0.5rem 0",
      backgroundColor: "#948C7E",
      padding: "0.25rem .5rem",
    }}
  >
    <Typography style={{ color: "#fff" }}>{label}</Typography>
  </div>
);
