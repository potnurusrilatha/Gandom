import CoverDeliveryBoxMenu from "../../../assets/Images/5.Delivery/_Cover Box Menu.png";
import DeliveryCard from "../../../components/DeliveryCard";
import DeliveryBox1 from "../../../assets/Images/5.Delivery/DeliveryBox1.png";
import DeliveryBox2 from "../../../assets/Images/5.Delivery/DeliveryBox2.png";
import DeliveryBox3 from "../../../assets/Images/5.Delivery/DeliveryBox3.png";
import DeliveryBox4 from "../../../assets/Images/5.Delivery/DeliveryBox4.png";

import { useRef, useEffect, useState } from "react";

const DeliveryBoxMenuPage = () => {
  const createRef = useRef(null);
  const [offsetX, setOffsetX] = useState(0);

  useEffect(() => {
    if (createRef.current) {
      const letters = createRef.current.querySelectorAll("span");
      if (letters[1]) {
        const rect = letters[1].getBoundingClientRect();
        const containerRect = createRef.current.getBoundingClientRect();
        setOffsetX(rect.left - containerRect.left);
      }
    }
  }, []);

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] md:min-h-[calc(100vh-90px)]">
        <img
          src={CoverDeliveryBoxMenu}
          alt="Box Menu Hero"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Left Gradient Overlay */}
        <div className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-[#F7F4EF] via-[#F7F4EF]/80 to-transparent pointer-events-none" />

        {/* Text */}
        <div className="absolute w-full flex flex-col items-center md:items-start px-4 md:px-16 top-1/2 transform -translate-y-1/2">
          {/* "Create your" */}
          <h1
            ref={createRef}
            className="text-primaryHover font-lexend font-bold leading-tight text-center md:text-left"
            style={{
              fontSize: "clamp(32px, 8vw, 94px)",
            }}
          >
            {"Create your".split("").map((letter, idx) => (
              <span key={idx}>{letter}</span>
            ))}
          </h1>

          {/* "Box Menu" aligned with the E */}
          <span
            className="font-santa text-pink-500 block mt-2 md:mt-[-20px]"
            style={{
              fontSize: "clamp(28px, 8vw, 94px)",
              transform: `translateX(${offsetX}px) rotate(-3.62deg)`,
              transformOrigin: "left center",
            }}
          >
            Box Menu
          </span>
        </div>
      </section>

      {/* Cards Section */}
      <section className="bg-grayLight px-4 sm:px-8 md:px-16 py-12">
        <div className="w-full max-w-[1248px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <DeliveryCard
            title="Ashe Reshteh"
            calories="300–350 kcal"
            description="Noodle, Herb and Bean Pottage"
            image={DeliveryBox1}
          />
          <DeliveryCard
            title="Ashe Doogh"
            calories="250–300 kcal"
            description="Refreshing Yogurt Soup"
            image={DeliveryBox2}
          />
          <DeliveryCard
            title="Ashe Anar"
            calories="260–320 kcal"
            description="Pomegranate and Herb Pottage"
            image={DeliveryBox3}
          />
          <DeliveryCard
            title="Shole Zard"
            calories="180–230 kcal"
            description="Saffron Rice Pudding"
            image={DeliveryBox4}
          />
        </div>
      </section>
    </>
  );
};

export default DeliveryBoxMenuPage;
