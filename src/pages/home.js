import Namecard from "../components/namecard/namecard.js";
import React from "react";
import "./home.css";
import ContactBar from "../components/contactBar/contactBar";

const Home = (props) => {
    const firstMessage = "I'm currently a fourth year student at the National University of Singapore"
        + ", enrolled in the Double Degree Programme for "
        + "Computer Science and Pure Mathematics."
    const secondMessage = "My interests lies in Artificial Intelligence, Software Engineering, "
        + "as well as solving mathematical problems!"
    return (
        <div className="page-container">
            <Namecard isMobile={props.isMobile}/>
            <div className="message-container">
                <span className="home-message">{firstMessage}</span>
            </div>
            <div className="message-container">
                <span className="home-message">{secondMessage}</span>
            </div>
            <ContactBar isMobile={props.isMobile} />
        </div>
    )
}

export default Home;
