import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Shawama from "../assets/vit-nao-chao-kim-lien.jpg";
import Footer from "../components/Footer";
import FoodBlog from "../components/FoodBlog";
import React from "react";

function Food() {
  return (
    <>
      <Navbar />
      <Hero
        cName="hero-mid"
        heroImg={Shawama}
        title="Food"
        btnClass="hide"
        url="/food"
      />
      <FoodBlog/>
      <Footer />
    </>
  );
}

export default Food;