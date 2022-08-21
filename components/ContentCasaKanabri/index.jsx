import React from "react";
import { Link } from "react-router-dom";
import "./ContentCasaKanabri.sass";

function ContentCasaKanabri(props) {
  const {
    contentImage,
    contentTitle,
    contentLocation,
    addToFavorites,
    phone525573143,
    screenShot20220820At8121,
    edit,
    x,
    archive1,
    archive2,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="content-casa-kanabri screen">
        <div className="overlap-group1-9 border-1px-black">
          <div className="overlap-group3-1">
            <div className="overlap-group2-6">
              <img className="content-image-2" src={contentImage} />
              <div className="content-title-10 comfortaa-bold-black-36px">{contentTitle}</div>
              <div className="content-location-1 comfortaa-normal-black-20px">{contentLocation}</div>
              <Link to="/verified-profile-ui">
                <div className="frame-16">
                  <img className="icon-heart" src="/img/icons---heart-outline@2x.svg" />
                  <div className="add-to-favorites">{addToFavorites}</div>
                </div>
              </Link>
              <p className="phone-52-55-7314-3 comfortaa-normal-black-16px">{phone525573143}</p>
            </div>
            <img className="screen-shot-2022-08-20-at-812-1" src={screenShot20220820At8121} />
            <Link to="/edit-contribution">
              <div className="frame-11">
                <img className="icons" src="/img/icons---create-outline@2x.svg" />
                <div className="edit">{edit}</div>
              </div>
            </Link>
            <a href="javascript:history.back()">
              <div className="x-6 comfortaa-normal-dove-gray-20px">{x}</div>
            </a>
          </div>
          <div className="frame-container-2">
            <a href="javascript:history.back()">
              <div className="frame-13">
                <div className="icons">
                  <div className="vector-container">
                    <img className="vector" src="/img/vector@2x.svg" />
                    <img className="vector-1" src="/img/vector-1@2x.svg" />
                    <img className="vector-2" src="/img/vector-2@2x.svg" />
                    <img className="vector-3" src="/img/vector-3@2x.svg" />
                  </div>
                </div>
                <div className="archive">{archive1}</div>
              </div>
            </a>
            <a href="javascript:history.back()">
              <div className="frame-18">
                <img className="icons" src="/img/icons---archive-outline@2x.svg" />
                <div className="archive-1 inter-normal-scarpa-flow-12px">{archive2}</div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContentCasaKanabri;
