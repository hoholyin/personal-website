import "./webSchoolcard.css";
import nusLogo from "../../images/nus-logo.jpg";

const WebSchoolcard = (props) => {
    return (
        <div className="web-schoolcard-container">
            <img className="nus-logo" src={nusLogo} alt={"nus logo"} />
        </div>
    )
}

export default WebSchoolcard;
