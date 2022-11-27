import "./webSchoolcard.css";
import yonseiLogo from "../../images/yonsei-logo.png";

const WebSchoolcardYonsei = (props) => {
    return (
        <div className="web-schoolcard-container">
            <img className="nus-logo" src={yonseiLogo} alt={"yonsei logo"} />
            <div className="web-school-info-container">
                <span className="web-school-name">Yonsei University</span>
                <div className="web-degree-container">
                    <div className="web-degree-names">
                        <div className="web-degree-row">Introductory Psychology</div>
                    </div>
                    <div className="web-degree-caps">
                        <div className="web-degree-row">CS</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default WebSchoolcardYonsei;
