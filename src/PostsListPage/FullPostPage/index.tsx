import React from "react";
import { Redirect, useParams } from "react-router";
import { FlexLayout } from "FlexLayout";
import { GridItem, GridLayout } from "Grid";
import { Routes } from "utils/Routes";
import { Typography } from "Typography";
import { findPostBySlug, Posts } from "PostsListPage/Posts";
import { PostModule, PostModuleKind } from "PostsListPage/Posts/types";
import { Tag } from "Tag";
import Highlight from "react-highlight";
import { useDocumentTitle } from "@chappy/use-document-title";

type FullPostProps = {};

const renderModuleType = (post: PostModule) =>
  post.kind === PostModuleKind.PARAGRAPH ? (
    <Typography>{post.content}</Typography>
  ) : post.kind === PostModuleKind.CODE ? (
    <Highlight className={post.language}>{post.content}</Highlight>
  ) : null;

export const FullPost: React.FC<FullPostProps> = () => {
  const { slug = "" } = useParams();

  const post = findPostBySlug(Posts, slug);

  useDocumentTitle({ title: post[0]?.title, revertOnUnmount: true });

  if (post.length === 0) {
    return <Redirect to={Routes.POSTS} />;
  }

  const { title, date, content, tags } = post[0];

  return (
    <article>
      <GridLayout cols="subgrid">
        <GridItem col={{ xs: [1, -1] }}>
          <header>
            <FlexLayout flexDirection="column">
              <Typography variant="h4" style={{ margin: "0 0 0.25rem 0" }}>
                {title}
              </Typography>
              <time>
                <Typography variant="small">{date}</Typography>
              </time>
            </FlexLayout>
          </header>
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
    </article>
  );
};
