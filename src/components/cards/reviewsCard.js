function ReviewsCard({ icon, subtitle, text, reviews }) {
  return (
    <>
      <div className="wrapper__card">
        <div className="card__reviews">
          <div className="icon__reviews">
            <img src={icon} />
            <div className="subtitle__reviews">
              <p>{subtitle}</p>
              <span>{text}</span>
            </div>
          </div>
          <div className="text__reviews">
            <p>{reviews}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ReviewsCard;
