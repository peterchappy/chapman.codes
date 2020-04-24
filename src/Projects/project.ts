import { TagKind } from "../Tag";

type ProjectType = {
  title: string;
  link: string;
  description: string;
  tags: TagKind[];
};

export const projects: ProjectType[] = [
  {
    title: "chapman.codes",
    link: "chapman.codes",
    description: `
        This page you're currently viewing! Built in React and Typescript over the course 
        of my free time during 2020 quarintine. It's very much a WIP, but what
        portfolio isn't all the time?
    `,
    tags: [TagKind.REACT, TagKind.TYPESCRIPT],
  },
];
