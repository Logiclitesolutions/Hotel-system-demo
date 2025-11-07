import React from "react";
import "./FeaturedRooms.css";

const rooms = [
  {
    id: 1,
    title: "Deluxe Suite",
    desc: "A perfect blend of comfort and luxury with a scenic city view.",
    img: "/room1.jpg",
    price: "₹12,000 / Night",
  },
  {
    id: 2,
    title: "Executive Room",
    desc: "Spacious interiors with premium amenities for business travelers.",
    img: "/room2.jpg",
    price: "₹9,500 / Night",
  },
  {
    id: 3,
    title: "Presidential Suite",
    desc: "Experience unmatched elegance and world-class hospitality.",
    img: "/room3.jpg",
    price: "₹25,000 / Night",
  },
];

const FeaturedRooms = () => {
  return (
    <section className="featured-rooms py-5 bg-light">
      <div className="container text-center">
        <h2 className="fw-bold mb-4 text-dark">Featured Rooms</h2>
        <div className="row g-4">
          {rooms.map((room) => (
            <div className="col-12 col-md-4" key={room.id}>
              <div className="room-card shadow-lg rounded-4 overflow-hidden bg-white">
                <img src={room.img} alt={room.title} className="w-100 room-img" />
                <div className="p-3 text-start">
                  <h5 className="fw-bold">{room.title}</h5>
                  <p className="text-secondary small mb-3">{room.desc}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <span className="fw-bold text-warning">{room.price}</span>
                    <button className="btn btn-dark btn-sm">Book Now</button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedRooms;
