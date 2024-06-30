import { Link } from "react-router-dom";
import "../styles/project.css";

const ProjectCard = ({data}) => {
    return (
        <div className="project-container">
            <div className="thumbnail" style={{ backgroundImage: `url(${data.image})` }}>
            </div>
            <div className="lower">
                <p className="content">{data.title}<br /></p>
                <div className="links">
                    <Link to={data.github} target="_blank" className="btn" >Github</Link>
                    <Link to={data.live} target="_blank" className="btn" >Live</Link>
                </div>
            </div>
        </div>
    )
}

export default ProjectCard;