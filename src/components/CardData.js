import "./Card";
import { Link } from "react-router-dom";

function CardData(props) {
  const handleClick = () => {
    localStorage.setItem("cardData", JSON.stringify(props)); // Lưu dữ liệu vào localStorage
  };

  return (
    <div className="t-card-2">
      <div className="t-image-2">
        <img src={props.image} alt="card" />
      </div>
      <div className="heading-wrap-2">
        <h4>{props.heading}</h4>
        <div className="local-text">
          <i className="fa-solid fa-location-dot"></i>
          <p>{props.location}</p>
        </div>
      </div>
      <div className="describe-text-2">
        <p>{props.text}</p>
      </div>
      <div className="price-container-2">
        <div>
          <p>Starting from</p>
          <div className="price-wr">
            <p className="price-value">${props.price}</p>
            <p>/night</p>
          </div>
        </div>
        <div className="bool-btn">
          <Link
            to={`/service/${props.heading}`}
            className="btn-text"
            onClick={handleClick}
          >
            View Place
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardData;
