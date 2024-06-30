import { projects } from "../constants";
import ProjectCard from "./ProjectCard";

const Projects = () => {    
    return (
        <section className="projects">
            <h1>Projects</h1>
            <div className="cards">
                {projects.map((project) => (
                    <ProjectCard key={project.github} data={project} />
                ))}
            </div>
        </section>
    )
}

export default Projects;