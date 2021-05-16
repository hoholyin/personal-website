import WebProjectcard from "../projectcard/webProjectcard";
import MobileProjectcard from "../projectcard/mobileProjectcard";
import React from "react";

const ProjectList = (props) => {
    const projectComponents = props.projects.map((obj) => {
        return props.isMobile
            ? <MobileProjectcard proj={obj} />
            : <WebProjectcard proj={obj} />
    })
    return (
        <div className="project-list">
            {projectComponents}
        </div>
    )
}

export default ProjectList;
