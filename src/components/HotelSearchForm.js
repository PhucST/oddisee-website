import React, { useState } from "react";
import "./HotelSearchFormStyles.css";

const HotelSearchForm = () => {
  const [location, setLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState("");
  const [checkOutDate, setCheckOutDate] = useState("");
  const [rooms, setRooms] = useState(1);
  const [guests, setGuests] = useState(1);

  return (
    <div className="hotel-search-container">
      <div className="hotel-search-form">
        {/* Check-in Date */}
        <div className="form-group">
          <label>Check-in Date</label>
          <div className="input-icon">
            <span>📅</span>
            <input
              type="date"
              value={checkInDate}
              onChange={(e) => setCheckInDate(e.target.value)}
            />
          </div>
        </div>

        {/* Check-out Date */}
        <div className="form-group">
          <label>Check-out Date</label>
          <div className="input-icon">
            <span>🔄</span>
            <input
              type="date"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
            />
          </div>
        </div>

        {/* Rooms & Guests Dropdown */}
        <div className="form-group">
          <label>Rooms & Guests</label>
          <div className="input-icon">
            <span>👤</span>
            <select
              value={`${rooms} room, ${guests} guests`}
              onChange={(e) => {
                const [selectedRooms, , selectedGuests] =
                  e.target.value.split(" ");
                setRooms(parseInt(selectedRooms));
                setGuests(parseInt(selectedGuests));
              }}
            >
              <option value="1 room, 1 guest">1 room, 1 guest</option>
              <option value="1 room, 2 guests">1 room, 2 guests</option>
              <option value="2 rooms, 2 guests">2 rooms, 2 guests</option>
              <option value="2 rooms, 4 guests">2 rooms, 4 guests</option>
            </select>
          </div>
        </div>

        {/* Search Button */}
        <button className="search-button">Search</button>
      </div>
    </div>
  );
};

export default HotelSearchForm;
