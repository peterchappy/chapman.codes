import { TagKind } from "../Tag";

export enum PostModuleKind {
  PARAGRAPH = "paragraph",
  IMAGE = "image",
}

type ParagraphPostModule = {
  kind: PostModuleKind.PARAGRAPH;
  content: string;
  previewSize?: number;
};

type ImagePostModule = {
  kind: PostModuleKind.IMAGE;
  src: string;
  alt: string;
  caption?: string;
};

export type PostModule = ParagraphPostModule | ImagePostModule;

export type PostType = {
  title: string;
  date: string;
  content: PostModule[];
  tags: TagKind[];
};

export const toSlug = (title: string) =>
  title.toLowerCase().split(" ").join("-");

export const findPostBySlug = (posts: PostType[], slug: string) =>
  posts.filter(({ title }) => toSlug(title) === slug);

export const getPreview = (module: PostModule) =>
  module.kind === PostModuleKind.PARAGRAPH
    ? module.content.split(".", 1)[0]
    : null;

export const Posts: PostType[] = [
  {
    title: "Ship hobby code often",
    date: "Sat Apr 25 2020",
    content: [
      {
        kind: PostModuleKind.PARAGRAPH,
        content: `
          Developers are often to precious about their side projects.
        `,
      },
    ],
    tags: [TagKind.MISC_PROGRAMMING],
  },
];
