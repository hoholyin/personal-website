import "./webProjectcard.css";

const WebProjectcard = (props) => {
    return (
        <a className="web-projectcard-container" href={props.proj.link} target="_blank">
            <img className="web-project-img" src={props.proj.img} alt="project image" />
            <div className="web-project-info-container">
                <span className="web-project-title">{props.proj.name}</span>
                <span className="web-project-desc">{props.proj.desc}</span>
            </div>
        </a>
    )
}

export default WebProjectcard;
