import "./SearchStyles.css";
import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "react-calendar/dist/Calendar.css";

const Search = ({ onSearch }) => {
  const [location, setLocation] = useState("");
  const [guests, setGuests] = useState("1 guest");
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);
  const [minReview, setMinReview] = useState("0"); // Đánh giá tối thiểu

  const handleSearch = () => {
    onSearch({
      location,
      guests,
      checkIn,
      checkOut,
      minReview,
    });
  };

  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        <div className="hero-content">
          <div data-aos="fade-up" data-aos-delay="600" className="search-box">
            <div className="search-grid">
              {/* Địa điểm */}
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

              {/* Check In */}
              <div>
                <label htmlFor="checkIn" className="label">
                  Check In
                </label>
                <DatePicker
                  onChange={setCheckIn}
                  value={checkIn}
                  className="input"
                  minDate={new Date()} // Không cho phép chọn ngày trong quá khứ
                />
              </div>

              {/* Check Out */}
              <div>
                <label htmlFor="checkOut" className="label">
                  Check Out
                </label>
                <DatePicker
                  onChange={setCheckOut}
                  value={checkOut}
                  className="input"
                  minDate={checkIn || new Date()} // Check Out phải sau Check In
                />
              </div>

              {/* Số lượng khách */}
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
                      <option value="1 guest" className="option-text">
                        1 guest
                      </option>
                      <option value="2 guests" className="option-text">
                        2 guests
                      </option>
                      <option value="3 guests" className="option-text">
                        3 guests
                      </option>
                      <option value="4 guests" className="option-text">
                        4 guests
                      </option>
                      <option value="4-6 guests" className="option-text">
                        4-6 guests
                      </option>
                    </select>
                  </div>
                </label>
              </div>

              {/* Đánh giá tối thiểu */}
              <div>
                <label htmlFor="minReview" className="label">
                  Minimum Review
                </label>
                <select
                  id="minReview"
                  className="dropdown"
                  value={minReview}
                  onChange={(e) => setMinReview(e.target.value)}
                >
                  <option value="0">Any</option>
                  <option value="3">3+ (Good)</option>
                  <option value="4">4+ (Very Good)</option>
                  <option value="4.5">4.5+ (Excellent)</option>
                </select>
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