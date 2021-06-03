import "./webProjectcard.css";
import "./projectcard.css";
import {translateToTextLabel} from "../../commons/commons";

const WebProjectcard = (props) => {
    const languageRowComponents = props.proj.languages.map((language) => {
        const languageClassname = "language-container " + language;
        return (
            <div className="web-projectcard-language-container">
                <div className={languageClassname}>{translateToTextLabel(language)}</div>
            </div>
        )
    })

    return (
        <a className="web-projectcard-container" href={props.proj.link} target="_blank">
            <img className="web-project-img" src={props.proj.img} alt="project image" />
            <div className="web-project-info-container">
                <span className="web-project-title">{props.proj.name}</span>
                <span className="web-project-desc">{props.proj.desc}</span>
                <div className="web-language-row">
                    {languageRowComponents}
                </div>
            </div>
        </a>
    )
}

export default WebProjectcard;
