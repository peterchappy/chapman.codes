import React from "react";
import { GridLayout, GridItem } from "Grid";
import { Typography } from "Typography";
import { projects } from "./project";
import { GridSpan } from "Grid/types";
import { FlexLayout } from "FlexLayout";
import { Tag } from "Tag";
import { Link } from "Link";

type ProjectPageProps = {};

export const ProjectsPage: React.FC<ProjectPageProps> = () => {
  return (
    <GridLayout cols="subgrid">
      {projects.map(({ title, description, tags, link }) => (
        <GridItem key={title} col={{ xs: [1, -1], md: [1, new GridSpan(5)] }}>
          <FlexLayout flexDirection="column" justifyContent="flex-start">
            <Link
              style={{ margin: "0 0 0.5rem 0" }}
              typographyProps={{ variant: "h5" }}
              to={link}
              label={title}
              external
            />
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
