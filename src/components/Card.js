import "./CardStyles.css";
import CardData from "./CardData";
import Trip1 from "../assets/5.jpg";
import Trip2 from "../assets/8.jpg";
import Trip3 from "../assets/6.jpg";

function Card() {
  const tripData = [
    {
      image: Trip1,
      heading: "Trip in Thai",
      text: "Thailand, with its rich culture, stunning beaches, vibrant cities, and adventure-filled landscapes, is one of Southeast Asia’s top travel destinations. Whether you’re a first-time visitor or a seasoned traveler, creating a well-thought-out Thailand trip itinerary will ensure that you make the most of your time exploring this beautiful country. From the bustling streets of Bangkok to the serene islands of the Andaman Sea, Thailand offers a perfect blend of culture, adventure, and relaxation. In this guide, we’ll walk you through a 12-day Thailand trip itinerary, highlighting the best attractions, cultural experiences, and hidden gems along the way.",
      price: "40",
    },
    {
      image: Trip2,
      heading: "Trip in Thai",
      text: "Thailand, with its rich culture, stunning beaches, vibrant cities, and adventure-filled landscapes, is one of Southeast Asia’s top travel destinations. Whether you’re a first-time visitor or a seasoned traveler, creating a well-thought-out Thailand trip itinerary will ensure that you make the most of your time exploring this beautiful country. From the bustling streets of Bangkok to the serene islands of the Andaman Sea, Thailand offers a perfect blend of culture, adventure, and relaxation. In this guide, we’ll walk you through a 12-day Thailand trip itinerary, highlighting the best attractions, cultural experiences, and hidden gems along the way.",
      price: "30",
    },
    {
      image: Trip3,
      heading: "Trip in Thai",
      text: "Thailand, with its rich culture, stunning beaches, vibrant cities, and adventure-filled landscapes, is one of Southeast Asia’s top travel destinations. Whether you’re a first-time visitor or a seasoned traveler, creating a well-thought-out Thailand trip itinerary will ensure that you make the most of your time exploring this beautiful country. From the bustling streets of Bangkok to the serene islands of the Andaman Sea, Thailand offers a perfect blend of culture, adventure, and relaxation. In this guide, we’ll walk you through a 12-day Thailand trip itinerary, highlighting the best attractions, cultural experiences, and hidden gems along the way.",
      price: "25",
    },
    {
      image: Trip2,
      heading: "Trip in Thai",
      text: "Thailand, with its rich culture, stunning beaches, vibrant cities, and adventure-filled landscapes, is one of Southeast Asia’s top travel destinations. Whether you’re a first-time visitor or a seasoned traveler, creating a well-thought-out Thailand trip itinerary will ensure that you make the most of your time exploring this beautiful country. From the bustling streets of Bangkok to the serene islands of the Andaman Sea, Thailand offers a perfect blend of culture, adventure, and relaxation. In this guide, we’ll walk you through a 12-day Thailand trip itinerary, highlighting the best attractions, cultural experiences, and hidden gems along the way.",
      price: "25",
    },
    {
      image: Trip1,
      heading: "Trip in Thai",
      text: "Thailand, with its rich culture, stunning beaches, vibrant cities, and adventure-filled landscapes, is one of Southeast Asia’s top travel destinations. Whether you’re a first-time visitor or a seasoned traveler, creating a well-thought-out Thailand trip itinerary will ensure that you make the most of your time exploring this beautiful country. From the bustling streets of Bangkok to the serene islands of the Andaman Sea, Thailand offers a perfect blend of culture, adventure, and relaxation. In this guide, we’ll walk you through a 12-day Thailand trip itinerary, highlighting the best attractions, cultural experiences, and hidden gems along the way.",
      price: "25",
    },
  ];

  return (
    <div className="trip">
      <div className="tripcard">
        {tripData.map((trip, index) => (
          <CardData
            key={index}
            image={trip.image}
            heading={trip.heading}
            text={trip.text}
            price={trip.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Card;
