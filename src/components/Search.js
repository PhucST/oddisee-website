import "./SearchStyles.css";
import React, { useState }from "react";

const Search = ({ onSearch }) => {

  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("1 guest");

  const handleSearch = () => {
    onSearch(location, guests);
  };

  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        <div className="hero-content">
          <div data-aos="fade-up" data-aos-delay="600" className="search-box">
            <div className="search-grid">
              <div>
                <label htmlFor="destination" className="label">
                  Enter Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  placeholder="Can Tho"
                  className="input"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                />
              </div>
              <div>
                <label htmlFor="date" className="label">
                  Check In
                </label>
                <input type="date" name="date" id="date" className="input" />
              </div>
              <div>
                <label htmlFor="date" className="label">
                  Check Out
                </label>
                <input type="date" name="date" id="date" className="input" />
              </div>
              <div className="room-guest">
                <label htmlFor="guests" className="label block">
                  <div className="price-wrapper">
                    <p>Rooms & Guests</p>
                  </div>
                  <div className="dropdown-room-guest">
                    <select
                      id="guests"
                      className="dropdown"
                      value={guests}
                      onChange={(e) => setGuests(e.target.value)}
                    >
                      <option value="1 guest" className="option-text">1 guest</option>
                      <option value="2 guest" className="option-text">2 guests</option>
                      <option value="3 guest" className="option-text">3 guests</option>
                      <option value="4 guest" className="option-text">4 guests</option>
                      <option value="4-6 guest" className="option-text">4-6 guests</option>
                    </select>
                  </div>
                </label>
              </div>
            </div>
            <button className="search-btn" onClick={handleSearch}>
              Search Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
