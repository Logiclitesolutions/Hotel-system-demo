import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HotelHero from "./components/HeroSection/HotelHero";
import FeaturedRooms from "./components/Rooms/FeaturedRooms";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <HotelHero />
      <FeaturedRooms />
      <Footer />
    </>
  );
}

export default App;
