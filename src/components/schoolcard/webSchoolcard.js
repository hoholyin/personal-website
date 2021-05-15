import "./webSchoolcard.css";
import nusLogo from "../../images/nus-logo.jpg";
import {bCompCap, bCompInfo, bScCap, bScInfo, nusName} from "../../commons/constants";

const WebSchoolcard = (props) => {
    return (
        <div className="web-schoolcard-container">
            <img className="nus-logo" src={nusLogo} alt={"nus logo"} />
            <div className="web-school-info-container">
                <span className="web-school-name">{ nusName }</span>
                <div className="web-degree-container">
                    <div className="web-degree-names">
                        <div className="web-degree-row">{bCompInfo}</div>
                        <div className="web-degree-row">{bScInfo}</div>
                    </div>
                    <div className="web-degree-caps">
                        <div className="web-degree-row">{bCompCap}</div>
                        <div className="web-degree-row">{bScCap}</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebSchoolcard;
