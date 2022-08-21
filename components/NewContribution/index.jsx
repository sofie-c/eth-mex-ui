import React from "react";
import { Link } from "react-router-dom";
import Frame17 from "../Frame17";
import "./NewContribution.sass";

function NewContribution(props) {
  const { x, contentTitle, submit, phone, image, notes, title, address } = props;

  return (
    <div className="container-center-horizontal">
      <div className="new-contribution screen">
        <div className="new-contribution-1">
          <div className="overlap-group1-7 comfortaa-normal-black-20px">
            <Link to="/new-contribution-populated-1">
              <div className="content-14">
                <div className="overlap-group-9 border-1px-black">
                  <a href="javascript:history.back()">
                    <div className="x-4 comfortaa-normal-dove-gray-20px">{x}</div>
                  </a>
                  <div className="content-title-8 comfortaa-bold-black-36px">{contentTitle}</div>
                  <Link to="/community-landing-page">
                    <div className="submit-4 valign-text-middle inter-bold-black-18px">{submit}</div>
                  </Link>
                </div>
              </div>
            </Link>
            <div className="phone-4">{phone}</div>
            <div className="image-4">{image}</div>
            <div className="notes-4">{notes}</div>
            <div className="title-4">{title}</div>
            <div className="address-4">{address}</div>
            <Frame17 />
            <div className="input-23 border-1px-mischka"></div>
            <div className="input-24 border-1px-mischka"></div>
            <div className="input-25 border-1px-mischka"></div>
            <div className="input-26 border-1px-mischka"></div>
          </div>
          <div className="input-27 border-1px-mischka"></div>
        </div>
      </div>
    </div>
  );
}

export default NewContribution;
