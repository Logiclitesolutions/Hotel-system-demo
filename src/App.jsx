import React from "react";
import Navbar from "./components/Navbar/Navbar";
import HotelHero from "./components/HeroSection/HotelHero";
import FeaturedRooms from "./components/Rooms/FeaturedRooms";
import Travel from "./components/Travel/Travel";
import TourPackages from "./components/TourPackages/Packages";
import PackageDetails from "./components/TourPackages/PackageDetails";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    
    
    <BrowserRouter>
    
      <Navbar />

      <Routes>
        {/* Home Page */}
        <Route
          path="/"
          element={
            <>
              <HotelHero />
              <FeaturedRooms />
              <Travel />
              <TourPackages />
              
            </>
          }
        />

        {/* Package Details Page */}
        <Route path="/packages/:id" element={<PackageDetails />} />
      </Routes>

      <Footer />
      
    </BrowserRouter>
  );
}

export default App;
