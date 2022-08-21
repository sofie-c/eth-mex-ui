import React from "react";
import { Link } from "react-router-dom";
import "./PrimaryButton2.sass";

function PrimaryButton2(props) {
  const { children } = props;

  return (
    <Link to="/unverified-profile-ui">
      <div className="primary-button-1">
        <div className="overlap-group">
          <div className="rectangle"></div>
          <div className="wallet-connect-1 valign-text-middle inter-bold-tuatara-18px">{children}</div>
        </div>
      </div>
    </Link>
  );
}

export default PrimaryButton2;
