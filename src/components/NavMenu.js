import logo from "../assets/shared/logo.svg"
import menuIcon from "../assets/shared/icon-hamburger.svg"
import closeIcon from "../assets/shared/icon-close.svg"
import "./NavMenu.scss"

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
            <p> <span> 00 </span> HOME </p>
            <p> <span> 01 </span> DESTINATION </p>
            <p> <span> 02 </span> CREW </p>
            <p> <span> 03 </span> TECHNOLOGY </p>
          </nav>
        </div>
       
      </div>
    );
  }
  
  export default NavMenu;