import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import EnquiryModal from "./EnquiryModal";


import "swiper/css";
import "./Packages.css";

function Packages() {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  return (
    <section className="packages-wrapper">
      <h2 className="text-4xl font-bold text-center mb-10">
        Popular Domestic Tour Packages You'll Love
      </h2>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{
          delay: 1800,
          disableOnInteraction: false,
        }}
        modules={[Autoplay]}
        className="packages-swiper"
      >

        {/* === Card 1 === */}
        <SwiperSlide>
          <div className="package-card">
            <div className="package-image">
              <img src="./agra.jpg" alt="Agra" />
              <span className="badge-days">4 Night 5 Days</span>
              <span className="badge-popular">POPULAR</span>
            </div>
            <div className="package-content">
              <h3 className="package-title">Agra Tour Package 4N & 5D</h3>
              <p className="package-location">Agra</p>
              <p className="package-inc">Inclusion</p>
              <div className="package-inc-list">
                Sightseeing • Hotel • Transport • Meals
              </div>
              <div className="package-buttons">
                <button className="btn-enquiry" onClick={() => setOpenModal(true)}>Enquiry Now</button>
                <button className="btn-details"
                  onClick={() => navigate("/packages/agra")}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* === Card 2 === */}
        <SwiperSlide>
          <div className="package-card">
            <div className="package-image">
              <img src="./thailand.png" alt="Mathura" />
              <span className="badge-days">4 Night 5 Days</span>
              <span className="badge-popular">POPULAR</span>
            </div>
            <div className="package-content">
              <h3 className="package-title">Mathura Tour Package 4N & 5D</h3>
              <p className="package-location">Mathura</p>
              <p className="package-inc">Inclusion</p>
              <div className="package-inc-list">
                Sightseeing • Hotel • Transport • Meals
              </div>
              <div className="package-buttons">
                <button className="btn-enquiry" onClick={() => setOpenModal(true)}>Enquiry Now</button>
                <button className="btn-details"
                  onClick={() => navigate("/packages/mathura")}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* === Card 3 === */}
        <SwiperSlide>
          <div className="package-card">
            <div className="package-image">
              <img src="./vrindavan.webp" alt="Vrindavan" />
              <span className="badge-days">4 Night 5 Days</span>
              <span className="badge-popular">POPULAR</span>
            </div>
            <div className="package-content">
              <h3 className="package-title">Vrindavan Tour Package 4N & 5D</h3>
              <p className="package-location">Vrindavan</p>
              <p className="package-inc">Inclusion</p>
              <div className="package-inc-list">
                Sightseeing • Hotel • Transport • Meals
              </div>
              <div className="package-buttons">
                <button className="btn-enquiry" onClick={() => setOpenModal(true)}>Enquiry Now</button>
                <button className="btn-details"
                  onClick={() => navigate("/packages/vrindavan")}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* === Card 4 (New) === */}
        <SwiperSlide>
          <div className="package-card">
            <div className="package-image">
              <img src="./varanasi.jpg" alt="Varanasi" />
              <span className="badge-days">5 Night 6 Days</span>
            </div>
            <div className="package-content">
              <h3 className="package-title">Varanasi Delight 5N & 6D</h3>
              <p className="package-location">Varanasi</p>
              <p className="package-inc">Inclusion</p>
              <div className="package-inc-list">
                Sightseeing • Hotel • Transport • Meals
              </div>
              <div className="package-buttons">
                <button className="btn-enquiry" onClick={() => setOpenModal(true)}>Enquiry Now</button>
                <button className="btn-details"
                  onClick={() => navigate("/packages/varanasi")}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* === Card 5 (New) === */}
        <SwiperSlide>
          <div className="package-card">
            <div className="package-image">
              <img src="./ayodhya2.jpg" alt="Ayodhya" />
              <span className="badge-days">5 Night 6 Days</span>
            </div>
            <div className="package-content">
              <h3 className="package-title">Ayodhya Trip 5N & 6D</h3>
              <p className="package-location">Ayodhya </p>
              <p className="package-inc">Inclusion</p>
              <div className="package-inc-list">
                Sightseeing • Hotel • Transport • Meals
              </div>
              <div className="package-buttons">
                <button className="btn-enquiry" onClick={() => setOpenModal(true)}>Enquiry Now</button>
                <button className="btn-details"
                  onClick={() => navigate("/packages/ayodhya")}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* === Card 6 (New) === */}
        <SwiperSlide>
          <div className="package-card">
            <div className="package-image">
              <img src="./lucknow.jpg" alt="Lucknow" />
              <span className="badge-days">5 Night 6 Days</span>
            </div>
            <div className="package-content">
              <h3 className="package-title">Lucknow Trip 5N & 6D</h3>
              <p className="package-location">Lucknow </p>
              <p className="package-inc">Inclusion</p>
              <div className="package-inc-list">
                Sightseeing • Hotel • Transport • Meals
              </div>
              <div className="package-buttons">
                <button className="btn-enquiry" onClick={() => setOpenModal(true)}>Enquiry Now</button>
                <button className="btn-details"
                  onClick={() => navigate("/packages/lucknow")}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* === Card 7 (New) === */}
        <SwiperSlide>
          <div className="package-card">
            <div className="package-image">
              <img src="./manali.jpeg" alt="Manali and Shimla" />
              <span className="badge-days">5 Night 6 Days</span>
            </div>
            <div className="package-content">
              <h3 className="package-title">Manali and Shimla Trip 5N & 6D</h3>
              <p className="package-location">Manali and Shimla </p>
              <p className="package-inc">Inclusion</p>
              <div className="package-inc-list">
                Sightseeing • Hotel • Transport • Meals
              </div>
              <div className="package-buttons">
                <button className="btn-enquiry" onClick={() => setOpenModal(true)}>Enquiry Now</button>
                <button className="btn-details"
                  onClick={() => navigate("/packages/manali_shimla")}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* === Card 8 (New) === */}
        <SwiperSlide>
          <div className="package-card">
            <div className="package-image">
              <img src="./nainital.jpg" alt="Mussoorie and Nainital " />
              <span className="badge-days">5 Night 6 Days</span>
            </div>
            <div className="package-content">
              <h3 className="package-title">Mussoorie and Nainital Trip 5N & 6D</h3>
              <p className="package-location">Mussoorie and Nainital </p>
              <p className="package-inc">Inclusion</p>
              <div className="package-inc-list">
                Sightseeing • Hotel • Transport • Meals
              </div>
              <div className="package-buttons">
                <button className="btn-enquiry" onClick={() => setOpenModal(true)}>Enquiry Now</button>
                <button className="btn-details"
                  onClick={() => navigate("/packages/mussoorie_nainital")}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        {/* === Card 9 (New) === */}
        <SwiperSlide>
          <div className="package-card">
            <div className="package-image">
              <img src="./goa.jpg" alt="Goa" />
              <span className="badge-days">5 Night 6 Days</span>
            </div>
            <div className="package-content">
              <h3 className="package-title">Goa Trip 5N & 6D</h3>
              <p className="package-location">Goa </p>
              <p className="package-inc">Inclusion</p>
              <div className="package-inc-list">
                Sightseeing • Hotel • Transport • Meals
              </div>
              <div className="package-buttons">
                <button className="btn-enquiry" onClick={() => setOpenModal(true)}>Enquiry Now</button>
                <button className="btn-details"
                  onClick={() => navigate("/packages/goa")}>
                  View Details
                </button>
              </div>
            </div>
          </div>
        </SwiperSlide>


      </Swiper>
      {/* ADD POPUP HERE — OUTSIDE SWIPER */}
      <EnquiryModal open={openModal} onClose={() => setOpenModal(false)} />

    </section>
  );
}
export default Packages;
