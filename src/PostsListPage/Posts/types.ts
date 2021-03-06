import { TagKind } from "Tag";

export enum PostModuleKind {
  PARAGRAPH = "paragraph",
  IMAGE = "image",
  CODE = "code",
}

export type ParagraphPostModule = {
  kind: PostModuleKind.PARAGRAPH;
  content: string;
  previewSize?: number;
};

export type ImagePostModule = {
  kind: PostModuleKind.IMAGE;
  src: string;
  alt: string;
  caption?: string;
};

export type CodePostModule = {
  kind: PostModuleKind.CODE;
  content: string;
  language: "TypeScript";
};

export type PostModule = ParagraphPostModule | ImagePostModule | CodePostModule;

export type PostType = {
  title: string;
  date: string;
  content: PostModule[];
  tags: TagKind[];
  published: boolean;
};
