import React from 'react';
import './webNavbar.css';
import { moveTo } from "../../commons/commons";


const WebNavbar = (props) => {
    return (
        <div className="navbar">
            <div className="leftHalf">
                <div className="name" onClick={() => moveTo("home", props.callback)}>Ho Hol Yin</div>
            </div>
            <div className="rightHalf">
                <div className="tab-box">
                    <div className="tab" onClick={() => moveTo("home", props.callback)}>Home</div>
                </div>
                <div className="tab-box">
                    <div className="tab" onClick={() => moveTo("education", props.callback)}>Education</div>
                </div>
                <div className="tab-box">
                    <div className="tab" onClick={() => moveTo("projects", props.callback)}>Projects</div>
                </div>
                <div className="tab-box">
                    <div className="tab" onClick={() => moveTo("teaching", props.callback)}>Teaching</div>
                </div>
            </div>
        </div>
    );
};

export default WebNavbar;
