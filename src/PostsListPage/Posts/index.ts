import { shipHobbyCodeOften } from "./ship-hobby-code-often";
import { testCodeBlock } from "./test-post";

import { PostType, PostModule, PostModuleKind } from "./types";
import { includeIf } from "utils/includeIf";

export const toSlug = (title: string) =>
  title.toLowerCase().split(" ").join("-");

export const findPostBySlug = (posts: PostType[], slug: string) =>
  posts.filter(({ title }) => toSlug(title) === slug);

export const getPreview = (module: PostModule) =>
  module.kind === PostModuleKind.PARAGRAPH
    ? module.content.split(".", 1)[0]
    : null;

export const includeIfPublished = (post: PostType): PostType[] => {
  return includeIf(
    !process.env.NODE_ENV ||
      process.env.NODE_ENV === "development" ||
      post.published,
    [post]
  );
};

export const Posts: PostType[] = [
  ...includeIfPublished(shipHobbyCodeOften),
  ...includeIfPublished(testCodeBlock),
];
