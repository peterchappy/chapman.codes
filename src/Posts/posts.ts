import { TagKind } from "../Tag";

enum PostModuleKind {
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
  caption: string;
};

type PostModule = ParagraphPostModule | ImagePostModule;

type PostType = {
  title: string;
  date: string;
  content: PostModule[];
  tags: TagKind[];
};

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
