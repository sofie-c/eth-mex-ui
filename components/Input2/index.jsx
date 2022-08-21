import React from "react";
import "./Input2.sass";

function Input2(props) {
  const { children, className } = props;

  return (
    <div className={`input-8 border-1px-mischka ${className || ""}`}>
      <div className="input-text-here-5 comfortaa-normal-black-16px">{children}</div>
    </div>
  );
}

export default Input2;
