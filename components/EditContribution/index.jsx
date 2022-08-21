import React from "react";
import { Link } from "react-router-dom";
import Input from "../Input";
import Input2 from "../Input2";
import "./EditContribution.sass";

function EditContribution(props) {
  const {
    contentTitle,
    x,
    phone,
    image,
    notes,
    title,
    address,
    xdelete,
    submit,
    input1Props,
    input21Props,
    input22Props,
    input2Props,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="edit-contribution screen">
        <div className="overlap-group1-8">
          <div className="overlap-group2-5">
            <div className="overlap-group-10 border-1px-black">
              <div className="content-title-9 comfortaa-bold-black-36px">{contentTitle}</div>
              <a href="javascript:history.back()">
                <div className="x-5 comfortaa-normal-dove-gray-20px">{x}</div>
              </a>
            </div>
            <div className="phone-5 comfortaa-normal-black-20px">{phone}</div>
            <div className="image-5 comfortaa-normal-black-20px">{image}</div>
            <div className="notes-5 comfortaa-normal-black-20px">{notes}</div>
            <div className="title-5 comfortaa-normal-black-20px">{title}</div>
            <div className="address-5 comfortaa-normal-black-20px">{address}</div>
            <a href="javascript:history.back()">
              <div className="frame-17-5">
                <img className="icons-trash-outline-5" src="/img/icons---trash-outline@2x.svg" />
                <div className="delete-5 inter-normal-scarpa-flow-16px">{xdelete}</div>
              </div>
            </a>
            <Input>{input1Props.children}</Input>
            <Input2>{input21Props.children}</Input2>
            <Input2 className={input22Props.className}>{input22Props.children}</Input2>
            <Input className={input2Props.className}>{input2Props.children}</Input>
            <Link to="/community-landing-page">
              <div className="submit-5 valign-text-middle inter-bold-black-18px">{submit}</div>
            </Link>
          </div>
          <div className="input-28 border-1px-mischka"></div>
        </div>
      </div>
    </div>
  );
}

export default EditContribution;
