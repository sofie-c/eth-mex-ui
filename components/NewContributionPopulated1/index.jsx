import React from "react";
import { Link } from "react-router-dom";
import Frame17 from "../Frame17";
import Input from "../Input";
import "./NewContributionPopulated1.sass";

function NewContributionPopulated1(props) {
  const { x, contentTitle, submit, phone, image, notes, title, address, inputProps } = props;

  return (
    <div className="container-center-horizontal">
      <div className="new-contribution-populated-1 screen">
        <div className="overlap-group1-6">
          <div className="overlap-group2-4">
            <Link to="/new-contribution-populated-2">
              <div className="content-13">
                <div className="overlap-group-8 border-1px-black">
                  <a href="javascript:history.back()">
                    <div className="x-3 comfortaa-normal-dove-gray-20px">{x}</div>
                  </a>
                  <div className="content-title-7 comfortaa-bold-black-36px">{contentTitle}</div>
                  <Link to="/community-landing-page">
                    <div className="submit-3 valign-text-middle inter-bold-black-18px">{submit}</div>
                  </Link>
                </div>
              </div>
            </Link>
            <div className="phone-3 comfortaa-normal-black-20px">{phone}</div>
            <div className="image-3 comfortaa-normal-black-20px">{image}</div>
            <div className="notes-3 comfortaa-normal-black-20px">{notes}</div>
            <div className="title-3 comfortaa-normal-black-20px">{title}</div>
            <div className="address-3 comfortaa-normal-black-20px">{address}</div>
            <Frame17 />
            <div className="input-19 border-1px-mischka"></div>
            <div className="input-20 border-1px-mischka"></div>
            <div className="input-21 border-1px-mischka"></div>
            <Input className={inputProps.className}>{inputProps.children}</Input>
          </div>
          <div className="input-22 border-1px-mischka"></div>
        </div>
      </div>
    </div>
  );
}

export default NewContributionPopulated1;
