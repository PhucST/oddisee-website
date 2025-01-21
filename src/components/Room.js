import RoomData from "./RoomData";
import "./RoomStyles.css";
import roomImg1 from "../assets/Superior-Room-King.jpg";
import roomImg2 from "../assets/superior-room-city-view-2.jpg";
import roomImg3 from "../assets/view-city-room.avif";
import roomImg4 from "../assets/view-city-room-3.avif";

function Room() {
  const roomData = [
    {
      image: roomImg1,
      text: "Superior room - 1 double bed or 2 twin beds",
      price: "240",
    },
    {
      image: roomImg2,
      text: "Superior room - City view  - 1 double bed or 2 twin beds",
      price: "280",
    },
    {
      image: roomImg3,
      text: "Superior room - City view  - 1 double bed or 2 twin beds",
      price: "320",
    },
    {
      image: roomImg4,
      text: "Superior room - City view  - 1 double bed or 2 twin beds",
      price: "350",
    },
  ];
  return (
    <div>
      <div>
        {roomData.map((room, index) => (
          <RoomData
            key={index}
            image={room.image} 
            text={room.text}
            price={room.price}
          />
        ))}
      </div>
    </div>
  );
}

export default Room;
