import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import "../components/ServicePageStyles.css";
import Footer from "../components/Footer";

function ServicePage() {
  const { heading } = useParams(); // Lấy heading từ URL
  const [cardData, setCardData] = useState(null);

  const handleClick = () => {
    localStorage.setItem("cardData", JSON.stringify(cardData)); // Lưu dữ liệu vào localStorage
  };

  useEffect(() => {
    const storedData = localStorage.getItem("cardData");
    if (storedData) {
      setCardData(JSON.parse(storedData));
    }
  }, []);

  if (!cardData) return <p>Loading...</p>;

  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={cardData.image} btnClass="hide" />
      <div className="wrap-content">
        <div className="wrap-heading">
          <div className="heading">
            <h1>{heading}</h1>
            <div className="text-price">
              <p className="price">${cardData.price}</p>
              <p className="night">/night</p>
            </div>
          </div>
          <div className="book-now-div">
            <div className="local-text">
              <i className="fa-solid fa-location-dot"></i>
              <p>Viet Nam</p>
            </div>
            <div className="book-now-btn">
              <Link to={`/`} className="btn-text" onClick={handleClick}>
                Book Now
              </Link>
            </div>
          </div>
        </div>
        <div>
          <h2>Overview</h2>
          <div className="ov-text">
            <p>{cardData.text}</p>
          </div>
          <h2>Available Rooms</h2>
          <div className="ov-text">
            <p>Coming soon...</p>
          </div>
          <h2>Amenities</h2>
          <div className="amenities-icon">
            <div className="ov-text">
              <p>Coming soon...</p>
            </div>
          </div>
          <h2>Review</h2>
          <div className="ov-text">
            <p>Coming soon...</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ServicePage;
