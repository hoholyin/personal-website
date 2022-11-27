import MobileSchoolcardYonsei from "./mobileSchoolcardYonsei";
import WebSchoolcardYonsei from "./webSchoolcardYonsei";
import React from "react";


const SchoolcardYonsei = (props) => {
    return props.isMobile ? <MobileSchoolcardYonsei/> : <WebSchoolcardYonsei />;
}

export default SchoolcardYonsei;
