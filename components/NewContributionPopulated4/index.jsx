import React from "react";
import { Link } from "react-router-dom";
import Frame17 from "../Frame17";
import Input from "../Input";
import Input2 from "../Input2";
import "./NewContributionPopulated4.sass";

function NewContributionPopulated4(props) {
  const {
    x,
    contentTitle,
    submit,
    phone,
    image,
    notes,
    title,
    address,
    input1Props,
    input21Props,
    input22Props,
    input2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="new-contribution-populated-4 screen">
        <div className="overlap-group1-1">
          <div className="overlap-group2">
            <div className="overlap-group-1 border-1px-black">
              <a href="javascript:history.back()">
                <div className="x comfortaa-normal-dove-gray-20px">{x}</div>
              </a>
              <h1 className="content-title comfortaa-bold-black-36px">{contentTitle}</h1>
              <Link to="/community-landing-page">
                <div className="submit valign-text-middle inter-bold-black-18px">{submit}</div>
              </Link>
            </div>
            <div className="phone comfortaa-normal-black-20px">{phone}</div>
            <div className="image comfortaa-normal-black-20px">{image}</div>
            <div className="notes comfortaa-normal-black-20px">{notes}</div>
            <div className="title comfortaa-normal-black-20px">{title}</div>
            <div className="address comfortaa-normal-black-20px">{address}</div>
            <Frame17 />
            <Input>{input1Props.children}</Input>
            <Input2>{input21Props.children}</Input2>
            <Input2 className={input22Props.className}>{input22Props.children}</Input2>
            <Input className={input2Props.className}>{input2Props.children}</Input>
          </div>
          <div className="input border-1px-mischka"></div>
        </div>
      </div>
    </div>
  );
}

export default NewContributionPopulated4;
