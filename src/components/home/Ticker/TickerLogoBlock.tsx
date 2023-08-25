import React from "react";
import { getImageUrl } from "../../../helpers/getImageUrl";

interface TickerLogoBlockProps {}

const TickerLogoBlock: React.FC<TickerLogoBlockProps> = () => {
  return (
    <div className="ticker__logo-block">
      <img src={getImageUrl("home", "bergamont.png")} alt="logo" />
      <img src={getImageUrl("home", "bianchi.png")} alt="logo" />
      <img src={getImageUrl("home", "bmc.png")} alt="logo" />
      <img src={getImageUrl("home", "boardman.png")} alt="logo" />
      <img src={getImageUrl("home", "brompton.png")} alt="logo" />
      <img src={getImageUrl("home", "cannondale.png")} alt="logo" />
      <img src={getImageUrl("home", "cinelli.png")} alt="logo" />
      <img src={getImageUrl("home", "cube.png")} alt="logo" />
      <img src={getImageUrl("home", "giant.png")} alt="logo" />
      <img src={getImageUrl("home", "merida.png")} alt="logo" />
      <img src={getImageUrl("home", "scott.png")} alt="logo" />
    </div>
  );
};

export default TickerLogoBlock;
