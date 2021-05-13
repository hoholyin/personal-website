import React from 'react';
import "./mobileNavbar.css";

const MobileNavbar = (props) => {
    const openNav = () => {
        document.getElementById("mySidenav").style.width = "70%" //opens side navbar by 70 percent
        document.getElementById('backdrop').style.display = "block" //displays overlay
    }

    const closeNav = () => {
        document.getElementById("mySidenav").style.width = "0"
        document.getElementById('backdrop').style.display = "none"
    }

    return (
        <div className="mobileNavbar">
            <div id="mySidenav" className="sidenav-container">
                <span className="drawer-close-button">
                <div className="closebtn" onClick={() => closeNav()}>&times;</div>
  </span>
                <a className="sideTab" href="/home" onClick={() => closeNav()}>Home</a>
                <a className="sideTab" href="/Education" onClick={() => closeNav()}>Education</a>
                <a className="sideTab" href="/Projects" onClick={() => closeNav()}>Projects</a>
                <a className="sideTab" href="/Teaching" onClick={() => closeNav()}>Teaching</a>
            </div>
            <div className="backdrop-container" id="backdrop"/>
            <nav>
                <span onClick={() => openNav()} className="mobile-nav-open-icon">&#9776;</span>
                <div className="name">Ho Hol Yin</div>
            </nav>
        </div>
    )
}

export default MobileNavbar;
