import React from "react";
import { useNavigate } from "react-router-dom";
import AboutImg from "../../assets/Images/1.Home Page/_CoverAboutUs.png";

const AboutUsSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about-us");
  };

  return (
    <section className="relative w-full h-[500px] lg:h-[600px] overflow-hidden mt-16 lg:mt-24 mb-4">
      {/* Background Image */}
      <img
        src={AboutImg}
        alt="About Us"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Text + Button */}
      <div className="relative z-10 flex h-full items-center px-6 lg:px-16">
        <div className="max-w-[650px] space-y-8 text-center">
          <h2 className="text-[28px] sm:text-[32px] md:text-[36px] lg:text-[40px] font-inter font-bold leading-tight text-[#E6B220]">
            Every dish is made with
            <br />
            love, passion, and the
            <br />
            warmth of home
          </h2>

          {/* Button centered relative to text block */}
          <div className="flex justify-center md:justify-center">
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

export default AboutUsSection;
