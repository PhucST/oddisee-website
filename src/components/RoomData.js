import "./RoomStyles.css";
import { Link } from "react-router-dom";

function RoomData(props) {
  return (
      <div className="wrap-room">
        <div className="right-room-content">
          <img alt="superior-room" src={props.image} className="img-room"></img>
          <p>{props.text}</p>
        </div>
        <div className="left-room-content">
          <div className="text-price-room">
            <h1>${props.price}</h1>
            <h5>/night</h5>
          </div>
          <div className="room-btn">
            <Link to={`/`} className="btn-text">
              Book Now
            </Link>
          </div>
        </div>
      </div>
  );
}

export default RoomData;
