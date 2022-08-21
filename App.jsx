import "./App.sass";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import VerificationCheck from "./components/VerificationCheck";
import NewContributionPopulated4 from "./components/NewContributionPopulated4";
import CommunityLandingPage from "./components/CommunityLandingPage";
import UnverifiedProfileUI from "./components/UnverifiedProfileUI";
import NewContributionPopulated2 from "./components/NewContributionPopulated2";
import NewContributionPopulated3 from "./components/NewContributionPopulated3";
import VerifiedProfileUI from "./components/VerifiedProfileUI";
import NewContributionPopulated1 from "./components/NewContributionPopulated1";
import WorldCoinQR from "./components/WorldCoinQR";
import NewContribution from "./components/NewContribution";
import EditContribution from "./components/EditContribution";
import ContentCasaKanabri from "./components/ContentCasaKanabri";
import NavigationSidebar from "./components/NavigationSidebar";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/verification-check">
          <VerificationCheck {...verificationCheckData} />
        </Route>
        <Route path="/new-contribution-populated-4">
          <NewContributionPopulated4 {...newContributionPopulated4Data} />
        </Route>
        <Route path="/community-landing-page">
          <CommunityLandingPage {...communityLandingPageData} />
        </Route>
        <Route path="/:path(|unverified-profile-ui)">
          <UnverifiedProfileUI
            circledMenu1="/img/frame-5-1@1x.png"
            post="Verify"
            circledMenu2="/img/circled-menu-2@1x.png"
            frame5="/img/frame-5-1@1x.png"
            frame4="/img/frame-5-1@1x.png"
          />
        </Route>
        <Route path="/new-contribution-populated-2">
          <NewContributionPopulated2 {...newContributionPopulated2Data} />
        </Route>
        <Route path="/new-contribution-populated-3">
          <NewContributionPopulated3 {...newContributionPopulated3Data} />
        </Route>
        <Route path="/verified-profile-ui">
          <VerifiedProfileUI
            place="Post"
            circledMenu1="/img/circled-menu-4@1x.png"
            checkmark="/img/checkmark@2x.png"
            circledMenu2="/img/circled-menu@1x.png"
            frame5="/img/frame-5-2@1x.png"
            frame4="/img/frame-5-2@1x.png"
            ellipse1="/img/ellipse-1@2x.png"
          />
        </Route>
        <Route path="/new-contribution-populated-1">
          <NewContributionPopulated1 {...newContributionPopulated1Data} />
        </Route>
        <Route path="/worldcoin-qr">
          <WorldCoinQR src="/img/screen-shot-2022-08-20-at-11-57-1@1x.png" />
        </Route>
        <Route path="/new-contribution">
          <NewContribution {...newContributionData} />
        </Route>
        <Route path="/edit-contribution">
          <EditContribution {...editContributionData} />
        </Route>
        <Route path="/content-casa-kanabri">
          <ContentCasaKanabri {...contentCasaKanabriData} />
        </Route>
        <Route path="/navigation-sidebar">
          <NavigationSidebar {...navigationSidebarData} />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
const primaryButtonData = {
    children: <React.Fragment>Connect<br />WorldCoin Wallet</React.Fragment>,
};

const primaryButton2Data = {
    children: "Continue without verifying",
};

const verificationCheckData = {
    spanText1: <React.Fragment>Success!<br /></React.Fragment>,
    spanText2: "",
    spanText3: <React.Fragment>Would you like to verify your personhood?<br /></React.Fragment>,
    spanText4: "",
    spanText5: "This provides you the ability to contribute to your space",
    spanText6: <React.Fragment>Not ready yet?<br /></React.Fragment>,
    spanText7: "",
    spanText8: "No worries, feel free to browse around and verify when you’re ready to contribute.",
    primaryButtonProps: primaryButtonData,
    primaryButton2Props: primaryButton2Data,
};

const input1Data = {
    children: "casa.jpg",
};

const input21Data = {
    children: "+52 55 7314 3030",
};

const input22Data = {
    children: "Avenida Paseo de La Reforma 169 Colonia Renacimiento, Mexico City 06500 Mexico",
    className: "input-9",
};

const input3Data = {
    children: "Casa Kanabri",
    className: "input-2",
};

const newContributionPopulated4Data = {
    x: "X",
    contentTitle: "New Contribution",
    submit: "Submit",
    phone: "Phone:",
    image: "Image:",
    notes: "Notes:",
    title: "Title",
    address: "Address:",
    input1Props: input1Data,
    input21Props: input21Data,
    input22Props: input22Data,
    input2Props: input3Data,
};

const input23Data = {
    children: "Avenida Paseo de La Reforma 169 Colonia Renacimiento, Mexico City 06500 Mexico",
    className: "input-10",
};

const input4Data = {
    children: "Casa Kanabri",
    className: "input-3",
};

const newContributionPopulated2Data = {
    x: "X",
    contentTitle: "New Contribution",
    submit: "Submit",
    phone: "Phone:",
    image: "Image:",
    notes: "Notes:",
    title: "Title",
    address: "Address:",
    input2Props: input23Data,
    inputProps: input4Data,
};

const input24Data = {
    children: "+52 55 7314 3030",
};

const input25Data = {
    children: "Avenida Paseo de La Reforma 169 Colonia Renacimiento, Mexico City 06500 Mexico",
    className: "input-12",
};

const input5Data = {
    children: "Casa Kanabri",
    className: "input-4",
};

const newContributionPopulated3Data = {
    x: "X",
    contentTitle: "New Contribution",
    submit: "Submit",
    phone: "Phone:",
    image: "Image:",
    notes: "Notes:",
    title: "Title",
    address: "Address:",
    input21Props: input24Data,
    input22Props: input25Data,
    inputProps: input5Data,
};

const input6Data = {
    children: "Casa Kanabri",
    className: "input-5",
};

const newContributionPopulated1Data = {
    x: "X",
    contentTitle: "New Contribution",
    submit: "Submit",
    phone: "Phone:",
    image: "Image:",
    notes: "Notes:",
    title: "Title",
    address: "Address:",
    inputProps: input6Data,
};

const newContributionData = {
    x: "X",
    contentTitle: "New Contribution",
    submit: "Submit",
    phone: "Phone:",
    image: "Image:",
    notes: "Notes:",
    title: "Title",
    address: "Address:",
};

const input7Data = {
    children: "casa.jpg",
};

const input26Data = {
    children: "+52 55 7314 3030",
};

const input27Data = {
    children: "Avenida Paseo de La Reforma 169 Colonia Renacimiento, Mexico City 06500 Mexico",
    className: "input-14",
};

const input8Data = {
    children: "Casa Kanabri",
    className: "input-7",
};

const editContributionData = {
    contentTitle: "Edit Contribution",
    x: "X",
    phone: "Phone:",
    image: "Image:",
    notes: "Notes:",
    title: "Title",
    address: "Address:",
    xdelete: "Delete",
    submit: "Submit",
    input1Props: input7Data,
    input21Props: input26Data,
    input22Props: input27Data,
    input2Props: input8Data,
};

const frame7Data = {
    children: "Stats",
};

const frame61Data = {
    children: "Settings",
};

const frame62Data = {
    children: "Logout",
};

const navigationSidebarData = {
    profilePicture: "/img/profile-picture@2x.png",
    jackThomeson: "Vani Swarna",
    uiUxDesigner: "UI/UX Designer",
    search: "Search",
    bookmarks: "Community Page",
    frame7Props: frame7Data,
    frame61Props: frame61Data,
    frame62Props: frame62Data,
};

const communityLandingPageData = {
    frame4: "/img/frame-4@1x.png",
    circledMenu: "/img/circled-menu@1x.png",
    frame5: "/img/frame-4@1x.png",
    contentImage1: "/img/content-image@2x.png",
    contentTitle1: "Casa Prim",
    contentLocation1: "Mexico City, Mexico",
    contentImage2: "/img/content-image-1@2x.png",
    contentTitle2: "Punto Gozadora",
    contentLocation2: "Mexico City, Mexico",
    contentImage3: "/img/content-image-2@2x.png",
    contentTitle3: "Incendiarias",
    contentLocation3: "Mexico City, Mexico",
    contentImage4: "/img/content-image-3@2x.png",
    contentTitle4: "Casa Kanabri",
    contentLocation4: "Mexico City, Mexico",
    contentImage5: "/img/content-image-4@2x.png",
    contentTitle5: "",
    contentTitle6: "Clarice- Cafe y Literatura",
    contentLocation5: "Mexico City, Mexico",
};

const contentCasaKanabriData = {
    contentImage: "/img/content-image-5@2x.png",
    contentTitle: "Casa Kanabri",
    contentLocation: "Mexico City, Mexico",
    addToFavorites: "Add to my list",
    phone525573143: <React.Fragment>Phone: +52 55 7314 3030<br /><br />Address: Avenida Paseo de La Reforma 169 Colonia Renacimiento, Mexico City 06500 Mexico</React.Fragment>,
    screenShot20220820At8121: "/img/screen-shot-2022-08-20-at-8-12-1@2x.png",
    edit: "Edit",
    x: "X",
    archive1: "Move Up",
    archive2: "Move Down",
};

