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
            Currently I'm working with the awesome team over at QuotaPath doing just that.
        `}</Typography>
      </GridItem>
      <GridItem col={{ xs: [1, -1] }}>
        <Typography>{`
            I love being a software engineer. Every day I feel like the kid who grew up wanting to play basketball
            that actually got drafted into the NBA. I knew that I wanted to be a programmer when at an early age
            my dad programmed a hack for me to actually beat the original Rouge on our Atari ST.
        `}</Typography>
      </GridItem>
      <GridItem col={{ xs: [1, -1] }}>
        <Typography>{`
            While you can expect lots of programming talk on this page you'll also find
            sprinkled in pictures of my cat, recipes I've crafted, reviews of movies and records, 
            progress shots of Gunpla I'm building, and thoughts on the current state of wrestling around the world.
        `}</Typography>
      </GridItem>
      <GridItem col={{ xs: [1, -1] }}>
        <Typography>{`
            That sounds like a lot, and it is, but as I get older I've found writing to be a good way
            to solidify and express my viewpoints. A friend of mine use to joke that I'd 
            probably write a memoir one day. While this is not that, it is me planting a flag on a little piece of the internet,
            and creating passionate content that I enjoy, and hopefully others do too.
        `}</Typography>
      </GridItem>
      <GridItem col={{ xs: [1, -1] }} />
      <GridItem col={{ xs: [1, -1] }} />
      <GridItem col={{ xs: [1, -1] }}>
        <Typography>
          <strong>{`Disclaimer: Viewpoints expressed on this page are solely mine and not those of my employer.`}</strong>
        </Typography>
      </GridItem>
    </GridLayout>
  );
};
