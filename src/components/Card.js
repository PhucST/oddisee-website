import "./CardStyles.css";
import CardData from "./CardData";
import { MenuHotel } from "./MenuHotel";

function Card({ searchData }) {
  const filteredHotels = MenuHotel.filter((trip) => 
    (searchData.location === "" || trip.location.toLowerCase().includes(searchData.location.toLowerCase()))
  );

  return (
    <div className="card">
      <div className="chilcard">
        {filteredHotels.length > 0 ? (
          filteredHotels.map((trip, index) => (
            <CardData
              key={index}
              image={trip.image}
              heading={trip.nameHotel}
              text={trip.overView}
              price={trip.price}
              location={trip.location}
              review={trip.review}
              textReview={trip.textReview}
              numReview={trip.numReview}
              detailLocation={trip.detailLocation}
              url={trip.url}
            />
          ))
        ) : (
          <p>No hotels found for "{searchData.location}"</p>
        )}
      </div>
    </div>
  );
}

export default Card;
