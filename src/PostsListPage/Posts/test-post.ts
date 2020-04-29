import { PostModuleKind, PostType } from "./types";
import { TagKind } from "Tag";

const codeSnippet = `export interface Functor<T> {
  map<U>(f: (x: T) => U): Functor<U>;
}
`;

export const testCodeBlock: PostType = {
  title: "TESTING CODE BLOCKS ",
  date: "Sun Apr 26 2020",
  published: false,
  content: [
    {
      kind: PostModuleKind.PARAGRAPH,
      content: `
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras id feugiat dolor,
       fermentum fringilla augue. Maecenas egestas id eros ut scelerisque. 
       Curabitur ac metus eu augue mollis bibendum. 
       Duis in purus dui. Nunc mollis dapibus ipsum sollicitudin ornare. 
       Aenean efficitur tellus at libero luctus pellentesque. Donec dignissim sollicitudin euismod. 
       Cras vel eleifend diam, in pharetra metus. Phasellus eget porta neque. In hac habitasse platea dictumst. 
       Mauris turpis diam, lobortis in risus sed, fringilla rhoncus lectus. Quisque scelerisque, risus non lobortis ullamcorper, ex urna egestas ipsum, 
       ac tincidunt nulla risus ac dui. 
      `,
    },
    {
      kind: PostModuleKind.CODE,
      content: codeSnippet,
      language: "TypeScript",
    },
  ],
  tags: [TagKind.MISC_PROGRAMMING],
};
