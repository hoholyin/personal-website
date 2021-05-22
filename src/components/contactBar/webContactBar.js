import React from "react";
import "./webContactBar.css";
import emailIcon from "../../images/email.png";

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
            <div className="web-email-container">
                <img className="web-email-icon" src={emailIcon} alt="email icon"/>
                <div className="web-email-address-container">
                    <a href="mailto:holyin97@gmail.com" className="web-email">holyin97@gmail.com</a>
                </div>
            </div>
        </div>
    )
}

export default WebContactBar;
