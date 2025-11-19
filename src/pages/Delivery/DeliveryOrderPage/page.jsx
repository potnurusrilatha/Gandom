import CoverDelivery from "../../../assets/Images/5.Delivery/_Cover Delivery.png";
import DeliveryCard from "../../../components/DeliveryCard";
import FoodoraAsheReshteh from "../../../assets/Images/5.Delivery/Foodora - Ashe Reshteh.png";
import FoodoraAsheDoogh from "../../../assets/Images/5.Delivery/Foodora - Ashe Doogh.png";
import FoodoraAsheAnar from "../../../assets/Images/5.Delivery/Foodora - Ashe Anar.png";
import FoodoraSholeZard from "../../../assets/Images/5.Delivery/Foodora - Shole Zard.png";
import MenuGandom from "../../../assets/Images/5.Delivery/Menu Gandom.png";

import { useRef, useEffect, useState } from "react";

const DeliveryOrderPage = () => {
  const healthyRef = useRef(null);
  const [tOffset, setTOffset] = useState(0);

  useEffect(() => {
    if (healthyRef.current) {
      const letters = healthyRef.current.querySelectorAll("span");
      if (letters[1] && letters[4]) {
        const rect = letters[1].getBoundingClientRect();
        const containerRect = healthyRef.current.getBoundingClientRect();
        setTOffset(rect.left - containerRect.left);
      }
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full flex flex-col md:flex-row items-center justify-center overflow-hidden pt-12 sm:pt-16 md:pt-0 min-h-[350px] sm:min-h-[400px] md:min-h-[calc(100vh-90px)]">
        
        {/* Text Column */}
        <div className="relative flex flex-col justify-center items-center md:items-start w-full md:w-1/2 px-4 sm:px-8 md:px-16 lg:px-24">
          
          {/* Delivery Heading */}
          <h1
            ref={healthyRef}
            className="text-primaryHover font-lexend font-bold text-center md:text-left"
            style={{
              fontSize: "clamp(40px, 6vw, 94px)",
              lineHeight: "132%",
              letterSpacing: "-0.02em",
            }}
          >
            {"Delivery".split("").map((letter, idx) => (
              <span key={idx}>{letter}</span>
            ))}
          </h1>
          {/* Order Heading */}
          <h2
            className="font-santa absolute flex items-center justify-center"
            style={{
              color: "#EA3FB8",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "clamp(36px, 5vw, 94px)",
              lineHeight: "132%",
              letterSpacing: "-0.02em",
              transform: `translateX(${tOffset}px) translateY(100%) rotate(3.62deg)`,
              transformOrigin: "left center",
              width: "clamp(200px, 25vw, 338px)",
              height: "clamp(90px, 10vh, 124px)",
              whiteSpace: "nowrap",
              textAlign: "center",
            }}
          >
            Order
          </h2>
        </div>

        {/* Image Column */}
        <div className="relative flex items-center justify-center w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[calc(100vh-90px)] mt-8 md:mt-0">
          <img
            src={CoverDelivery}
            alt="Healthy waffle cover image"
            className="w-full h-full max-h-[500px] sm:max-h-[400px] md:max-h-[473px] object-contain"
          />
        </div>
      </section>

      {/*  Order Box Section */}
      <section className="bg-grayLight px-4 sm:px-8 md:px-16 py-12">
  <div className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
    <DeliveryCard
      title="Ashe Reshteh"
      calories="300–350 kcal"
      description="Noodle, Herb and Bean Pottage"
      image={FoodoraAsheReshteh}
    />
    <DeliveryCard
      title="Ashe Doogh"
      calories="250–300 kcal"
      description="Refreshing Yogurt Soup"
      image={FoodoraAsheDoogh}
    />
    <DeliveryCarda
      title="Ashe Anar"
      calories="260–320 kcal"
      description="Pomegranate and Herb Pottage"
      image={FoodoraAsheAnar}
    />
    <DeliveryCard
      title="Shole Zard"
      calories="180–230 kcal"
      description="Saffron Rice Pudding"
      image={FoodoraSholeZard}
    />
    <DeliveryCard
      title="Menu Your Own Box"
      calories="it's your dish"
      description="9 different dishes"
      image={MenuGandom}
    />
  </div>
</section>
    </>
  );
};

export default DeliveryOrderPage;
