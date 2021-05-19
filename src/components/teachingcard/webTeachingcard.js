import "./webTeachingcard.css";

const WebTeachingcard = (props) => {
    const rows = props.teaching.semesters.map((obj) => {
        return (
          <div className="web-teaching-row">
              <span className="web-teaching-semester">{obj.sem}</span>
              {obj.feedback
                  ? <a className="web-teaching-feedback-link" href={obj.feedback} target="_blank">View Feedback</a>
                  : <span className="web-teaching-feedback-unavailable">To be updated</span>}
          </div>
        );
    })
    return (
        <div className="web-teachingcard-container">
            <div className="web-teachingcard-header-code">{props.teaching.module_code}</div>
            <div className="web-teachingcard-header">{props.teaching.module}</div>
            {rows}
        </div>
    );
}

export default WebTeachingcard;
