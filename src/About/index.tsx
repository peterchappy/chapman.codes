import React from "react";
import { GridLayout, GridItem } from "../Grid";
import { Typography } from "../Typography";

type AboutProps = {};

const About: React.FC<AboutProps> = () => {
  return (
    <GridLayout cols="subgrid">
      <GridItem col={{ xs: [1, -1] }}>
        <Typography variant="h6">Hi, I'm Peter Chapman</Typography>
      </GridItem>
    </GridLayout>
  );
};

export { About };
