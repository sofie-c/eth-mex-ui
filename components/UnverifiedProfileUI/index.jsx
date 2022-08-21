import React from "react";
import { Link } from "react-router-dom";
import "./UnverifiedProfileUI.sass";

function UnverifiedProfileUI(props) {
  const { circledMenu1, post, circledMenu2, frame5, frame4 } = props;

  return (
    <div className="container-center-horizontal">
      <div className="unverified-profile-ui screen">
        <a href="javascript:ShowOverlay('navigation-sidebar', 'animate-appear');">
          <img className="circled-menu-1" src={circledMenu1} />
        </a>
        <div className="overlap-group-container">
          <div className="overlap-group2-1">
            <div className="overlap-group-2">
              <a href="javascript:ShowOverlay('verification-check', 'animate-appear');">
                <img className="rectangle-3" src="/img/rectangle-3@2x.svg" />
              </a>
              <div className="post comfortaa-normal-white-14px">{post}</div>
            </div>
            <div className="page-content-1">
              <div className="overlap-group1-2">
                <img className="section-divider" src="/img/section-divider@2x.svg" />
                <img className="section-divider-1" src="/img/section-divider-1@2x.svg" />
                <div className="rectangle-7-1"></div>
              </div>
              <div className="overlap-group-3">
                <img className="circled-menu-2" src={circledMenu2} />
                <div className="frame-3"></div>
              </div>
            </div>
            <img className="content-1" src="/img/content@2x.svg" />
            <img className="content-2" src="/img/content-1@2x.svg" />
            <img className="content-3" src="/img/content-2@2x.svg" />
            <img className="content-4" src="/img/content-3@2x.svg" />
            <img className="user-content" src="/img/user-content@2x.svg" />
            <img
              className="heya-nice-to-meet-yo"
              src="/img/heya--nice-to-meet-you--i-m-a-freelance-web-designer-and-ui-ux-d@2x.svg"
            />
            <Link to="/verification-check">
              <img className="verify-to-contribute" src="/img/verify-to-contribute-@2x.svg" />
            </Link>
            <img className="content-5" src="/img/content-4@2x.svg" />
          </div>
          <div className="frame-container">
            <img className="frame-5-1" src={frame5} />
            <img className="frame-4-1" src={frame4} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default UnverifiedProfileUI;
