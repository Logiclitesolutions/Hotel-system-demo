import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "./FeaturedRooms.css";

const FeaturedRooms = () => {
  
  // ⭐ SINGLE HOTEL ARRAY (NO DUPLICATE NOW)
  const hotels = [
    {
      name: "Royal Palace",
      price: "₹4,500 / night",
      rating: 4.7,
      location: "Jaipur, Rajasthan",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb",
    },
    {
      name: "Grand Elite",
      price: "₹5,200 / night",
      rating: 4.5,
      location: "Mumbai, Maharashtra",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Ocean View",
      price: "₹3,800 / night",
      rating: 4.6,
      location: "Goa",
      image: "https://images.unsplash.com/photo-1502673530728-f79b4cab31b1",
    },
    {
      name: "Mountain Stay",
      price: "₹4,100 / night",
      rating: 4.4,
      location: "Manali, Himachal",
      image: "https://images.unsplash.com/photo-1462536943532-57a629f6cc60",
    },
    {
      name: "City Comfort",
      price: "₹3,200 / night",
      rating: 4.3,
      location: "Bengaluru",
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
    },
    {
      name: "Luxury Inn",
      price: "₹5,600 / night",
      rating: 4.8,
      location: "Delhi",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Sunset Resort",
      price: "₹4,700 / night",
      rating: 4.6,
      location: "Kerala",
      image: "https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=60",
    },
    {
      name: "Premium Suites",
      price: "₹6,100 / night",
      rating: 4.9,
      location: "Hyderabad",
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb",
    },
  ];

  React.useEffect(() => {
  const startCounting = () => {
    const numbers = document.querySelectorAll(".count");

    numbers.forEach((num) => {
      const target = +num.getAttribute("data-target");
      const speed = 80;

      const update = () => {
        const current = +num.innerText;
        const increment = target / speed;

        if (current < target) {
          num.innerText = Math.ceil(current + increment);
          setTimeout(update, 20);
        } else {
          num.innerText = target;
        }
      };

      num.innerText = "0";
      update();
    });
  };

  // COUNT ON PAGE LOAD
  startCounting();

  // COUNT WHEN SECTION IS SCROLLED INTO VIEW
  const observer = new IntersectionObserver(
    (entries) => {
      if (entries[0].isIntersecting) {
        startCounting();
      }
    },
    { threshold: 0.5 }
  );

  const section = document.querySelector("#statsSection");
  if (section) observer.observe(section);
}, []);


  // ⭐ Function to convert rating → stars
  const renderStars = (rating) => {
    const stars = Math.round(rating);
    return "⭐".repeat(stars);
  };

  return (
    <>
      

      {/* SWIPER SECTION */}
      <section className="hotel-swiper-section">
         <h2 className="swiper-title">Popular Hotels</h2>
  <p className="swiper-subtitle">Find the best hotels with comfort, luxury & best price</p>

        <Swiper
          modules={[Navigation, Autoplay]}
          navigation
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          slidesPerView={3}
          spaceBetween={20}
          breakpoints={{
            0: { slidesPerView: 1 },
            600: { slidesPerView: 2 },
            900: { slidesPerView: 3 },
          }}
          className="hotel-swiper"
        >
          {hotels.map((hotel, index) => (
            <SwiperSlide key={index}>
              <div className="hotel-card">
                <img src={hotel.image} alt={hotel.name} />

                <h4>{hotel.name}</h4>
                <p className="price">{hotel.price}</p>

                {/* ⭐ Star Ratings */}
                <p className="stars">{renderStars(hotel.rating)}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* 📌 STATS COUNTING SECTION */}
<section className="stats-section">
  <div className="stats-background"></div>
  <div className="stats-wrapper">

    <div className="stat-box">
      <h2 className="count" data-target="500">0</h2>
      <span className="plus">+</span>
      <p>Destinations Covered</p>
    </div>

    <div className="vertical-line"></div>

    <div className="stat-box">
      <h2 className="count" data-target="3">0</h2>
      <span className="plus">+</span>
      <p>Years Experience</p>
    </div>

    <div className="vertical-line"></div>

    <div className="stat-box">
      <h2 className="count" data-target="5000">0</h2>
      <span className="plus">+</span>
      <p>Happy Customers</p>
    </div>

    <div className="vertical-line"></div>

    <div className="stat-box">
      <h2 className="count" data-target="45">0</h2>
      <span className="plus">+</span>
      <p>Tour Guide</p>
    </div>

  </div>
</section>
    </>
  );
};

export default FeaturedRooms;
