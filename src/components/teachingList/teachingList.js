import React from "react";
import Teachingcard from "../teachingcard/teachingcard";
import "./teachingList.css";

const TeachingList = (props) => {
   const allTeachings = props.teachings.map((obj) => {
              return (<Teachingcard teaching={obj} />);
       });
   return (
       <div className="teaching-list">
           {allTeachings}
       </div>
   )
}

export default TeachingList;
