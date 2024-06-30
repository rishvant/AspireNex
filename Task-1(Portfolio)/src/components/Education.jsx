import { education } from "../constants";
import "../styles/education.css";
import EducationCard from "./EducationCard";

const Education = () => {
    return (
        <section className="container-education">
            <h1>Education</h1>
            {education.map((card)=><EducationCard key={card.year} edu={card}></EducationCard>)}
        </section>
    )
}

export default Education;