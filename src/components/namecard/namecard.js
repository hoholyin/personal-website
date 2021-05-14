import React from "react";
import WebNamecard from "./webNamecard";
import MobileNamecard from "./mobileNamecard";

const Namecard = (props) => {
    return (
        props.isMobile ? <MobileNamecard /> : <WebNamecard />
    )
}

export default Namecard;
