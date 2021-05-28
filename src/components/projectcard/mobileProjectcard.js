import "./mobileProjectcard.css";
import arrow from "../../images/arrow_forward.png";
import {translateToTextLabel} from "../../commons/commons";

const MobileProjectcard = (props) => {
    const languageClassname = "language-container " + props.proj.language;
    return (
        <a className="mobile-projectcard-container" href={props.proj.link}>
            <img className="mobile-project-img" src={props.proj.img} alt="project image" />
            <span className="mobile-project-title">{props.proj.name}</span>
            <div className="mobile-projectcard-language-container">
                <div className={languageClassname}>{translateToTextLabel(props.proj.language)}</div>
            </div>
            <span className="mobile-project-desc">{props.proj.desc}</span>
            <div className="arrow-container">
                <img className="mobile-project-arrow" src={arrow} alt="arrow" />
            </div>
        </a>
    )
}

export default MobileProjectcard;
