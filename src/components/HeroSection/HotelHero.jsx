import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./HotelHero.css";

const HotelHero = () => {
  const [checkIn, setCheckIn] = useState(null);
  const [checkOut, setCheckOut] = useState(null);

  return (
    <section className="hero position-relative text-white text-center">
      <video
        className="hero-video position-absolute top-0 start-0 w-100 h-100"
        autoPlay
        muted
        loop
      >
        <source src="/hotel-video.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay"></div>

      <div className="hero-content container position-relative z-3">
        <h2 className="display-5 fw-bold mb-3">
          Experience Comfort & Elegance
        </h2>
        <p className="lead mb-4">
          Discover world-class luxury, personalized service, and unforgettable
          experiences.
        </p>

        <div className="booking-card bg-white text-dark p-4 rounded-4 shadow-lg mx-auto">
          <div className="row g-3">
            <div className="col-12 col-md-4">
              <DatePicker
                selected={checkIn}
                onChange={(date) => setCheckIn(date)}
                className="form-control"
                placeholderText="Check-in"
                dateFormat="dd/MM/yyyy"
                popperPlacement="bottom"
              />
            </div>
            <div className="col-12 col-md-4">
              <DatePicker
                selected={checkOut}
                onChange={(date) => setCheckOut(date)}
                className="form-control"
                placeholderText="Check-out"
                dateFormat="dd/MM/yyyy"
                minDate={checkIn}
                popperPlacement="bottom"
              />
            </div>
            <div className="col-12 col-md-4">
              <button className="btn btn-warning w-100 fw-bold py-2">
                <i className="bi bi-calendar-check me-2"></i>Check Availability
              </button>
            </div>
          </div>
        </div>

        <div className="trust-badges mt-4 d-flex justify-content-center flex-wrap gap-3">
          <div className="badge-item">
            <i className="bi bi-geo-alt-fill text-warning fs-5"></i>
            <p className="mb-0">Prime Location</p>
          </div>
          <div className="badge-item">
            <i className="bi bi-star-fill text-warning fs-5"></i>
            <p className="mb-0">5-Star Luxury</p>
          </div>
          <div className="badge-item">
            <i className="bi bi-shield-check text-warning fs-5"></i>
            <p className="mb-0">Trusted Hospitality</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HotelHero;
