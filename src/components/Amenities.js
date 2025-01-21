import "./AmenitiesStyles.css";

function Amenities() {
  return (
    <div className="wrap-content-amen">
      <div className="left-content-amen">
        <div className="warp-amen">
          <i class="fa-solid fa-water-ladder"></i>
          <p>Outdoor pool</p>
        </div>
        <div className="warp-amen">
          <i class="fa-solid fa-water-ladder"></i>
          <p>Indoor pool</p>
        </div>
        <div className="warp-amen">
          <i class="fa-solid fa-spa"></i>
          <p>Spa and wellness center</p>
        </div>
        <div className="warp-amen">
          <i class="fa-solid fa-utensils"></i>
          <p>Restaurant</p>
        </div>
        <div className="warp-amen">
          <i class="fa-solid fa-bell-concierge"></i>
          <p>Room service</p>
        </div>
      </div>
      <div className="right-content-amen">
        <div className="warp-amen">
          <i class="fa-solid fa-dumbbell"></i>
          <p>Fitness center</p>
        </div>
        <div className="warp-amen">
          <i class="fa-solid fa-martini-glass"></i>
          <p>Bar/Lounge</p>
        </div>
        <div className="warp-amen">
          <i class="fa-solid fa-wifi"></i>
          <p>Free Wi-Fi</p>
        </div>
        <div className="warp-amen">
          <i class="fa-solid fa-mug-saucer"></i>
          <p>Tea/coffee machine</p>
        </div>
        <p className="more">+24 more</p>
      </div>
    </div>
  );
}

export default Amenities;
