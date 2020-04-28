import React from "react";

export const useDocumentTitle = <T>(title: undefined | string, deps: T[]) => {
  const [prevPageTitle] = React.useState<string>(document.title);

  React.useEffect(() => {
    if (title && document) {
      document.title = title;
    }

    return () => {
      if (document) {
        document.title = prevPageTitle;
      }
    };
    // eslint-disable-next-line
  }, deps);
};
