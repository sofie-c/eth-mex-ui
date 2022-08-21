import React from "react";
import { Link } from "react-router-dom";
import Frame17 from "../Frame17";
import Input2 from "../Input2";
import Input from "../Input";
import "./NewContributionPopulated3.sass";

function NewContributionPopulated3(props) {
  const {
    x,
    contentTitle,
    submit,
    phone,
    image,
    notes,
    title,
    address,
    input21Props,
    input22Props,
    inputProps,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="new-contribution-populated-3 screen">
        <div className="overlap-group1-4">
          <div className="overlap-group2-3">
            <Link to="/new-contribution-populated-4">
              <div className="content-7">
                <div className="overlap-group-5 border-1px-black">
                  <a href="javascript:history.back()">
                    <div className="x-2 comfortaa-normal-dove-gray-20px">{x}</div>
                  </a>
                  <div className="content-title-6 comfortaa-bold-black-36px">{contentTitle}</div>
                  <Link to="/community-landing-page">
                    <div className="submit-2 valign-text-middle inter-bold-black-18px">{submit}</div>
                  </Link>
                </div>
              </div>
            </Link>
            <div className="phone-2 comfortaa-normal-black-20px">{phone}</div>
            <div className="image-2 comfortaa-normal-black-20px">{image}</div>
            <div className="notes-2 comfortaa-normal-black-20px">{notes}</div>
            <div className="title-2 comfortaa-normal-black-20px">{title}</div>
            <div className="address-2 comfortaa-normal-black-20px">{address}</div>
            <Frame17 />
            <div className="input-17 border-1px-mischka"></div>
            <Input2>{input21Props.children}</Input2>
            <Input2 className={input22Props.className}>{input22Props.children}</Input2>
            <Input className={inputProps.className}>{inputProps.children}</Input>
          </div>
          <div className="input-18 border-1px-mischka"></div>
        </div>
      </div>
    </div>
  );
}

export default NewContributionPopulated3;
