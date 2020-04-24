import Octicon, { Mail, MarkGithub } from "@primer/octicons-react";
import React from "react";
import { BreakPointUp } from "../BreakPoint";
import { xsMainCol, MainCol } from "../constants";
import { FlexLayout } from "../FlexLayout";
import { GridItem } from "../Grid";
import { GridSpan } from "../Grid/types";
import { Typography } from "../Typography";
import { Link } from "react-router-dom";

type HeaderProps = {};

const LINK_STYLE = { textDecoration: "none", color: "#000" };

const Header: React.FC<HeaderProps> = () => {
  return (
    <>
      <GridItem col={MainCol} row={{ xs: 1 }}>
        <Typography variant="h1">chapman.codes</Typography>
        <Typography variant="h4">My little piece of the internet.</Typography>
      </GridItem>
      <GridItem
        col={{
          xs: xsMainCol,
          sm: [13, new GridSpan(2)],
          md: [12, new GridSpan(2)],
        }}
        row={{ xs: 2, sm: 1 }}
      >
        <BreakPointUp
          xs={({ bp }) => {
            const isMobileNav = ["xs"].includes(bp);
            return (
              <>
                <FlexLayout
                  flexDirection={isMobileNav ? "row" : "column"}
                  alignItems={isMobileNav ? "center" : "flex-end"}
                  justifyContent={isMobileNav ? "space-between" : "center"}
                  fullHeight={!isMobileNav}
                >
                  {["about", "posts", "projects"].map((val) => (
                    <Link key={val} style={LINK_STYLE} to={`/${val}`}>
                      <Typography variant="h6" key={val}>
                        {val.toUpperCase()}
                      </Typography>
                    </Link>
                  ))}
                  <FlexLayout alignItems="center">
                    <a
                      style={LINK_STYLE}
                      href="https://www.github.com/peterchappy"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div style={{ marginRight: "0.5rem" }}>
                        <Octicon icon={MarkGithub} />
                      </div>
                    </a>
                    <a
                      style={LINK_STYLE}
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
