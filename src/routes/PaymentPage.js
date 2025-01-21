import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function PaymentPage() {
  const { heading } = useParams(); // Lấy heading từ URL
  const [cardData, setCardData] = useState(null);

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
      <div className="payment-container">
        <h1>Payment for {heading}</h1>
        <p>Price: ${cardData.price}</p>
        <p>Details: {cardData.text}</p>
        <button className="pay-btn">Proceed to Payment</button>
      </div>
      <Footer />
    </>
  );
}

export default PaymentPage;
