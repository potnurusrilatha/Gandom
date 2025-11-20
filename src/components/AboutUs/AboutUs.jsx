import React from "react";
import { useNavigate } from "react-router-dom";
import AboutImg from "../../assets/Images/1.Home Page/_CoverAboutUs.png";

const AboutUsSection = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/about-us");
  };

  return (
    <section className="relative w-full overflow-hidden mt-16 lg:mt-24 mb-8 lg:mb-12">
      {/* Background Image */}
      <img
        src={AboutImg}
        alt="About Us"
        className="w-full h-[400px] sm:h-[450px] md:h-[500px] lg:h-[600px] object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Text + Button */}
      <div className="absolute inset-0 flex items-center justify-center lg:justify-start px-4 sm:px-6 md:px-10 lg:px-16">
        <div className="max-w-[650px] space-y-6 sm:space-y-8 text-center lg:text-center">
          <h2 className="text-[24px] sm:text-[28px] md:text-[32px] lg:text-[40px] font-inter font-bold leading-tight text-[#E6B220]">
            Every dish is made with
            <br />
            love, passion, and the
            <br />
            warmth of home
          </h2>

          <div className="flex justify-center lg:justify-center">
            <button
              onClick={handleClick}
              className="bg-yellow-600 text-white font-semibold px-5 sm:px-6 py-2 sm:py-3 rounded hover:bg-yellow-500 transition text-[16px] sm:text-[18px] md:text-[20px]"
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
