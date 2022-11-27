import Schoolcard from "../components/schoolcard/schoolcard";
import SchoolcardYonsei from "../components/schoolcard/schoolcardYonsei";
import "./education.css"


const Education = (props) => {
    return (
        <div className="page-container">
            <div className="education-page-container">
                <div className="header-container">
                    <span>Education</span>
                </div>
                <div className="schoolcard-container">
                    <Schoolcard isMobile={props.isMobile}/>
                    <SchoolcardYonsei isMobile={props.isMobile}/>
                </div>
            </div>
        </div>
    )
}

export default Education;
