import React, { useState } from "react";
import {
  CiSearch,
  CiUser,
  CiHeart,
  CiShoppingCart,
  CiMenuFries,
} from "react-icons/ci";
import { getImageUrl } from "../../helpers/getImageUrl";
import Sidebar from "./Sidebar";
import { Link } from "react-router-dom";
import { ROUTES, navCategories } from "../../constants";
import NavDropdown from "./NavDropdown";

interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const closeNav = () => {
    setOpenNav(!openNav);
  };

  return (
    <header className="navbar">
      <Sidebar openNav={openNav} closeNav={closeNav} />
      <div className="container">
        <div className="content">
          <div className="bike-logo">
            <Link to={ROUTES.HOME}>
              <img src={getImageUrl("home", "bikelogo.svg")} alt="logo" />
            </Link>
          </div>
          <ul className="nav-menu">
            <li>
              <span>Trade-in</span>
            </li>
            {navCategories.map((item, index) => (
              <li key={index}>
                {item.category}
                <NavDropdown navOption={item.option} />
              </li>
            ))}
            {/* <NavDropdown/> */}
          </ul>
          <div className="user-menu">
            <div className="search">
              <CiSearch />
            </div>
            <div className="profile">
              <CiUser />
            </div>
            <div className="favorite">
              <CiHeart />
            </div>
            <div className="shopping-cart">
              <CiShoppingCart />
            </div>
            <div className="burger-menu" onClick={closeNav}>
              <CiMenuFries />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
