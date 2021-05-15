import nusLogo from "../../images/nus-logo.jpg";
import "./mobileSchoolcard.css";
import {bCompCap, bCompInfo, bScCap, bScInfo, nusName} from "../../commons/constants";

const MobileSchoolcard = (props) => {
    return (
        <div className="mobile-schoolcard-container">
            <img className="nus-logo" src={nusLogo} alt={"nus logo"} />
            <div className="mobile-school-info-container">
                <span className="mobile-school-name">{ nusName }</span>
                <span className="mobile-degree-name">{ bCompInfo }</span>
                <span className="mobile-degree-cap">{ bCompCap }</span>
                <span className="mobile-degree-name">{ bScInfo }</span>
                <span className="mobile-degree-cap">{ bScCap }</span>
            </div>
        </div>
    );
}

export default MobileSchoolcard;
