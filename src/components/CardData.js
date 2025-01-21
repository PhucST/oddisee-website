import "./CardStyles.css";
import { Link } from "react-router-dom";

function CardData(props) {
  const handleClick = () => {
    localStorage.setItem("cardData", JSON.stringify(props)); // Lưu dữ liệu vào localStorage
  };

  return (
    <div className="t-card">
      <div className="t-image">
        <img src={props.image} alt="image" />
      </div>
      <h4>{props.heading}</h4>
      <p>{props.text}</p>
      <div className="price-container">
        <div>
          <p className="price-value">${props.price}</p>
        </div>
        <div className="bool-btn">
          <Link
            to={`/service/${props.heading}`}
            className="btn-text"
            onClick={handleClick}
          >
            Book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CardData;
