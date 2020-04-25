import Octicon, { Mail, MarkGithub } from "@primer/octicons-react";
import React from "react";
import { BreakPointUp } from "../BreakPoint";
import { xsMainCol, MainCol } from "../constants";
import { FlexLayout } from "../FlexLayout";
import { GridItem } from "../Grid";
import { GridSpan } from "../Grid/types";
import { Typography } from "../Typography";
import { Link } from "../Link";

type HeaderProps = {};

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
                    <Link
                      key={val}
                      to={`/${val}`}
                      label={val.toUpperCase()}
                      typographyProps={{
                        variant: "h6",
                      }}
                    />
                  ))}
                  <FlexLayout alignItems="center">
                    <Link
                      to={"https://www.github.com/peterchappy"}
                      label={<Octicon icon={MarkGithub} />}
                      external
                      style={{ marginRight: "0.5rem" }}
                    />
                    <Link
                      to={"mailto:petechapman@protonmail.com"}
                      label={<Octicon icon={Mail} />}
                      external
                    />
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
