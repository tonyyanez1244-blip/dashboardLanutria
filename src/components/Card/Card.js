import './Card.css';

function Card({ titulo, valor , description }) {
  return (
    <div className="Card">
        <h2 >{titulo}</h2>
        <h3 >{valor}</h3>
        <p className="valor">{valor}</p>
        <p className="description">{description}</p>
        <div className="Card-valor">{valor}</div>
      </div>
  );
}

export default Card;