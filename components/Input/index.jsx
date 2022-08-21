import React from "react";
import "./Input.sass";

function Input(props) {
  const { children, className } = props;

  return (
    <div className={`input-1 border-1px-mischka ${className || ""}`}>
      <div className="input-text-here inter-medium-charade-14px">{children}</div>
    </div>
  );
}

export default Input;
