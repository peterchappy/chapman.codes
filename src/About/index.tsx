import React from "react";
import { GridLayout, GridItem } from "../Grid";
import { Typography } from "../Typography";

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
            I'm currently working with the awesome team over at QuotaPath doing just that.
        `}</Typography>
      </GridItem>
      <GridItem col={{ xs: [1, -1] }}>
        <Typography>{`
            Previously, I worked Bluecadet, an award winning agency based in Fishtown developing interactive
            experience for museums and non-profits across the nation using C++, React, and Java for native
            Android development. After Bluecadet I got to work with the talented team over at AI Labs
            building tools for finnancial advisors in Typescript along with doing open source work on
            our internal framework based on the Elm Architecture.
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
            Outside of programming some of my interests involve collecting vinyl records, cooking vegan food,
            minimalism, podcasts, trying new beers, building Gunpla, watching wrestling, and hanging out with my cat Cinnamon.
        `}</Typography>
      </GridItem>
      <GridItem col={{ xs: [1, -1] }}>
        <Typography>{`
            I don't use social media. So content on this site will revolve around my thoughts about any of the 
            above and more.
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
