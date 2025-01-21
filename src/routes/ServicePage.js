import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import "../components/ServicePageStyles.css";
import Footer from "../components/Footer";
import CommentReview from "../components/CommentReview";
import Gallery from "../components/Gallery";
import Room from "../components/Room";
import Amenities from "../components/Amenities";

function ServicePage() {
  const { heading } = useParams(); // Lấy heading từ URL
  const [cardData, setCardData] = useState(null);

  const handleClick = () => {
    localStorage.setItem("cardData", JSON.stringify(cardData));
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
            <div className="right-icon-review-mobile">
              <div className="local-text">
                <i className="fa-solid fa-location-dot"></i>
                <p>{cardData.location}</p>
              </div>
              <div className="review-des">
                <p className="review-data">{cardData.review}</p>
                <p className="review-text">{cardData.textReview}</p>
                <p className="number-review">{cardData.numReview} reviews</p>
              </div>
            </div>
          </div>
          <div className="book-now-div">
            <div className="right-icon-review">
              <div className="local-text">
                <i className="fa-solid fa-location-dot"></i>
                <p>{cardData.detailLocation}</p>
              </div>
              <div className="review-des">
                <p className="review-data">{cardData.review}</p>
                <p className="review-text">{cardData.textReview}</p>
                <p className="number-review">{cardData.numReview} reviews</p>
              </div>
            </div>
            <div className="book-now-btn">
              <Link to={`/`} className="btn-text" onClick={handleClick}>
                Book Now
              </Link>
            </div>
          </div>
        </div>
        <div className="card-img">
          {/* <img alt="hotel-img" src={cardData.image}></img> */}
          <Gallery />
        </div>
        <div>
          <h2>Overview</h2>
          <div className="ov-text">
            <p>{cardData.text}</p>
          </div>
          <h2>Available Rooms</h2>
          <div className="ov-text">
            <div>
              <Room />
            </div>
          </div>
          <h2>Amenities</h2>
          <div className="amenities-icon">
            <div className="ov-text">
              <Amenities />
            </div>
          </div>
          <h2>Reviews</h2>
          <div className="ov-text">
            <div className="heading-review">
              <div className="total-review">
                <h1>{cardData.review}</h1>
                <div className="text-num-review">
                  <h3>{cardData.textReview}</h3>
                  <p>{cardData.numReview} verified review</p>
                </div>
              </div>
              <div className="give-review-btn">
                <button>Give your review</button>
              </div>
            </div>
            <div>
              <CommentReview />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default ServicePage;
