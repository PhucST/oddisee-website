import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import AboutImg from "../assets/night.jpg";
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
        title="Service"
        btnClass="hide"
      />
      <Search />
      <Card />
      <Footer />
    </>
  );
}

export default Service;
