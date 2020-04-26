import React from "react";
import { GridLayout, GridItem } from "Grid";
import { Typography } from "Typography";

type AboutPageProps = {};

export const AboutPage: React.FC<AboutPageProps> = () => {
  return (
    <GridLayout cols="subgrid">
      <GridItem col={{ xs: [1, -1] }}>
        <Typography variant="h6">Hi, I'm Peter Chapman</Typography>
      </GridItem>
      <GridItem col={{ xs: [1, -1] }}>
        <Typography>{`
            I'm a Fullstack Software Engineer from Philadelphia. I would consider myself to be a polygot, 
            but my bread and butter is Typescript, React, and Functional Programming. 
            Currently working with the awesome team over at QuotaPath doing just that.
        `}</Typography>
      </GridItem>
      <GridItem col={{ xs: [1, -1] }}>
        <Typography>{`
            I love being a software engineer. Every day I feel like the kid who grew up wanting to play basketball
            that actually got drafted into the NBA. I knew I wanted to be a programmer when at an early age
            my dad programmed a hack for me to actually beat the original Rouge on our Atari ST.
        `}</Typography>
      </GridItem>
      <GridItem col={{ xs: [1, -1] }}>
        <Typography>{`
            Social media is not really my scene these days. 
            Besides just being a portfolio this site is a blog for anything and everything that is going on in my life. 
            Expect lots of programming talks, but sprinkled in you'll also see pictures of my cat, 
            recipes I've crafted, reviews of movies and records, 
            progress shots of Gunpla I'm working on, and thoughts on the current state of wrestling around the world.
        `}</Typography>
      </GridItem>
      <GridItem col={{ xs: [1, -1] }}>
        <Typography>{`
            That sounds like a lot, and it is, but as I get older I've found writing to be a good way
            to solidify and express my viewpoints. This site is also a way for friends
            and family to see what's going on in my life. A close friend of mine use to joke that I'd 
            probably write a memoir one day. While this is not that it is me planting a flag on a little
            piece of the internet and allowing me to create the type of content that I enjoy digesting.
        `}</Typography>
      </GridItem>
      <GridItem col={{ xs: [1, -1] }} />
      <GridItem col={{ xs: [1, -1] }} />
      <GridItem col={{ xs: [1, -1] }}>
        <Typography>
          <strong>{`Disclaimer: Viewpoints expressed on this page are soley mine and not those of my empolyer.`}</strong>
        </Typography>
      </GridItem>
    </GridLayout>
  );
};
