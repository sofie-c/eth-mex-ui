import React from "react";
import "./Frame6.sass";

function Frame6(props) {
  const { children } = props;

  return (
    <div className="frame">
      <div className="settings inter-normal-scarpa-flow-12px">{children}</div>
    </div>
  );
}

export default Frame6;
