import './Card.css';

function Card(props) {
    return (
        <div className="marvel-card">
            <img className="hero-img" src={props.url} alt={props.name} />
            <div className="marvel-hero">{props.name}</div>
            <div className="hero-superpower">{props.superpower}</div>
            <div className="hero-weapons">{props.weapons}</div>
        </div>
    )
}

export default Card;