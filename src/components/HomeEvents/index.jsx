import React from "react";
import { useNavigate } from "react-router-dom";
import CateringImg from "../../assets/Images/1.Home Page/Catering.png";

const EventsSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/events");
  };

  return (
    <section className="relative w-full h-[500px] lg:h-[600px] overflow-hidden mt-16 lg:mt-24">
      <img
        src={CateringImg}
        alt="Catering Buffet"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="relative w-full h-full flex items-center px-6 lg:px-16">
        <div className="max-w-[391px] text-left flex flex-col">
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
          <div className="flex justify-center mt-6">
            <button
              onClick={handleClick}
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 600, 
                fontSize: "20px",
                lineHeight: "130%",
                color: "#F2EDE0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
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
