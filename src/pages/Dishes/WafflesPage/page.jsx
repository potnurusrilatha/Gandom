import CoverWaffle from "../../../assets/Images/2.Dishes/_Cover Waffle.png";
import WafflesCard from "../../../components/WafflesCard";
import { wafflesData } from "../../../data/waffles.js"; 

import { useRef, useEffect, useState } from "react";

const WafflesPage = () => {
  const healthyRef = useRef(null);
  const [tOffset, setTOffset] = useState(0);

  useEffect(() => {
    if (healthyRef.current) {
      const letters = healthyRef.current.querySelectorAll("span");
      if (letters[2]) {
        const rect = letters[2].getBoundingClientRect();
        const containerRect = healthyRef.current.getBoundingClientRect();
        setTOffset(rect.left - containerRect.left);
      }
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <div className="relative flex items-center justify-center h-[474px] bg-grayLight overflow-hidden mb-16">
        <div className="relative flex flex-col justify-center items-center md:items-start w-full md:w-1/2 px-4 sm:px-8 md:px-16 lg:px-24 md:-ml-0 md:mr-0 h-full ">
          <h1
            ref={healthyRef}
            className="text-primaryHover font-Roboto font-bold text-center md:text-left"
            style={{
              fontSize: "clamp(40px, 6vw, 94px)",
              lineHeight: "132%",
              letterSpacing: "-0.02em",
            }}
          >
            {"Healthy".split("").map((letter, idx) => (
              <span key={idx}>{letter}</span>
            ))}
          </h1>

          <h2
            className="font-santa absolute flex items-center justify-center"
            style={{
              color: "#0C8CE9",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "clamp(36px, 5vw, 94px)",
              lineHeight: "132%",
              letterSpacing: "-0.02em",
              transform: "rotate(-3.62deg) translate(38%, 100%)",
              transformOrigin: "left center",
              width: "clamp(200px, 25vw, 338px)",
              height: "clamp(90px, 120vh, 124px)",
              whiteSpace: "nowrap",
              textAlign: "center",
            }}
          >
            Waffles
          </h2>
        </div>

        <div className="w-full h-full -ml-24">
          <img
            src={CoverWaffle}
            alt="Healthy waffle cover"
            className="w-full h-full object-cover object-center"
          />
        </div>
      </div>

      {/* Waffles Cards Section */}
      <section className="bg-grayLight flex justify-start items-start px-4 sm:px-8 md:px-16 py-12">
        <div className="w-full max-w-5xl flex flex-col md:flex-row flex-wrap gap-6">
          {wafflesData.map((waffle, idx) => (
            <WafflesCard
              key={idx}
              title={waffle.title}
              calories={waffle.calories}
              description={waffle.description}
              images={waffle.images}
              nutrition={waffle.nutrition} 
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default WafflesPage;
