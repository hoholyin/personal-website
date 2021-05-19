import MobileTeachingcard from "./mobileTeachingcard";
import WebTeachingcard from "./webTeachingcard";

const Teachingcard = (props) => {
    return props.isMobile ? <MobileTeachingcard teaching={props.teaching}/> : <WebTeachingcard teaching={props.teaching}/>;
}

export default Teachingcard;
