import React from "react";
import "./teachingList.css";
import Teachingcard from "../teachingcard/teachingcard";

const TeachingList = (props) => {
   const allTeachings = props.teachings.map((obj) => {
              return (<Teachingcard isMobile={props.isMobile} teaching={obj} />);
       });
   return (
       <div className="teaching-list">
           {allTeachings}
       </div>
   )
}

export default TeachingList;
