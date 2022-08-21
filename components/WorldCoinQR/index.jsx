import React from "react";
import "./WorldCoinQR.sass";

function WorldCoinQR(props) {
  const { src } = props;

  return (
    <div className="container-center-horizontal">
      <div className="worldcoin-qr screen">
        <img className="screen-shot-2022-08-20-at-1157-1" src={src} />
      </div>
    </div>
  );
}

export default WorldCoinQR;
