import "../styles/education.css";

const EducationCard = ({edu}) => {
    return (
        <div className="item">
            <img src={edu.logo} />
            <div className="dots">
                <span className="point"></span>
                <span className="line"></span>
            </div>
            <div className="content-education">
                <h3>{edu.head}</h3>
                <p>{edu.degree} {edu.stream}</p>
                <div className="year">
                    <span>{edu.year}</span>
                </div>
            </div>
        </div>
    )
}

export default EducationCard;