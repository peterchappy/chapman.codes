import Octicon, { Mail, MarkGithub } from "@primer/octicons-react";
import React from "react";
import { BreakPointUp } from "../BreakPoint";
import { xsMainCol } from "../constants";
import { FlexLayout } from "../FlexLayout";
import { GridItem } from "../Grid";
import { GridSpan } from "../Grid/types";
import { Typography } from "../Typography";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <GridItem
        col={{ xs: [2, new GridSpan(5)], md: [3, new GridSpan(3)] }}
        row={{ xs: 1 }}
      >
        <Typography variant="h1">chapman.codes</Typography>
        <Typography variant="h5">My little piece of the internet.</Typography>
      </GridItem>
      <GridItem
        col={{ xs: xsMainCol, md: [6, new GridSpan(1)] }}
        row={{ xs: 2, md: 1 }}
      >
        <BreakPointUp
          xs={({ bp }) => {
            const isMobileNav = ["xs", "sm"].includes(bp);
            return (
              <>
                <FlexLayout
                  flexDirection={isMobileNav ? "row" : "column"}
                  alignItems={isMobileNav ? "center" : "flex-end"}
                  justifyContent={isMobileNav ? "space-between" : "center"}
                  fullHeight={!isMobileNav}
                >
                  {["About", "Blog", "Projects"].map((val) => (
                    <div>
                      <Typography variant="h6" key={val}>
                        {val.toUpperCase()}
                      </Typography>
                    </div>
                  ))}
                  <FlexLayout alignItems="center">
                    <a
                      style={{ textDecoration: "none" }}
                      href="https://www.github.com/peterchappy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div style={{ marginRight: "0.5rem" }}>
                        <Octicon icon={MarkGithub} />
                      </div>
                    </a>
                    <a
                      style={{ textDecoration: "none" }}
                      href="mailto:petechapman@protonmail.com"
                    >
                      <div>
                        <Octicon icon={Mail} />
                      </div>
                    </a>
                  </FlexLayout>
                </FlexLayout>
              </>
            );
          }}
        />
      </GridItem>
    </>
  );
};

export { Header };
