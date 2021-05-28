import "./webProjectcard.css";
import "./projectcard.css";
import {translateToTextLabel} from "../../commons/commons";

const WebProjectcard = (props) => {
    const languageClassname = "language-container " + props.proj.language;
    return (
        <a className="web-projectcard-container" href={props.proj.link} target="_blank">
            <img className="web-project-img" src={props.proj.img} alt="project image" />
            <div className="web-project-info-container">
                <span className="web-project-title">{props.proj.name}</span>
                <span className="web-project-desc">{props.proj.desc}</span>
                <div className="web-projectcard-language-container">
                    <div className={languageClassname}>{translateToTextLabel(props.proj.language)}</div>
                </div>
            </div>
        </a>
    )
}

export default WebProjectcard;
