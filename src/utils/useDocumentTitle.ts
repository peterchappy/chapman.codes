import React from "react";

export const useDocumentTitle = <T>(title: undefined | string, deps: T[]) => {
  const [prevPageTitle] = React.useState<string>(document.title);

  React.useEffect(() => {
    if (title) {
      document.title = title;
    }

    return () => {
      document.title = prevPageTitle;
    };
  }, deps);
};
