import Schoolcard from "../components/schoolcard/schoolcard";


const Education = (props) => {
    return (
        <div className="page-container">
            <div className="header-container">
                <span>Education</span>
            </div>
            <Schoolcard isMobile={props.isMobile}/>
        </div>
    )
}

export default Education;
