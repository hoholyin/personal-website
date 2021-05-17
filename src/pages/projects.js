import drawberry from "../images/drawberry.png";
import agileberry from "../images/agileberry.png";
import mello from "../images/mello.jpg";
import ProjectList from "../components/projectList/projectList";

const allProjects = [
    {
        name: "Mello",
        img: mello,
        desc: "Mello is an all in one family management app that brings families closer and makes family organization a breeze! It is available on the App Store and Play Store.",
        link: "https://mello-family.netlify.app/"
    },
    {
        name: "Drawberry",
        img: drawberry,
        desc: "DrawBerry is a competitive multiplayer drawing game designed for the iPad.",
        link: "https://github.com/hoholyin/DrawBerry",
    },
    {
        name: "AgileBerry",
        img: agileberry,
        desc: "AgileBerry is a project task tracker and management web application.",
        link: "https://agileberry.netlify.app/"
    },
]

const Projects = (props) => {
    return (
        <div className="page-container">
            <div className="header-container">
                <span>Projects</span>
            </div>
            <ProjectList isMobile={props.isMobile} projects={allProjects} />
        </div>
    )
}

export default Projects;
