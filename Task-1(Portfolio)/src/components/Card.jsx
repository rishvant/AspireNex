import "../styles/skills.css";

const Card = ({ url, name }) => {
    return (
        <div className="container-card">
            <img src={url} />
            <h4>{name}</h4>
        </div>
    )
}

export default Card;