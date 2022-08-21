import React from "react";
import { Link } from "react-router-dom";
import Frame7 from "../Frame7";
import Frame6 from "../Frame6";
import "./NavigationSidebar.sass";

function NavigationSidebar(props) {
  const {
    profilePicture,
    jackThomeson,
    uiUxDesigner,
    search,
    bookmarks,
    frame7Props,
    frame61Props,
    frame62Props,
  } = props;

  return (
    <div className="navigation-sidebar screen">
      <div className="navigation-sidebar-1">
        <img className="profile-picture" src={profilePicture} />
        <Link to="/verified-profile-ui">
          <div className="frame-5-3">
            <div className="frame-4-3">
              <div className="jack-thomeson">{jackThomeson}</div>
              <div className="uiux-designer inter-normal-scarpa-flow-12px">{uiUxDesigner}</div>
            </div>
          </div>
        </Link>
        <div className="frame-3-2 border-1px-mischka">
          <div className="search">{search}</div>
          <img className="icon-search" src="/img/icons---search-outline@2x.svg" />
        </div>
        <div className="frame-12">
          <Link to="/community-landing-page">
            <div className="frame-7">
              <div className="bookmarks inter-normal-charade-14px">{bookmarks}</div>
            </div>
          </Link>
          <Frame7>{frame7Props.children}</Frame7>
        </div>
        <Link to="/verified-profile-ui">
          <div className="frame-13-1">
            <Frame6>{frame61Props.children}</Frame6>
            <Frame6>{frame62Props.children}</Frame6>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default NavigationSidebar;
