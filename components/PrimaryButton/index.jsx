import React from "react";
import { Link } from "react-router-dom";
import "./PrimaryButton.sass";

function PrimaryButton(props) {
  const { children } = props;

  return (
    <Link to="/worldcoin-qr">
      <div className="primary-button">
        <div className="wallet-connect valign-text-middle inter-bold-tuatara-18px">{children}</div>
      </div>
    </Link>
  );
}

export default PrimaryButton;
