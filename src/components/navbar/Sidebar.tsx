import React from "react";
import { useState } from "react";
import { GrClose } from "react-icons/gr";
import { FaChevronDown } from "react-icons/fa";
import { getImageUrl } from "../../helpers/getImageUrl";
import { Link } from "react-router-dom";
import { ROUTES } from "../../constants";

interface SidebarProps {
  openNav: boolean;
  closeNav: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ openNav, closeNav }) => {
  const [activeO, setActiveO] = useState<string>("c1");

  const openO = (id: string) => {
    setActiveO(activeO === id ? "" : id);
  };

  const getOption = (id: string) => {
    return activeO === id ? "active-option" : "";
  };

  const getCategory = (id: string) => {
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
            <div className="dropdown-sidebar">
              <div
                id="c1"
                onClick={() => openO("c1")}
                className={`box-option  ${getOption("c1")}`}
              >
                <p>Bicycles</p>
                <span className="chevron-icon">
                  <FaChevronDown />
                </span>
              </div>
              <ul
                id="c1"
                onClick={() => openO("c1")}
                className={`box-category ${getCategory("c1")}`}
              >
                <li>Mountain bikes</li>
                <li>City ​bikes</li>
                <li>Road bikes</li>
                <li>Gravel bikes</li>
                <li>Track bikes</li>
                <li>Triathlon bikes</li>
                <li>Full suspension bikes</li>
                <li>Electric bikes</li>
                <li>Women's bikes</li>
                <li>Children's bicycles</li>
              </ul>
            </div>

            <div className="dropdown-sidebar">
              <div
                id="c2"
                onClick={() => openO("c2")}
                className={`box-option  ${getOption("c2")}`}
              >
                <p>Parts</p>
                <span className="chevron-icon">
                  <FaChevronDown />
                </span>
              </div>
              <ul
                id="c2"
                onClick={() => openO("c2")}
                className={`box-category ${getCategory("c2")}`}
              >
                <li>Part 1</li>
                <li>Part 2</li>
                <li>Part 3</li>
                <li>Part 4</li>
                <li>Part 5</li>
                <li>Part 6</li>
              </ul>
            </div>

            <div className="dropdown-sidebar">
              <div
                id="c3"
                onClick={() => openO("c3")}
                className={`box-option  ${getOption("c3")}`}
              >
                <p>Equipment</p>
                <span className="chevron-icon">
                  <FaChevronDown />
                </span>
              </div>
              <ul
                id="c3"
                onClick={() => openO("c3")}
                className={`box-category ${getCategory("c3")}`}
              >
                <li>Part 1</li>
                <li>Part 2</li>
                <li>Part 3</li>
                <li>Part 4</li>
                <li>Part 5</li>
                <li>Part 6</li>
              </ul>
            </div>

            <div className="dropdown-sidebar">
              <div
                id="c4"
                onClick={() => openO("c4")}
                className={`box-option  ${getOption("c4")}`}
              >
                <p>Accessories</p>
                <span className="chevron-icon">
                  <FaChevronDown />
                </span>
              </div>
              <ul
                id="c4"
                onClick={() => openO("c4")}
                className={`box-category ${getCategory("c4")}`}
              >
                <li>Part 1</li>
                <li>Part 2</li>
                <li>Part 3</li>
                <li>Part 4</li>
                <li>Part 5</li>
                <li>Part 6</li>
              </ul>
            </div>

            <div className="dropdown-sidebar">
              <div
                id="c5"
                onClick={() => openO("c5")}
                className={`box-option  ${getOption("c5")}`}
              >
                <p>Bike Trainer</p>
                <span className="chevron-icon">
                  <FaChevronDown />
                </span>
              </div>
              <ul
                id="c5"
                onClick={() => openO("c5")}
                className={`box-category ${getCategory("c5")}`}
              >
                <li>Part 1</li>
                <li>Part 2</li>
                <li>Part 3</li>
                <li>Part 4</li>
                <li>Part 5</li>
                <li>Part 6</li>
              </ul>
            </div>
          </div>
          <div className="info-box">
            <h3>more info</h3>
            <p>About us</p>
            <p>Workshop</p>
            <p>Storage</p>
            <p>Warranty</p>
            <p>User Agreement</p>
            <p>Delivery and Payment</p>
            <p>Blog</p>
            <p>Contacts</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
