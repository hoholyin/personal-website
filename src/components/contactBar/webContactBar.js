import React from "react";
import "./webContactBar.css";

const WebContactBar = (props) => {
    return (
        <div className="web-contact-bar">
            <div className="web-contact-header">
                <div className="web-contact-header-line-container">
                    <hr className="web-contact-header-line" />
                </div>
                <span className="web-contact-header-text">Contact Me</span>
                <div className="web-contact-header-line-container">
                    <hr className="web-contact-header-line" />
                </div>
            </div>
        </div>
    )
}

export default WebContactBar;
