import "./webProjectcard.css";

const WebProjectcard = (props) => {
    return (
        <a className="web-projectcard-container" href={props.proj.link}>
            <img className="project-img" src={props.proj.img} alt="project image" />
            <div className="project-info-container">
                <span className="project-title">{props.proj.name}</span>
                <span className="project-desc">{props.proj.desc}</span>
            </div>
        </a>
    )
}

export default WebProjectcard;
