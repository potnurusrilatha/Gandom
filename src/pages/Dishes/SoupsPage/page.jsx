import { useRef, useEffect, useState } from "react";
import SoupsCard from "../../../components/SoupsCard";
import { soupsdata } from "../../../data/soupsdata.js";
import CoverSoups from "../../../assets/Images/2.Dishes/_Cover Soups1.png";

const SoupsPage = () => {
  const healthyRef = useRef(null);
  const [offsetL, setOffsetL] = useState(0);

  useEffect(() => {
    const calculateOffset = () => {
      if (healthyRef.current) {
        const letters = healthyRef.current.querySelectorAll("span");
        if (letters[2]) {
          const rect = letters[2].getBoundingClientRect();
          const containerRect = healthyRef.current.getBoundingClientRect();
          setOffsetL(rect.left - containerRect.left);
        }
      }
    };

    calculateOffset();
    window.addEventListener("resize", calculateOffset);
    return () => window.removeEventListener("resize", calculateOffset);
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] md:min-h-[calc(100vh-90px)] flex items-center overflow-hidden">
        {/* Background Image */}
        <img
          src={CoverSoups}
          alt="Soups hero cover"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Text Overlay */}
        <div className="relative z-10 flex flex-col justify-center items-start w-full md:w-1/2 px-4 sm:px-8 md:px-16 lg:px-24">
          <h1
            ref={healthyRef}
            className="text-primaryHover font-roboto font-bold text-center md:text-left leading-tight tracking-tight"
            style={{
              fontSize: "clamp(40px, 6vw, 94px)",
              lineHeight: "132%",
              letterSpacing: "-0.02em",
              position: "relative",
            }}
          >
            H<span>e</span><span>a</span><span>l</span>thy

            {/* Rotated "Soups" text, responsive */}
            <span
              className="absolute text-[#6A835D] font-santa"
              style={{
                fontSize: "clamp(36px, 5vw, 94px)",
                top: "80%",
                left: "calc(50% + 1rem)",
                transform: "rotate(-3.62deg)",
                transformOrigin: "left center",
                whiteSpace: "nowrap",
              }}
            >
              Soups
            </span>
          </h1>
        </div>
      </section>

      {/* Soups Cards Section */}
      <section className="bg-grayLight flex flex-col items-center px-4 sm:px-8 md:px-16 py-12 gap-6">
        {soupsdata.map((soup, idx) => (
          <SoupsCard
            key={idx}
            title={soup.title}
            price={soup.calories}
            description={soup.description}
            image={soup.image}
            nutrition={soup.nutrition}
          />
        ))}
      </section>
    </>
  );
};

export default SoupsPage;
