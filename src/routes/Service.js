import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/mediterraneo-hotel-0.jpg";
import Footer from "../components/Footer";
import Search from "../components/Search";
import Card from "../components/Card";
import { useState } from "react";

function Service() {
  const [searchData, setSearchData] = useState({ location: "", guests: "1 guest" });

  const handleSearch = (location, guests) => {
    setSearchData({ location, guests });
  };

  return (
    <>
      <Navbar />
      <Hero cName="hero-mid" heroImg={AboutImg} title="Find Stays" btnClass="hide" />
      <Search onSearch={handleSearch} />
      <Card searchData={searchData} />
      <Footer />
    </>
  );
}

export default Service;
