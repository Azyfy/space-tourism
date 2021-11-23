import logo from "../assets/shared/logo.svg"
import menuIcon from "../assets/shared/icon-hamburger.svg"
import closeIcon from "../assets/shared/icon-close.svg"
import "./NavMenu.scss"

import {
  Link
} from "react-router-dom";

function NavMenu() {

    const openMenu = () => {
      document.getElementById("nav").style.display = "block"
      document.getElementById("menu-icon").style.display = "none"
    }

    const closeMenu = () => {
      document.getElementById("nav").style.display = "none"
      document.getElementById("menu-icon").style.display = "block"
    }

    return (
      <div className="NavMenu">
        <img id="logo" src={logo} alt="logo" />
        <img id="menu-icon" onClick={openMenu} src={menuIcon} alt="menu" />

        <div id="nav" >
          <img id="close-icon" onClick={closeMenu} src={closeIcon} alt="close" />
          <nav>
            <Link to="/"> <span> 00 </span> HOME </Link>
            <Link to="/destination"> <span> 01 </span> DESTINATION </Link>
            <Link to="/crew"> <span> 02 </span> CREW </Link>
            <Link to="/technology"> <span> 03 </span> TECHNOLOGY </Link>
          </nav>
        </div>
       
      </div>
    );
  }
  
  export default NavMenu;