import React from "react";
import { Link } from "react-router-dom";
import Frame17 from "../Frame17";
import Input2 from "../Input2";
import Input from "../Input";
import "./NewContributionPopulated2.sass";

function NewContributionPopulated2(props) {
  const { x, contentTitle, submit, phone, image, notes, title, address, input2Props, inputProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="new-contribution-populated-2 screen">
        <div className="overlap-group1-3">
          <div className="overlap-group2-2">
            <Link to="/new-contribution-populated-3">
              <div className="content-6">
                <div className="overlap-group-4 border-1px-black">
                  <a href="javascript:history.back()">
                    <div className="x-1 comfortaa-normal-dove-gray-20px">{x}</div>
                  </a>
                  <div className="content-title-5 comfortaa-bold-black-36px">{contentTitle}</div>
                  <Link to="/community-landing-page">
                    <div className="submit-1 valign-text-middle inter-bold-black-18px">{submit}</div>
                  </Link>
                </div>
              </div>
            </Link>
            <div className="phone-1 comfortaa-normal-black-20px">{phone}</div>
            <div className="image-1 comfortaa-normal-black-20px">{image}</div>
            <div className="notes-1 comfortaa-normal-black-20px">{notes}</div>
            <div className="title-1 comfortaa-normal-black-20px">{title}</div>
            <div className="address-1 comfortaa-normal-black-20px">{address}</div>
            <Frame17 />
            <div className="input-13 border-1px-mischka"></div>
            <div className="input-15 border-1px-mischka"></div>
            <Input2 className={input2Props.className}>{input2Props.children}</Input2>
            <Input className={inputProps.className}>{inputProps.children}</Input>
          </div>
          <div className="input-16 border-1px-mischka"></div>
        </div>
      </div>
    </div>
  );
}

export default NewContributionPopulated2;
