import pic from "../../images/profile.jpg";
import React from "react";
import "./mobileNamecard.css";

const MobileNamecard = (props) => {
    return (
        <div className="mobile-name-card">
            <div className="mobile-name-card-box">
                <img className="mobile-profile-pic" src={pic} alt={"profile pic"}/>
                <div className="mobile-greetings-container">
                    <span className="mobile-greeting1">Hello, I'm</span>
                    <span className="mobile-greeting2 name">Ho Hol Yin!</span>
                </div>
            </div>
        </div>
    );
}

export default MobileNamecard;
