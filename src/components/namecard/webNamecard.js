import pic from "../../images/profile.jpg";
import React from "react";
import "./webNamecard.css";

const WebNamecard = (props) => {
    return (
        <div className="web-name-card">
            <div className="web-name-card-box">
                <img className="web-profile-pic" src={pic} alt={"profile pic"}/>
                <div className="web-greetings-container">
                    <span className="web-greeting1">Hello, I'm</span>
                    <span className="web-greeting2">Ho Hol Yin!</span>
                </div>
            </div>
        </div>
    );
}

export default WebNamecard;
