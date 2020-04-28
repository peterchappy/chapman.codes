import React from "react";

const tryToSetDocumentTitle = (title: string) => {
  try {
    document.title = title;
  } catch (e) {
    console.warn("document not found");
  }
};

export const useDocumentTitle = <T>(title: undefined | string, deps: T[]) => {
  const isBrowser = typeof document !== "undefined";
  const [prevPageTitle, setPrevPageTitle] = React.useState<string>(
    isBrowser ? document.title : ""
  );

  React.useEffect(() => {
    if (isBrowser) {
      setPrevPageTitle(document.title);
    }
  }, [isBrowser]);

  React.useEffect(() => {
    if (title && isBrowser) {
      tryToSetDocumentTitle(title);
    }

    return () => {
      if (isBrowser) {
        tryToSetDocumentTitle(prevPageTitle);
      }
    };
  }, [isBrowser, title, prevPageTitle, deps]);
};
