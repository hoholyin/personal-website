import React from 'react';
import './navbar.css';

const Navbar = (props) => {
    return (
        <div className="navbar">
            <div className="leftHalf">
                <a className="name" href="home">Ho Hol Yin</a>
            </div>
            <div className="rightHalf">
                <div className="tab-box">
                    <a className="tab" href="home">Home</a>
                </div>
                <div className="tab-box">
                    <a className="tab" href="/education">Education</a>
                </div>
                <div className="tab-box">
                    <a className="tab" href="/projects">Projects</a>
                </div>
                <div className="tab-box">
                    <a className="tab" href="/teaching">Teaching</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
