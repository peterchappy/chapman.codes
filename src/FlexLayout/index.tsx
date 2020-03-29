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
};

const FlexLayout: React.FC<FlexLayoutProps> = ({ children, ...props }) => {
  return (
    <div
      style={{
        display: "flex",
        ...props,
      }}
    >
      {children}
    </div>
  );
};

export { FlexLayout };
