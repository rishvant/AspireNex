import "../styles/skills.css";
import Card from "../components/Card";
import { skillsCards } from "../constants";

const Skills = () => {
    return (
        <section className="skills">
            <h1>Skills</h1>
            <div className="skills-container">
                {/* <div className="skills-cards"> */}
                    {skillsCards.map((card, index) => <Card key={index} url={card.url} name={card.name}></Card>)}
                {/* </div> */}
            </div>
        </section>
    )
}

export default Skills;