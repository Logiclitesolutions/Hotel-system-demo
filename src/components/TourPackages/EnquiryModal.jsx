import React from "react";
import "./Packages.css";
import { X } from "lucide-react";

 function EnquiryModal({ open, onClose }) {
  if (!open) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-box">
        <button className="modal-close" onClick={onClose}>
          <X size={22} />
        </button>

        <h2 className="modal-title">Drop your query</h2>
        <p className="modal-subtitle">
          We'd love to hear from you. Please fill out the form below
        </p>

        <form className="modal-form">
          <label>Name:</label>
          <input type="text" placeholder="Full Name" />

          <label>Mobile No:</label>
          <input type="text" placeholder="Mobile No" />

          <label>Email ID:</label>
          <input type="email" placeholder="Email Id" />

          <label>Journey Date:</label>
          <input type="date" />

          <label>Number of People:</label>
          <select>
            <option>01</option>
            <option>02</option>
            <option>03</option>
            <option>04</option>
          </select>

          <button type="submit" className="submit-btn">Submit</button>
        </form>
      </div>
    </div>
  );
}
export default EnquiryModal;