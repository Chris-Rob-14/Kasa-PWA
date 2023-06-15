import React from "react";
import Cards from "../components/Cards/Cards";
import "../components/HeroSection/HeroSection.css";
import HeroSectionImage from "../images/HeroSection.png";

function Home() {
  return (
    <>
      <div className="hero-container">
        <h1>Chez vous, partout et ailleurs</h1>
        <img
          src={HeroSectionImage}
          className="hero-section-image"
          alt="home-background"
        />
      </div>
      <Cards />
    </>
  );
}

export default Home;