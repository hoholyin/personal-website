import WebSchoolcard from "./webSchoolcard";
import MobileSchoolcard from "./mobileSchoolcard";


const Schoolcard = (props) => {
    return props.isMobile ? <MobileSchoolcard /> : <WebSchoolcard />;
}

export default Schoolcard;
