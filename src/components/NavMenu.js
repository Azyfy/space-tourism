import "./NavMenu.scss"

import { useState, useEffect } from "react"
import {
  Link
} from "react-router-dom";

function NavMenu() {

  const [ locationPath, setLocationPath ] = useState(window.location.pathname)

  useEffect( () => {

    document.querySelectorAll(".nav-tab").forEach(e => {
      e.style.borderBottom = "none"
    })

    if( locationPath === "/" ) {
      document.getElementById("home-nav").style.borderBottom = "3px solid white"
    }
    else {
      document.getElementById(`${locationPath.slice(1)}-nav`).style.borderBottom = "3px solid white"
    }

  }, [locationPath])

    const openMenu = () => {
      document.getElementById("nav").style.display = "block"
      document.getElementById("menu-icon").style.display = "none"
    }

    const closeMenu = () => {
      document.getElementById("nav").style.display = "none"
      document.getElementById("menu-icon").style.display = "block"
    }

    function styleNavTab (e) {

      document.querySelectorAll(".nav-tab").forEach(e => {
        e.style.borderBottom = "none"
      })
      e.target.style.borderBottom = "3px solid white"
    }

    return (
      <div className="NavMenu">
        <img id="logo" src="./assets/shared/logo.svg" alt="logo" />
        <img id="menu-icon" onClick={openMenu} src="./assets/shared/icon-hamburger.svg" alt="menu" />

        <div id="nav" >
          <img id="close-icon" onClick={closeMenu} src="./assets/shared/icon-close.svg" alt="close" />
          <nav>
            <Link to="/" onClick={ () => { closeMenu(); setLocationPath("/") }} > <span > 00 </span> HOME </Link>
            <Link to="/destination" onClick={ () => { closeMenu(); setLocationPath("/destination") }} > <span> 01 </span> DESTINATION </Link>
            <Link to="/crew" onClick={ () => { closeMenu(); setLocationPath("/crew") }} > <span> 02 </span> CREW </Link>
            <Link to="/technology" onClick={ () => { closeMenu(); setLocationPath("/technology") }} > <span> 03 </span> TECHNOLOGY </Link>
          </nav>
        </div>

        <nav id="ls-nav" >
            <Link to="/" className="nav-tab" id="home-nav" onClick={styleNavTab} >  00  HOME </Link>
            <Link to="/destination" className="nav-tab" id="destination-nav" onClick={styleNavTab} >  01  DESTINATION </Link>
            <Link to="/crew" className="nav-tab" id="crew-nav" onClick={styleNavTab} >  02  CREW </Link>
            <Link to="/technology" className="nav-tab" id="technology-nav" onClick={styleNavTab} >  03  TECHNOLOGY </Link>
        </nav>
       
      </div>
    );
  }
  
  export default NavMenu;