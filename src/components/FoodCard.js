import "./Card";

function FoodCard(props) {
  return (
    <div className="t-card-2">
      <div className="t-image-2">
        <img src={props.image} alt="card" />
      </div>
      <div className="heading-wrap-2">
        <h4>{props.heading}</h4>
      </div>
      <div className="describe-text-2">
        <p>{props.text}</p>
      </div>
      <div className="price-container-2">
        <div>
          <div className="price-wr">
            <p className="price-value">{props.price}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FoodCard;
