import React from "react";

//TODO: Flesh This Out
type FlexLayoutProps = {
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  alignItems?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around "
    | "space-evenly"
    | "start"
    | "end"
    | "left"
    | "right";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around "
    | "space-evenly"
    | "start"
    | "end"
    | "left"
    | "right";
  fullHeight?: boolean;
};

const FlexLayout: React.FC<FlexLayoutProps> = ({
  children,
  fullHeight,
  ...props
}) => {
  return (
    <div
      style={{
        display: "flex",
        ...(fullHeight ? { height: "100%" } : {}),
        ...props,
      }}
    >
      {children}
    </div>
  );
};

export { FlexLayout };
