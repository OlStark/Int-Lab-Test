import "./style.scss";

function Card({ icon, subtitle, text, reviews }) {
  return (
    <>
      <div className="card">
        <div className="icon">
          <img src={icon} />
        </div>
        <div className="card__info">
          <div className="subtitle">
            <p>{subtitle}</p>
          </div>
          <div className="text">
            <p>{text}</p>
          </div>
          <div className="text__reviews">
            <p>{reviews}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
