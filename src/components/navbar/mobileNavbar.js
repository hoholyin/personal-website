import React from 'react';
import "./mobileNavbar.css";
import {moveTo} from "../../commons/commons";

const MobileNavbar = (props) => {
    const openNav = () => {
        document.getElementById("mySidenav").style.width = "70%" //opens side navbar by 70 percent
        document.getElementById('backdrop').style.display = "block" //displays overlay
    }

    const closeNav = (dest, callback) => {
        document.getElementById("mySidenav").style.width = "0"
        document.getElementById('backdrop').style.display = "none"
        moveTo(dest, callback)
    }

    return (
        <div className="mobileNavbar">
            <div id="mySidenav" className="sidenav-container">
                <span className="drawer-close-button">
                <div className="closebtn" onClick={() => closeNav()}>&times;</div>
  </span>
                <div className="sideTab" onClick={() => closeNav("home", props.callback)}>Home</div>
                <div className="sideTab" onClick={() => closeNav("education", props.callback)}>Education</div>
                <div className="sideTab" onClick={() => closeNav("projects", props.callback)}>Projects</div>
                <div className="sideTab" onClick={() => closeNav("teaching", props.callback)}>Teaching</div>
            </div>
            <div className="backdrop-container" id="backdrop"/>
            <nav>
                <span onClick={() => openNav()} className="mobile-nav-open-icon">&#9776;</span>
                <div className="sideName">Ho Hol Yin</div>
            </nav>
        </div>
    )
}

export default MobileNavbar;
