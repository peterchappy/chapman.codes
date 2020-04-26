import React from "react";
import { GridLayout, GridItem } from "Grid";
import { Typography } from "Typography";
import { Posts, getPreview, toSlug } from "./posts";
import { GridSpan } from "Grid/types";
import { FlexLayout } from "FlexLayout";
import { Tag } from "Tag";
import { Link } from "Link";

type PostPageProps = {};

export const PostPage: React.FC<PostPageProps> = () => {
  return (
    <GridLayout cols="subgrid">
      {Posts.map(({ title, date, tags, content }) => {
        const preview = getPreview(content[0]);
        return (
          <GridItem key={title} col={{ xs: [1, -1], md: [1, new GridSpan(5)] }}>
            <FlexLayout flexDirection="column" justifyContent="flex-start">
              <Link
                typographyProps={{
                  variant: "h4",
                  style: { margin: "0 0 0.25rem 0" },
                }}
                to={`posts/${toSlug(title)}`}
                label={title}
              />
              <Typography variant="small" style={{ margin: "0 0 0.75rem 0" }}>
                {date}
              </Typography>
              {preview && (
                <Typography style={{ margin: "0 0 0.75rem 0" }}>
                  {preview}
                </Typography>
              )}
              <FlexLayout>
                {tags.map((tag) => (
                  <Tag key={tag} label={tag} />
                ))}
              </FlexLayout>
            </FlexLayout>
          </GridItem>
        );
      })}
    </GridLayout>
  );
};
