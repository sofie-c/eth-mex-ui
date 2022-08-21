import React from "react";
import { Link } from "react-router-dom";
import "./VerifiedProfileUI.sass";

function VerifiedProfileUI(props) {
  const { place, circledMenu1, checkmark, circledMenu2, frame5, frame4, ellipse1 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="verified-profile-ui screen">
        <div className="overlap-group1-5">
          <div className="rectangle-7-2"></div>
          <a href="javascript:ShowOverlay('new-contribution', 'animate-appear');">
            <div className="post-button">
              <div className="overlap-group-6">
                <div className="place comfortaa-normal-white-14px">{place}</div>
              </div>
            </div>
          </a>
          <div className="page-content-2">
            <div className="overlap-group-7">
              <img className="circled-menu-3" src={circledMenu1} />
              <div className="frame-3-1"></div>
            </div>
            <div className="section-divider-container">
              <img className="section-divider-2" src="/img/section-divider-3@2x.svg" />
              <img className="section-divider-3" src="/img/section-divider-2@2x.svg" />
            </div>
          </div>
          <Link to="/content-casa-kanabri">
            <img className="content-9" src="/img/content-5@2x.svg" />
          </Link>
          <img className="content-10" src="/img/content-6@2x.svg" />
          <img className="content-11" src="/img/content-7@2x.svg" />
          <img className="content-12" src="/img/content-8@2x.svg" />
          <img className="content-8" src="/img/content-9@2x.svg" />
          <img className="content-8" src="/img/content-10@2x.svg" />
          <img className="user-content-1" src="/img/user-content-1@2x.svg" />
          <img
            className="heya-nice-to-meet-yo-1"
            src="/img/heya--nice-to-meet-you--i-m-a-freelance-web-designer-and-ui-ux-d@2x.svg"
          />
          <img className="top-contributions" src="/img/top-contributions@2x.svg" />
          <img className="checkmark" src={checkmark} />
          <img className="group-6" src="/img/group-6@2x.svg" />
          <a href="javascript:ShowOverlay('navigation-sidebar', 'animate-appear');">
            <img className="circled-menu-4" src={circledMenu2} />
          </a>
        </div>
        <div className="overlap-group3">
          <div className="frame-container-1">
            <img className="frame-5-2" src={frame5} />
            <img className="frame-4-2" src={frame4} />
          </div>
          <img className="ellipse-1" src={ellipse1} />
        </div>
      </div>
    </div>
  );
}

export default VerifiedProfileUI;
