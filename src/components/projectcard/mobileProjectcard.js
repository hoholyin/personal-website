import "./mobileProjectcard.css";
import arrow from "../../images/arrow_forward.png";

const MobileProjectcard = (props) => {
    return (
        <a className="mobile-projectcard-container" href={props.proj.link}>
            <img className="mobile-project-img" src={props.proj.img} alt="project image" />
            <span className="mobile-project-title">{props.proj.name}</span>
            <span className="web-project-desc">{props.proj.desc}</span>
            <div className="arrow-container">
                <img className="mobile-project-arrow" src={arrow} alt="arrow" />
            </div>
        </a>
    )
}

export default MobileProjectcard;
