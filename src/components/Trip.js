import "./TripStyles.css";
import TripData from "./TripData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Trip() {
  return (
    <div className="trip">
      <h1>Recent Trips</h1>
      <p>You can discover unique destinations using Google Maps.</p>
      <div className="tripcard">
        <TripData
          image={Trip1}
          heading="Trip in Thai"
          text="Thailand, with its rich culture, stunning beaches, vibrant cities, and adventure-filled landscapes, is one of Southeast Asia’s top travel destinations. Whether you’re a first-time visitor or a seasoned traveler, creating a well-thought-out Thailand trip itinerary will ensure that you make the most of your time exploring this beautiful country. From the bustling streets of Bangkok to the serene islands of the Andaman Sea, Thailand offers a perfect blend of culture, adventure, and relaxation. In this guide, we’ll walk you through a 12-day Thailand trip itinerary, highlighting the best attractions, cultural experiences, and hidden gems along the way"
        />
        <TripData
          image={Trip2}
          heading="Trip in Thai"
          text="Thailand, with its rich culture, stunning beaches, vibrant cities, and adventure-filled landscapes, is one of Southeast Asia’s top travel destinations. Whether you’re a first-time visitor or a seasoned traveler, creating a well-thought-out Thailand trip itinerary will ensure that you make the most of your time exploring this beautiful country. From the bustling streets of Bangkok to the serene islands of the Andaman Sea, Thailand offers a perfect blend of culture, adventure, and relaxation. In this guide, we’ll walk you through a 12-day Thailand trip itinerary, highlighting the best attractions, cultural experiences, and hidden gems along the way"
        />
        <TripData
          image={Trip3}
          heading="Trip in Thai"
          text="Thailand, with its rich culture, stunning beaches, vibrant cities, and adventure-filled landscapes, is one of Southeast Asia’s top travel destinations. Whether you’re a first-time visitor or a seasoned traveler, creating a well-thought-out Thailand trip itinerary will ensure that you make the most of your time exploring this beautiful country. From the bustling streets of Bangkok to the serene islands of the Andaman Sea, Thailand offers a perfect blend of culture, adventure, and relaxation. In this guide, we’ll walk you through a 12-day Thailand trip itinerary, highlighting the best attractions, cultural experiences, and hidden gems along the way"
        />
      </div>
    </div>
  );
}

export default Trip;
