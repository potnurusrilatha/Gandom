import React from "react";
import { useNavigate } from "react-router-dom";
import CoverImg from "../../assets/Images/4.Events/_Cover Special Promotion.png";

const EventsSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/events");
  };

  return (
    <section className="relative w-full overflow-hidden mt-16 lg:mt-24">
      {/* Background Image */}
      <img
        src={CoverImg}
        alt="Special Promotion Cover"
        className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Text + Button */}
      <div className="absolute inset-0 flex items-center justify-center lg:justify-start px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-[391px] space-y-6 text-center lg:text-left">
          <h2
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "40px",
              lineHeight: "150%",
              letterSpacing: "2.3%",
              color: "#DE7202",
            }}
          >
            <span className="block">Healthy catering for</span>
            <span className="block text-center">every occasion</span>
          </h2>

          <div className="flex justify-center lg:justify-center">
            <button
              onClick={handleClick}
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "20px",
                lineHeight: "130%",
                color: "#F2EDE0",
              }}
              className="bg-yellow-600 px-6 py-3 rounded hover:bg-yellow-500 transition"
            >
              Discover More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
