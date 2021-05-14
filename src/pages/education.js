import Schoolcard from "../components/schoolcard/schoolcard";


const Education = (props) => {
    return (
        <div className="page-container">
            <Schoolcard isMobile={props.isMobile}/>
        </div>
    )
}

export default Education;
