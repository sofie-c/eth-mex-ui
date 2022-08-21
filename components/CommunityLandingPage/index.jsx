import React from "react";
import { Link } from "react-router-dom";
import "./CommunityLandingPage.sass";

function CommunityLandingPage(props) {
  const {
    frame4,
    circledMenu,
    frame5,
    contentImage1,
    contentTitle1,
    contentLocation1,
    contentImage2,
    contentTitle2,
    contentLocation2,
    contentImage3,
    contentTitle3,
    contentLocation3,
    contentImage4,
    contentTitle4,
    contentLocation4,
    contentImage5,
    contentTitle5,
    contentTitle6,
    contentLocation5,
  } = props;

  return (
    <div className="container-center-horizontal">
      <div className="community-landing-page screen">
        <div className="overlap-group5">
          <div className="rectangle-7"></div>
          <img className="frame-4" src={frame4} />
          <img className="page-content" src="/img/page-content@1x.svg" />
          <a href="javascript:ShowOverlay('navigation-sidebar', 'animate-appear');">
            <img className="circled-menu" src={circledMenu} />
          </a>
          <img className="frame-5" src={frame5} />
          <div className="content-container">
            <div className="content-square border-1px-black"></div>
            <img className="content-image" src={contentImage1} />
            <div className="content-title-1 comfortaa-normal-black-14px">{contentTitle1}</div>
            <div className="content-location comfortaa-normal-black-10px">{contentLocation1}</div>
          </div>
          <div className="content-container-1">
            <div className="content-square border-1px-black"></div>
            <img className="content-image" src={contentImage2} />
            <div className="content-title-2 comfortaa-normal-black-14px">{contentTitle2}</div>
            <div className="content-location comfortaa-normal-black-10px">{contentLocation2}</div>
          </div>
          <div className="content-container-2">
            <div className="content-square border-1px-black"></div>
            <img className="content-image-1" src={contentImage3} />
            <div className="content-title-1 comfortaa-normal-black-14px">{contentTitle3}</div>
            <div className="content-location comfortaa-normal-black-10px">{contentLocation3}</div>
          </div>
          <Link to="/content-casa-kanabri">
            <div className="content">
              <div className="content-container-3">
                <div className="content-square border-1px-black"></div>
                <img className="content-image" src={contentImage4} />
                <div className="content-title-1 comfortaa-normal-black-14px">{contentTitle4}</div>
                <div className="content-location comfortaa-normal-black-10px">{contentLocation4}</div>
              </div>
            </div>
          </Link>
          <div className="content-container-4">
            <div className="content-square border-1px-black"></div>
            <img className="content-image" src={contentImage5} />
            <div className="content-title-3">{contentTitle5}</div>
            <div className="content-title-4">{contentTitle6}</div>
            <div className="content-location comfortaa-normal-black-10px">{contentLocation5}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CommunityLandingPage;
