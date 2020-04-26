import { PostModuleKind, PostType } from "./types";
import { TagKind } from "Tag";

export const shipHobbyCodeOften: PostType = {
  title: "Ship hobby code often",
  date: "Mon Apr 27 2020",
  published: false,
  content: [
    {
      kind: PostModuleKind.PARAGRAPH,
      content: `
        There are often two problems a developer faces when working on side projects. First is that
        they are too precious of their work. Everything needs to be done "right" and thus they
        usually make very little progress with the limited time that they have. Secondly more
        often than not developers have too many ideas that they want to work on. 
        The combination of these two things leads to a Github page half completed projects. 
        I can confidently say most developers have had to go through their Github page
        and delete a bunch of repos that had no actual meaning or purpose.
      `,
    },
    {
      kind: PostModuleKind.PARAGRAPH,
      content: `
        Doing things "right" is a broad term that can manifest in many ways. Maybe your following TDD and trying
        to get 100% test coverage, using all the hottest new JS frameworks, or writing your app in the
        fanciest of FP languages. There is only so much free time in a day and if the primary goal
        of your project is to do it the "right" way that's totally valid, but this will greatly 
        decrease the speed of your output.
      `,
    },
    {
      kind: PostModuleKind.PARAGRAPH,
      content: `
        Frequency of output can lead to an apthaty towards your side project. We live in a time where
        instant gratification is a like or one click buy away. Developers by nature find problems in
        their enviroment and try to solve them. This tends to lead to a laundry list of project ideas
        written down in your notebook or saved in a list on your phone. When that apathy towards
        your current project kicks in it's really easy to move onto the next thing.
      `,
    },
    {
      kind: PostModuleKind.PARAGRAPH,
      content: `
        At this point I want to be clear. There is nothing at all wrong with doing things the "right" way
        or having a laundy list of ideas. It's all about managment of these two competing sides of your brain.
        As someone who has for many years suffered with these problems I've come to a simple realiztion. 
        Shipping your hobby code often.
      `,
    },
    {
      kind: PostModuleKind.PARAGRAPH,
      content: `
        What do I mean by that?
      `,
    },
    {
      kind: PostModuleKind.PARAGRAPH,
      content: `
        Pick small increments of MVPs that you can ship. If you're trying to learn a new language and don't
        want to do a todo list maybe try to make a Twitter, Reddit, or Youtube clone. If you're working on 
        a more ambitious project choose one vertical slice that can be shipped in a week and go to town.
        This allows you to both figure out what technologies you enjoy / are productive working with while
        also finding which projects on your todo list are fun and feasible. If after you've shipped
        your first vertical slice and feel inspired you can always find another vertical slice to work on.
      `,
    },
    {
      kind: PostModuleKind.PARAGRAPH,
      content: `
        Take this website for example. At the time of writing this blog post, April 2020, I'm writing this in
        a json blob because Markdown support isn't implement, I don't have a backend CMS, and the idea of learning
        Gatsby seemed to take it ouf the scope of the time I hade allotted. But I know I will eventually get to
        these things. Neglecting these things however has allowed me to focus on making a quick down and dirty webpage,
        building out content types I want to use, and generate a laundry list of things I can eventually flesh out. 
        If and when I choose to, but for now I've shipped this and plan to move onto a new project next week.
      `,
    },
  ],
  tags: [TagKind.MISC_PROGRAMMING],
};
