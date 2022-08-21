import React from "react";
import PrimaryButton from "../PrimaryButton";
import PrimaryButton2 from "../PrimaryButton2";
import "./VerificationCheck.sass";

function VerificationCheck(props) {
  const {
    spanText1,
    spanText2,
    spanText3,
    spanText4,
    spanText5,
    spanText6,
    spanText7,
    spanText8,
    primaryButtonProps,
    primaryButton2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="verification-check screen">
        <div className="verification-check-1">
          <div className="success-would-you valign-text-middle inter-bold-black-32px">
            <span>
              <span className="inter-bold-black-32px">{spanText1}</span>
              <span className="inter-normal-black-10px">{spanText2}</span>
              <span className="inter-normal-black-20px">{spanText3}</span>
              <span className="inter-normal-black-10px">{spanText4}</span>
              <span className="inter-normal-black-16px">{spanText5}</span>
            </span>
          </div>
          <PrimaryButton>{primaryButtonProps.children}</PrimaryButton>
          <div className="overlap-group1">
            <PrimaryButton2>{primaryButton2Props.children}</PrimaryButton2>
            <div className="not-ready-yet-no-w valign-text-middle inter-normal-black-20px">
              <span>
                <span className="inter-normal-black-20px">{spanText6}</span>
                <span className="inter-normal-black-10px">{spanText7}</span>
                <span className="inter-normal-black-16px">{spanText8}</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VerificationCheck;
