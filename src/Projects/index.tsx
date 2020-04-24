import React from "react";
import { GridLayout, GridItem } from "../Grid";
import { Typography } from "../Typography";
import { projects } from "./project";
import { GridSpan } from "../Grid/types";
import { FlexLayout } from "../FlexLayout";
import { Tag } from "../Tag";

type ProjectPageProps = {};

export const ProjectsPage: React.FC<ProjectPageProps> = () => {
  return (
    <GridLayout cols="subgrid">
      {projects.map(({ title, description, tags }) => (
        <GridItem key={title} col={{ xs: [1, -1], md: [1, new GridSpan(5)] }}>
          <FlexLayout flexDirection="column" justifyContent="flex-start">
            <Typography
              style={{ color: "#948C7E", margin: "0 0 0.5rem 0" }}
              variant="h6"
            >
              {title}
            </Typography>
            <Typography style={{ margin: "0 0 0.5rem 0" }}>
              {description}
            </Typography>
            <FlexLayout>
              {tags.map((tag) => (
                <Tag key={tag} label={tag} />
              ))}
            </FlexLayout>
          </FlexLayout>
        </GridItem>
      ))}
    </GridLayout>
  );
};
