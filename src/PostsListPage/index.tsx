import React from "react";
import { GridLayout, GridItem } from "Grid";
import { Typography } from "Typography";
import { Posts, getPreview, toSlug } from "./Posts";
import { FlexLayout } from "FlexLayout";
import { Tag } from "Tag";
import { Link } from "Link";

type PostPageProps = {};

export const PostListPage: React.FC<PostPageProps> = () => {
  return (
    <GridLayout cols="subgrid">
      {Posts.map(({ title, date, tags, content }) => {
        const preview = getPreview(content[0]);
        return (
          <GridItem key={title} col={{ xs: [1, -1] }}>
            <FlexLayout flexDirection="column" justifyContent="flex-start">
              <Link
                typographyProps={{
                  variant: "h4",
                  style: { margin: "0 0 0.25rem 0" },
                }}
                to={`posts/${toSlug(title)}`}
                label={title}
              />
              <time style={{ margin: "0 0 1rem 0" }}>
                <Typography variant="small">{date}</Typography>
              </time>
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
