import Octicon, { Mail, MarkGithub } from "@primer/octicons-react";
import React from "react";
import { BreakPointUp } from "BreakPoint";
import { xsMainCol, MainCol } from "utils/constants";
import { FlexLayout, FlexLayoutProps } from "FlexLayout";
import { GridItem } from "Grid";
import { GridSpan } from "Grid/types";
import { Typography } from "Typography";
import { Link } from "Link";
import { matchPath, useLocation } from "react-router";

type HeaderProps = {};

const Header: React.FC<HeaderProps> = () => {
  const location = useLocation();
  const isRoot = Boolean(
    matchPath(location.pathname, {
      path: "/",
      exact: true,
    })
  );

  return (
    <>
      <GridItem col={MainCol} row={{ xs: 1 }}>
        <Typography variant="h1">chapman.codes</Typography>
        <Typography variant="h3">My corner of the internet.</Typography>
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
            const flexLayoutStyles: FlexLayoutProps = isMobileNav
              ? {
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  fullHeight: false,
                }
              : {
                  flexDirection: "column",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  fullHeight: true,
                };
            return (
              <>
                <FlexLayout {...flexLayoutStyles}>
                  {["about", "posts", "projects"].map((val, i) => {
                    const route = `/${val}`;
                    const active = matchPath(location.pathname, {
                      path: route,
                    });

                    return (
                      <Link
                        key={val}
                        to={route}
                        label={val.toUpperCase()}
                        active={
                          (Boolean(active) || (i === 0 && isRoot)) &&
                          !isMobileNav
                        }
                        typographyProps={{
                          variant: "h6",
                        }}
                      />
                    );
                  })}
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
