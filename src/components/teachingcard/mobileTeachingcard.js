import "./mobileTeachingcard.css"

const MobileTeachingcard = (props) => {
    const rows = props.teaching.semesters.map((obj) => {
        return (
            <div className="mobile-teaching-row">
                <span className="mobile-teaching-semester">{obj.sem}</span>
                {obj.feedback
                    ? <a className="mobile-teaching-feedback-link" href={obj.feedback} target="_blank">View Feedback</a>
                    : <span className="mobile-teaching-feedback-unavailable">To be updated</span>}
            </div>
        );
    })
    return (
        <div className="mobile-teachingcard-container">
            <div className="mobile-teachingcard-header-code">{props.teaching.module_code}</div>
            <div className="mobile-teachingcard-header">{props.teaching.module}</div>
            {rows}
        </div>
    )
}

export default MobileTeachingcard;
