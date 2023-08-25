import React, { useState } from 'react'
import {CiSearch,CiUser,CiHeart,CiShoppingCart,CiMenuFries} from "react-icons/ci"
import { getImageUrl } from "../../helpers/getImageUrl";
import Sidebar from "./Sidebar";
 
interface NavbarProps {}

const Navbar: React.FC<NavbarProps> = () => {
    const [openNav, setOpenNav] = useState<boolean>(false);

    const closeNav = () => {
        setOpenNav(!openNav);
      };

    return (
    <header className='navbar'>
        <Sidebar openNav={openNav} closeNav={closeNav}/>
        <div className="container">
            <div className="content">
            <div className="bike-logo">
            <img src={getImageUrl("home", "bikelogo.svg")} alt="logo" />
        </div>
        <ul className="nav-menu">
            <li>
                Trade in
            </li>
            <li>
                bicycles
            </li>
            <li>
                bicycles
            </li>
            <li>
                parts
            </li>
            <li>
                equipment
            </li>
            <li>
                accessories
            </li>
            <li>
                bike trainer
            </li>
        </ul>
        <div className="user-menu">
            <div className="search"><CiSearch/></div>
            <div className="profile"><CiUser/></div>
            <div className="favorite"><CiHeart/></div>
            <div className="shopping-cart"><CiShoppingCart/></div>
            <div className="burger-menu" onClick={closeNav} >
                <CiMenuFries/>
            </div>
        </div>
            </div>
        </div>
    </header>
)};

export default Navbar;
