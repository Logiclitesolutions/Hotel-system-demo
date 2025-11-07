import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="footer bg-dark text-white py-4 text-center">
    <h5 className="fw-bold mb-3">LuxuryStay Hotel</h5>
    <p className="text-light small mb-3">
      Crafted for comfort and class. Experience the art of luxury living.
    </p>
    <div className="d-flex justify-content-center gap-4 mb-2">
      <button className="text-white fs-5 bg-transparent border-0"><i className="bi bi-facebook"></i></button>
      <button className="text-white fs-5 bg-transparent border-0"><i className="bi bi-instagram"></i></button>
      <button className="text-white fs-5 bg-transparent border-0"><i className="bi bi-twitter-x"></i></button>
    </div>
    <small className="text-secondary">© 2025 LuxuryStay Hotels. All rights reserved.</small>
  </footer>
);

export default Footer;
