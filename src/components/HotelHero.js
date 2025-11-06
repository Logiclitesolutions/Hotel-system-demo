import React from "react";
import "./HotelHero.css";

const HotelHero = () => {
  return (
    <section className="hero">
      <video className="hero-video" autoPlay muted loop>
        <source src="/hotel-video.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay"></div>

      <header className="hero-header">
        <h1><strong>Luxury Stay</strong> Hotel</h1>
        <nav className="hero-nav">
          <a href="#">Home</a>
          <a href="#">Rooms</a>
          <a href="#">Dining</a>
          <a href="#">Gallery</a>
          <a href="#">Contact</a>
        </nav>
        <div className="hero-buttons">
          <button className="btn">Login</button>
          <button className="btn primary">Sign Up</button>
        </div>
      </header>

      <div className="hero-content">
        <h2>Experience Comfort & Elegance</h2>
        <p>Book your dream vacation today and enjoy unforgettable moments.</p>
        <div className="hero-actions">
          <input type="text" placeholder="Search rooms..." />
          <button className="btn primary">Book Now</button>
        </div>
      </div>
    </section>
  );
};

export default HotelHero;
