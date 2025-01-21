import "./SearchStyles.css";
import React from "react";

const Search = () => {
  const [priceValue, setPriceValue] = React.useState(30);

  return (
    <div className="hero-container">
      <div className="hero-wrapper">
        <div className="hero-content">
          <div data-aos="fade-up" data-aos-delay="600" className="search-box">
            <div className="search-grid">
              <div>
                <label htmlFor="destination" className="label">
                  Search your Destination
                </label>
                <input
                  type="text"
                  name="destination"
                  id="destination"
                  placeholder="Can Tho"
                  className="input"
                />
              </div>
              <div>
                <label htmlFor="date" className="label">
                  Date
                </label>
                <input type="date" name="date" id="date" className="input" />
              </div>
              <div>
                <label htmlFor="price" className="label block">
                  <div className="price-wrapper">
                    <p>Max Price</p>
                    <p className="price-value">$ {priceValue}</p>
                  </div>
                </label>
                <div className="range-container">
                  <input
                    type="range"
                    name="price"
                    id="price"
                    className="range-input"
                    min="150"
                    max="1000"
                    value={priceValue}
                    step="10"
                    onChange={(e) => setPriceValue(e.target.value)}
                  />
                </div>
              </div>
            </div>
            <button className="search-btn">Search Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
