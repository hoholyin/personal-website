import WebNavbar from "./webNavbar";
import MobileNavbar from "./mobileNavbar";
import React from "react";

const Navbar = (props) => {
    return props.isMobile
        ? <MobileNavbar callback={props.callback}/>
        : <WebNavbar callback={props.callback}/>;
}

export default Navbar;
