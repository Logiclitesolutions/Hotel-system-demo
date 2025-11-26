import React from "react";
import { ArrowRight } from "lucide-react";
import "./Travel.css";

 function Travel() {
  const items = [
    {
      title: "Expert Travel Guidance",
      desc: "Our experienced team provides personalized travel advice for every trip",
      icon: "🛡️",
      bg: "#E8F8F6",
    },
    {
      title: "Curated Packages",
      desc: "Enjoy thoughtfully crafted tour packages tailored to your preferences and budget",
      icon: "👨‍💼",
      bg: "#FAECF4",
    },
    {
      title: "24/7 Customer Support",
      desc: "We’re available around the clock to assist you with any travel queries or concerns",
      icon: "📞",
      bg: "#E9F2FF",
    },
    {
      title: "Affordable Rates",
      desc: "We offer competitive pricing without compromising the quality of your travel experience",
      icon: "💳",
      bg: "#F4F1FB",
    },
  ];

  return (
    <section className="why-wrapper">
      <h2 className="text-4xl font-bold mb-2">Why Travel With Us?</h2>
      <p className="text-gray-500 mb-12 text-lg">
        The best booking platform you can trust
      </p>

      <div className="why-grid">
        {items.map((item, index) => (
          <div
            key={index}
            className="why-card"
            style={{ backgroundColor: item.bg }}
          >
            <div className="why-icon">{item.icon}</div>
            <h3 className="why-title">{item.title}</h3>
            <p className="why-desc">{item.desc}</p>
            <button className="why-btn">
              Learn More <ArrowRight size={16} />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
export default Travel;