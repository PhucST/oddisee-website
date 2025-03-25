import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./Sidebar.css";

const Sidebar = ({ onFilterChange }) => {
  const [filters, setFilters] = useState({
    freeCancellation: false,
    reserveNowPayLater: false,
    specialOffers: false,
    breakfastIncluded: false,
    romantic: false,
    airportTransfer: false,
    wifiIncluded: false,
    fiveStar: false,
    priceRange: [0, 500],
  });

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    setFilters((prev) => ({ ...prev, [name]: checked }));
    onFilterChange({ ...filters, [name]: checked });
  };

  const handlePriceChange = (values) => {
    setFilters((prev) => ({ ...prev, priceRange: values }));
    onFilterChange({ ...filters, priceRange: values });
  };

  return (
    <aside className="sidebar y-gap-40">
      <div className="sidebar__item -no-border">
        <h5 className="text-18 fw-500 mb-10">Tìm theo tên khách sạn</h5>
        <div className="single-field relative d-flex items-center py-10">
          <input
            className="pl-50 border-light text-dark-1 h-50 rounded-8"
            type="text"
            placeholder="Ví dụ: Best Western"
          />
          <button className="absolute d-flex items-center h-full">
            <i className="icon-search text-20 px-15 text-dark-1"></i>
          </button>
        </div>
      </div>

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Ưu đãi</h5>
        <div className="sidebar-checkbox">
          <div className="row y-gap-10 items-center justify-between">
            <div className="col-auto">
              <div className="d-flex items-center">
                <input
                  type="checkbox"
                  name="freeCancellation"
                  checked={filters.freeCancellation}
                  onChange={handleCheckboxChange}
                />
                <div className="text-15 ml-10">Hủy miễn phí</div>
              </div>
            </div>
          </div>
          <div className="row y-gap-10 items-center justify-between">
            <div className="col-auto">
              <div className="d-flex items-center">
                <input
                  type="checkbox"
                  name="reserveNowPayLater"
                  checked={filters.reserveNowPayLater}
                  onChange={handleCheckboxChange}
                />
                <div className="text-15 ml-10">Đặt trước, trả sau</div>
              </div>
            </div>
          </div>
          <div className="row y-gap-10 items-center justify-between">
            <div className="col-auto">
              <div className="d-flex items-center">
                <input
                  type="checkbox"
                  name="specialOffers"
                  checked={filters.specialOffers}
                  onChange={handleCheckboxChange}
                />
                <div className="text-15 ml-10">Khách sạn có ưu đãi đặc biệt</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar__item">
        <h5 className="text-18 fw-500 mb-10">Bộ lọc phổ biến</h5>
        <div className="sidebar-checkbox">
          <div className="row y-gap-10 items-center justify-between">
            <div className="col-auto">
              <div className="d-flex items-center">
                <input
                  type="checkbox"
                  name="breakfastIncluded"
                  checked={filters.breakfastIncluded}
                  onChange={handleCheckboxChange}
                />
                <div className="text-15 ml-10">Bao gồm bữa sáng</div>
              </div>
            </div>
            <div className="col-auto">
              <div className="text-15 text-light-1">92</div>
            </div>
          </div>
          <div className="row y-gap-10 items-center justify-between">
            <div className="col-auto">
              <div className="d-flex items-center">
                <input
                  type="checkbox"
                  name="romantic"
                  checked={filters.romantic}
                  onChange={handleCheckboxChange}
                />
                <div className="text-15 ml-10">Lãng mạn</div>
              </div>
            </div>
            <div className="col-auto">
              <div className="text-15 text-light-1">45</div>
            </div>
          </div>
          <div className="row y-gap-10 items-center justify-between">
            <div className="col-auto">
              <div className="d-flex items-center">
                <input
                  type="checkbox"
                  name="airportTransfer"
                  checked={filters.airportTransfer}
                  onChange={handleCheckboxChange}
                />
                <div className="text-15 ml-10">Đưa đón sân bay</div>
              </div>
            </div>
            <div className="col-auto">
              <div className="text-15 text-light-1">21</div>
            </div>
          </div>
          <div className="row y-gap-10 items-center justify-between">
            <div className="col-auto">
              <div className="d-flex items-center">
                <input
                  type="checkbox"
                  name="wifiIncluded"
                  checked={filters.wifiIncluded}
                  onChange={handleCheckboxChange}
                />
                <div className="text-15 ml-10">Bao gồm WiFi</div>
              </div>
            </div>
            <div className="col-auto">
              <div className="text-15 text-light-1">78</div>
            </div>
          </div>
          <div className="row y-gap-10 items-center justify-between">
            <div className="col-auto">
              <div className="d-flex items-center">
                <input
                  type="checkbox"
                  name="fiveStar"
                  checked={filters.fiveStar}
                  onChange={handleCheckboxChange}
                />
                <div className="text-15 ml-10">5 sao</div>
              </div>
            </div>
            <div className="col-auto">
              <div className="text-15 text-light-1">679</div>
            </div>
          </div>
        </div>
      </div>

      <div className="sidebar__item pb-30">
        <h5 className="text-18 fw-500 mb-10">Giá mỗi đêm</h5>
        <div className="row x-gap-10 y-gap-30">
          <div className="col-12">
            <div className="js-price-rangeSlider">
              <div className="text-14 fw-500"></div>
              <div className="d-flex justify-between mb-20">
                <div className="text-15 text-dark-1">
                  ${filters.priceRange[0]} - ${filters.priceRange[1]}
                </div>
              </div>
              <Slider
                range
                min={0}
                max={1000}
                value={filters.priceRange}
                onChange={handlePriceChange}
              />
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;