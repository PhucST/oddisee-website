import React, { useState } from "react";
import DatePicker from "react-date-picker";
import "react-date-picker/dist/DatePicker.css";
import "./SearchForm.css";

const SearchForm = ({ onSearch }) => {
  const [location, setLocation] = useState("");
  const [checkInDate, setCheckInDate] = useState(new Date());
  const [checkOutDate, setCheckOutDate] = useState(new Date());
  const [guests, setGuests] = useState({ adults: 2, children: 1, rooms: 1 });

  const handleGuestChange = (type, increment) => {
    setGuests((prev) => ({
      ...prev,
      [type]: Math.max(0, prev[type] + (increment ? 1 : -1)),
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const guestString = `${guests.adults} người lớn - ${guests.children} trẻ em - ${guests.rooms} phòng`;
    onSearch(location, guestString);
  };

  return (
    <section className="pt-40 pb-40 bg-light-2">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="text-center">
              <h1 className="text-30 fw-600">Tìm khách sạn sang trọng của bạn</h1>
            </div>

            <form
              className="mainSearch -col-3-big bg-white px-10 py-10 lg:px-20 lg:pt-5 lg:pb-20 rounded-4 mt-30"
              onSubmit={handleSubmit}
            >
              <div className="button-grid items-center">
                <div className="searchMenu-loc pl-20 lg:py-20 lg:px-0">
                  <h4 className="text-15 fw-500 ls-2 lh-16">Vị trí</h4>
                  <div className="text-15 text-light-1 ls-2 lh-16">
                    <input
                      type="search"
                      placeholder="Bạn muốn đi đâu?"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      className="js-search"
                    />
                  </div>
                </div>

                <div className="searchMenu-date px-30 lg:py-20 lg:px-0">
                  <h4 className="text-15 fw-500 ls-2 lh-16">Ngày nhận - Ngày trả</h4>
                  <div className="capitalize text-15 text-light-1 ls-2 lh-16">
                    <DatePicker onChange={setCheckInDate} value={checkInDate} />
                    <span> - </span>
                    <DatePicker onChange={setCheckOutDate} value={checkOutDate} />
                  </div>
                </div>

                <div className="searchMenu-guests px-30 lg:py-20 lg:px-0">
                  <h4 className="text-15 fw-500 ls-2 lh-16">Khách</h4>
                  <div className="text-15 text-light-1 ls-2 lh-16">
                    <span>
                      {guests.adults} người lớn - {guests.children} trẻ em -{" "}
                      {guests.rooms} phòng
                    </span>
                  </div>
                  <div className="searchMenu-guests__field shadow-2">
                    <div className="bg-white px-30 py-30 rounded-4">
                      <div className="row y-gap-10 justify-between items-center">
                        <div className="col-auto">
                          <div className="text-15 fw-500">Người lớn</div>
                        </div>
                        <div className="col-auto">
                          <div className="d-flex items-center js-counter">
                            <button
                              className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-down"
                              onClick={() => handleGuestChange("adults", false)}
                            >
                              <i className="icon-minus text-12"></i>
                            </button>
                            <div className="flex-center size-20 ml-15 mr-15">
                              {guests.adults}
                            </div>
                            <button
                              className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-up"
                              onClick={() => handleGuestChange("adults", true)}
                            >
                              <i className="icon-plus text-12"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="border-top-light mt-24 mb-24"></div>
                      <div className="row y-gap-10 justify-between items-center">
                        <div className="col-auto">
                          <div className="text-15 lh-12 fw-500">Trẻ em</div>
                          <div className="text-14 lh-12 text-light-1 mt-5">
                            Độ tuổi 0 - 17
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="d-flex items-center js-counter">
                            <button
                              className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-down"
                              onClick={() => handleGuestChange("children", false)}
                            >
                              <i className="icon-minus text-12"></i>
                            </button>
                            <div className="flex-center size-20 ml-15 mr-15">
                              {guests.children}
                            </div>
                            <button
                              className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-up"
                              onClick={() => handleGuestChange("children", true)}
                            >
                              <i className="icon-plus text-12"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                      <div className="border-top-light mt-24 mb-24"></div>
                      <div className="row y-gap-10 justify-between items-center">
                        <div className="col-auto">
                          <div className="text-15 fw-500">Phòng</div>
                        </div>
                        <div className="col-auto">
                          <div className="d-flex items-center js-counter">
                            <button
                              className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-down"
                              onClick={() => handleGuestChange("rooms", false)}
                            >
                              <i className="icon-minus text-12"></i>
                            </button>
                            <div className="flex-center size-20 ml-15 mr-15">
                              {guests.rooms}
                            </div>
                            <button
                              className="button -outline-blue-1 text-blue-1 size-38 rounded-4 js-up"
                              onClick={() => handleGuestChange("rooms", true)}
                            >
                              <i className="icon-plus text-12"></i>
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="button-item">
                  <button
                    className="mainSearch__submit button -dark-1 py-15 px-40 col-12 rounded-4 bg-blue-1 text-white"
                    type="submit"
                  >
                    <i className="icon-search text-20 mr-10"></i>
                    Tìm kiếm
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchForm;