import React from "react";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { getImageUrl } from "../../helpers/getImageUrl";
import { Link } from "react-router-dom";
import { ROUTES, listInfoBox, listItemDropdown } from "../../constants";
import ItemDropdown from "./ItemDropdown";

interface SidebarProps {
  openNav: boolean;
  closeNav: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ openNav, closeNav }) => {
  const [activeO, setActiveO] = useState<ActiveOType>("c1");

  const openO = (id: ActiveOType) => {
    setActiveO(activeO === id ? "" : id);
  };

  const getOption = (id: ActiveOType) => {
    return activeO === id ? "active-option" : "";
  };

  const getCategory = (id: ActiveOType) => {
    return activeO === id ? "active-category" : "";
  };

  openNav
    ? (document.body.style.overflow = "hidden")
    : (document.body.style.overflow = "auto");

  return (
    <div className={openNav ? "sidebar active" : "sidebar"}>
      <div className="container">
        <div className="content">
          <div className="bike-logo-black">
            <Link to={ROUTES.HOME}>
              <img src={getImageUrl("home", "logoBlack.svg")} alt="logo" />
            </Link>
          </div>

          <div className="close-btn" onClick={closeNav}>
            <GrClose className="icon" />
          </div>
          <div className="subnav-menu">
            <div className="trade-in-btn">trade in</div>

            {listItemDropdown.map((item) => (
              <ItemDropdown
                key={item.id}
                title={item.title}
                id={item.id}
                listOption={item.listOption}
                openO={openO}
                getCategory={getCategory}
                getOption={getOption}
              />
            ))}
          </div>
          <div className="info-box">
            <h3>more info</h3>
            {listInfoBox.map((title) => (
              <p key={title}>{title}</p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
