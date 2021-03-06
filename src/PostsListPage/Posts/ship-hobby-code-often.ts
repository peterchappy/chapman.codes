import { PostModuleKind, PostType } from "./types";
import { TagKind } from "Tag";

export const shipHobbyCodeOften: PostType = {
  title: "Ship hobby code often",
  date: "Sun Apr 26 2020",
  published: true,
  content: [
    {
      kind: PostModuleKind.PARAGRAPH,
      content: `
        There are often two problems a developer faces when working on side projects. First is that
        they are too precious of their work. Everything needs to be done "right" and thus they
        usually make very little progress with the limited free time that they have. Secondly more
        often than not developers have too many ideas that they want to work on. 
        The combination of these two things leads to a Github page filled with half completed projects. 
        I can confidently say that most developers have gone through their Github page
        and deleted a bunch of repositories that had no actual meaning or purpose other than the reminder of
        an idea they once had.
      `,
    },
    {
      kind: PostModuleKind.PARAGRAPH,
      content: `
        Doing things "right" is a broad term that can manifest in many ways. Maybe your following TDD and trying
        to get 100% test coverage, using all the hottest new JS frameworks, spending days tweaking styles, 
        or writing your app in the fanciest of FP languages. There is only so much free time in a day and if the primary goal
        of the project is to do it the "right" way that's totally valid, but this will greatly 
        decrease the speed of your output.
      `,
    },
    {
      kind: PostModuleKind.PARAGRAPH,
      content: `
        Developers by nature find problems in their environment and try to solve them. This tends to lead to a laundry list of project ideas
        written down in a notebook or saved on a phone. This can tend to analysis paralysis to what
        project you should be working. 
        If you choose the wrong project, slow frequency of output could lead to an apathy towards your side project 
        which in turn leads to abandonment.
      `,
    },
    {
      kind: PostModuleKind.PARAGRAPH,
      content: `
        At this point I want to be clear. There is nothing at all wrong with doing things the "right" way
        or having a laundry list of ideas. It's all about management of these two competing sides of your brain.
        As someone who has for many years suffered with these problems I've come to a simple realization. 
        Ship your hobby code often.
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
        Break down ideas into increments of small MVPs or vertical slices. 
        Maybe you're trying to learn a new language and want more than just a todo list to work on.
        Find something quick you can make a simple clone of like Twitter, HackerNews, or YouTube.
        If the project a more fleshed out idea and less about learning new tech find shippable features that would bring value on their own.
        This allows you to figure out not only what technologies you enjoy / are productive working with
        but also finding which ideas really spark your creativity.
      `,
    },
    {
      kind: PostModuleKind.PARAGRAPH,
      content: `
        Take this website for example. At the time of writing this blog post, April 2020, I'm writing this in
        a json blob because Markdown support isn't implement, I don't have a backend CMS, and the idea of learning
        Gatsby added a big question mark to what I could actually get done. I know I will eventually get to
        these things however neglecting them has a allowed me to ship a fully functional website in a week.
        This frees me up to either next week continue on improvements to this site, or build out an MVP for 
        my next idea.
      `,
    },
    {
      kind: PostModuleKind.PARAGRAPH,
      content: `
        Shipping your hobby code often is a rewarding feeling. It scratches that instant gratification part of my primate brain
        in the same way completing a series on Netflix over the course of a weekend does. It has brought back the joy and motivation of
        hobby programming I've felt like I've lost in recent years.
      `,
    },
  ],
  tags: [TagKind.MISC_PROGRAMMING],
};
