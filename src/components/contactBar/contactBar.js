import WebContactBar from "./webContactBar";

const ContactBar = (props) => {
    return props.isMobile ? <WebContactBar /> : <WebContactBar />;
}

export default ContactBar;
