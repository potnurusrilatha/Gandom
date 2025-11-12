import Waffle from "../../../assets/Images/2.Dishes/Waffle.png";
import CoverWaffle from "../../../assets/Images/2.Dishes/_Cover Waffle.png";
import WafflesCard from "../../../components/WafflesCard";
import WaffleVegetarianHerb from "../../../assets/Images/2.Dishes/Waffle - Vegetarian Herb.png";
import HerbalDelightWaffle from "../../../assets/Images/2.Dishes/Waffle - Herbal Delight.png";
import MatchaWaffle from "../../../assets/Images/2.Dishes/Waffle - Matcha.png";
import BeetrootWaffle from "../../../assets/Images/2.Dishes/Waffle - Beetroot.png";
import CarrotWaffle from "../../../assets/Images/2.Dishes/Waffle - carrots.png"
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
      <section className="relative w-full flex flex-col md:flex-row items-center justify-center overflow-hidden pt-12 sm:pt-16 md:pt-0 min-h-[350px] sm:min-h-[400px] md:min-h-[calc(100vh-90px)]">
        
        <div className="relative flex flex-col justify-center items-center md:items-start w-full md:w-1/2 px-4 sm:px-8 md:px-16 lg:px-24">
          <h1
            ref={healthyRef}
            className="text-primaryHover font-lexend font-bold text-center md:text-left"
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

         <h2 className="font-santa absolute flex items-center justify-center"
            style={{
            color: "#0C8CE9",
            fontWeight: 400,
            fontStyle: "normal",
            fontSize: "clamp(36px, 5vw, 94px)",
            lineHeight: "132%",
            letterSpacing: "-0.02em",
            transform: "rotate(3.62deg) translate(48%, 100%)",
            transformOrigin: "left center",
            width: "clamp(200px, 25vw, 338px)",
            height: "clamp(90px, 10vh, 124px)",
            whiteSpace: "nowrap",  
            textAlign: "center",
            }}
            >
            Waffles
        </h2>
    </div>

        
        <div className="relative flex items-center justify-center w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[calc(100vh-90px)] mt-8 md:mt-0">
          <img
            src={CoverWaffle}
            alt="Healthy waffle cover image"
            className="w-full h-full max-h-[500px] sm:max-h-[400px] md:max-h-[473px] object-contain"
          />
        </div>
      </section>

      <section className="bg-grayLight flex justify-start items-start px-4 sm:px-8 md:px-16 py-12">
        <div className="w-full max-w-5xl flex flex-col md:flex-row flex-wrap gap-6">
          <WafflesCard
            title="Soy Waffle"
            calories="220–300 kcal"
            description="Waffle Ingredients"
            image={Waffle}
          />
          <WafflesCard
            title="Vegetarian Herb Waffle"
            calories="250–320 kcal"
            description="Waffle Ingredients"
            image={WaffleVegetarianHerb}
          />
          <WafflesCard
            title="Herbal Delight Waffle"
            calories="250–320 kcal"
            description="Waffle Ingredients"
            image={HerbalDelightWaffle}
          />
          <WafflesCard
            title="Match Waffle"
            calories="250–320 kcal"
            description="Waffle Ingredients"
            image={MatchaWaffle}
          />
          <WafflesCard
            title="Beetroot Waffle"
            calories="250–320 kcal"
            description="Waffle Ingredients"
            image={BeetrootWaffle}
          />
          <WafflesCard
            title="Carrot Waffle"
            calories="250–320 kcal"
            description="Waffle Ingredients"
            image={CarrotWaffle}
          />
        </div>
      </section>
    </>
  );
};

export default WafflesPage;
