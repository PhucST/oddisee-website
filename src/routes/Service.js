import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/mediterraneo-hotel-0.jpg";
import Footer from "../components/Footer";
import Search from "../components/Search";
import Card from "../components/Card";

function Service() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={AboutImg}
        title="Find Stays"
        btnClass="hide"
      />
      <Search />
      <Card />
      <Footer />
    </>
  );
}

export default Service;
