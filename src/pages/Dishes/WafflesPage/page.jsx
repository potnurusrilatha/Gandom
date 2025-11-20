import CoverWaffle from "../../../assets/Images/2.Dishes/_Cover Waffle.png";
import WafflesCard from "../../../components/WafflesCard";
import { useRef, useEffect, useState } from "react";
import { wafflesData } from "../../../data/waffles.js";

const WafflesPage = () => {
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
          src={CoverWaffle}
          alt="Waffles hero cover"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Text Overlay */}
        <div className="relative z-10 flex flex-col justify-center items-start w-full md:w-1/2 px-4 sm:px-8 md:px-16 lg:px-24">
          <h1
            ref={healthyRef}
            className="text-primaryHover font-roboto font-bold text-center md:text-left leading-tight tracking-tight relative"
            style={{
              fontSize: "clamp(40px, 6vw, 94px)",
              lineHeight: "132%",
              letterSpacing: "-0.02em",
            }}
          >
            H<span>e</span><span>a</span><span>l</span>thy

            {/* Rotated Waffles */}
            <span
              className="absolute text-[#0C8CE9] font-santa font-normal"
              style={{
                fontSize: "clamp(28px, 5vw, 94px)", // smaller on mobile
                top: "80%",
                left: `clamp(${offsetL + 8}px, 50%, 300px)`, // responsive left position
                transform: "rotate(-3.62deg)",
                transformOrigin: "left center",
                whiteSpace: "nowrap",
              }}
            >
              Waffles
            </span>
          </h1>
        </div>
      </section>

      {/* Waffles Cards */}
      <section className="bg-grayLight flex flex-col items-center px-4 sm:px-8 md:px-16 py-12 gap-6">
        <div className="w-full max-w-6xl flex flex-col md:flex-row flex-wrap gap-6 justify-center">
          {wafflesData.map((waffle, idx) => (
            <WafflesCard
              key={idx}
              title={waffle.title}
              price={waffle.calories}
              description={waffle.description}
              image={waffle.image}
              nutrition={waffle.nutrition}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default WafflesPage;
