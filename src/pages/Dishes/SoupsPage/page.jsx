import { useRef, useEffect, useState } from "react";
import SoupsCard from "../../../components/SoupsCard";
import { soupsdata } from "../../../data/soupsdata.js";

const soups = soupsdata;
import CoverSoups from "../../../assets/Images/2.Dishes/_Cover Soups.png";

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
      {/* Header Section */}
      <section className="relative w-full flex flex-col md:flex-row items-center justify-center overflow-hidden pt-12 sm:pt-16 md:pt-0 min-h-[350px] sm:min-h-[400px] md:min-h-[calc(100vh-90px)]">
        {/* Left side: Text */}
        <div className="relative flex flex-col justify-center items-center md:items-start w-full md:w-1/2 px-4 sm:px-8 md:px-16 lg:px-24">
          <h1
            ref={healthyRef}
            className="text-primaryHover font-lexend font-bold text-center md:text-left"
            style={{
              fontSize: "clamp(40px, 6vw, 94px)",
              lineHeight: "132%",
              letterSpacing: "-0.02em",
              position: "relative",
            }}
          >
            H<span>e</span><span>a</span><span>l</span>thy
            <span
              className="absolute text-[#6A835D] font-santa font-normal"
              style={{
                fontSize: "clamp(36px, 5vw, 94px)",
                lineHeight: "132%",
                top: "80%",
                left: `${offsetL}px`,
                transform: "rotate(3.62deg)",
                transformOrigin: "left center",
                whiteSpace: "nowrap",
              }}
            >
              Soups
            </span>
          </h1>
        </div>

        {/* Right side: Cover Image */}
        <div className="relative flex items-center justify-center w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[calc(100vh-90px)] mt-8 md:mt-0">
          <img
            src={CoverSoups}
            alt="Soups Cover"
            className="w-full h-full max-h-[500px] sm:max-h-[400px] md:max-h-[473px] object-contain"
          />
        </div>
      </section>

      {/* Soups Cards */}
      <section className="bg-grayLight flex flex-col items-center px-4 sm:px-8 md:px-16 py-12 gap-6">
        {soups.map((soup, idx) => (
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
