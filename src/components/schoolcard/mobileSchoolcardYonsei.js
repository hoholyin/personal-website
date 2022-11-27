import yonseiLogo from "../../images/yonsei-logo.png";
import "./mobileSchoolcard.css";

const MobileSchoolcardYonsei = (props) => {
    return (
        <div className="mobile-schoolcard-container">
            <img className="nus-logo" src={yonseiLogo} alt={"yonsei logo"} />
            <div className="mobile-school-info-container">
                <span className="mobile-school-name">Yonsei University</span>
                <span className="mobile-degree-name">Introductory Psychology</span>
                <span className="mobile-degree-cap">CS</span>
            </div>
        </div>
    );
}

export default MobileSchoolcardYonsei;
