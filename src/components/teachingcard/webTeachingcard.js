import "./webTeachingcard.css";

const WebTeachingcard = (props) => {
    const feedbackLink = (feedback) => {
        if (!feedback.includes("/")) {
            return (
                <span className="web-teaching-feedback-unavailable">{feedback}</span>
            )
        }
        return (
            <a className="web-teaching-feedback-link" href={feedback} target="_blank">View Feedback</a>
        )
}
const rows = props.teaching.semesters.map((obj) => {
        return (
          <div className="web-teaching-row">
              <span className="web-teaching-semester">{obj.sem}</span>
              {feedbackLink(obj.feedback)}
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
