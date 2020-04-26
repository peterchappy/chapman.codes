import React from "react";
import { Redirect, useParams } from "react-router";
import { FlexLayout } from "../../FlexLayout";
import { GridItem, GridLayout } from "../../Grid";
import { Routes } from "../../Routes";
import { Typography } from "../../Typography";
import { findPostBySlug, PostModule, PostModuleKind, Posts } from "../posts";
import { Tag } from "../../Tag";

type FullPostProps = {};

const renderModuleType = (post: PostModule) =>
  post.kind === PostModuleKind.PARAGRAPH ? (
    <Typography>{post.content}</Typography>
  ) : null;

export const FullPost: React.FC<FullPostProps> = () => {
  const { slug = "" } = useParams();

  const post = findPostBySlug(Posts, slug);

  if (post.length === 0) {
    return <Redirect to={Routes.POSTS} />;
  }

  const { title, date, content, tags } = post[0];

  return (
    <GridLayout cols="subgrid">
      <GridItem col={{ xs: [1, -1] }}>
        <FlexLayout flexDirection="column">
          <Typography variant="h4" style={{ margin: "0 0 0.25rem 0" }}>
            {title}
          </Typography>
          <Typography variant="small" style={{ margin: "0 0 0.5rem 0" }}>
            {date}
          </Typography>
        </FlexLayout>
      </GridItem>
      {content.map((post, i) => (
        <GridItem key={`${post.kind}-${i}`} col={{ xs: [1, -1] }}>
          {renderModuleType(post)}
        </GridItem>
      ))}
      <GridItem col={{ xs: [1, -1] }}>
        <FlexLayout>
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </FlexLayout>
      </GridItem>
    </GridLayout>
  );
};
