import CoverDeliveryBoxMenu from "../../../assets/Images/5.Delivery/_Cover Box Menu.png";
import DeliveryCard from "../../../components/DeliveryCard";
import DeliveryBox1 from "../../../assets/Images/5.Delivery/DeliveryBox1.png";
import DeliveryBox2 from "../../../assets/Images/5.Delivery/DeliveryBox2.png";
import DeliveryBox3 from "../../../assets/Images/5.Delivery/DeliveryBox3.png";
import DeliveryBox4 from "../../../assets/Images/5.Delivery/DeliveryBox4.png";

import { useRef, useEffect, useState } from "react";

const DeliveryBoxMenuPage = () => {
  const healthyRef = useRef(null);
  const [tOffset, setTOffset] = useState(0);

  useEffect(() => {
    if (healthyRef.current) {
      const letters = healthyRef.current.querySelectorAll("span");
      if (letters[1]) {
        const rect = letters[1].getBoundingClientRect();
        const containerRect = healthyRef.current.getBoundingClientRect();
        setTOffset(rect.left - containerRect.left);
      }
    }
  }, []);

  return (
    <>
      {/* HERO SECTION */}
      <section
        className="relative w-full flex flex-col md:flex-row items-center overflow-hidden"
        style={{
          minHeight: "550px",
          backgroundImage: `url(${CoverDeliveryBoxMenu})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* TEXT COLUMN */}
        <div className="w-full md:w-1/2 flex flex-col justify-start z-10 px-4 sm:px-6 md:px-16 lg:px-24 mt-6 md:mt-[-140px]">
          <div className="relative w-full md:w-fit mx-auto md:mx-0 text-center md:text-left">
            <h1
              className="text-primaryHover font-Robot font-bold leading-[132%]"
              style={{
                fontSize: "clamp(28px, 6vw, 94px)",
                letterSpacing: "-0.02em",
              }}
            >
              Create your
            </h1>

            {/* Box Menu below "Create your" */}
            <h2
              className="font-santa block mt-3 md:absolute"
              style={{
                color: "#EA3FB8",
                fontWeight: 400,
                lineHeight: "162%",
                letterSpacing: "-0.02em",
                whiteSpace: "nowrap",
                fontSize: "clamp(28px, 6vw, 94px)",
                width: "100%",
                left: "0",
                top: "100%",
                transform: "translate(40px, -20px) rotate(-3.62deg)", 
                transformOrigin: "left center",
                textAlign: "center",
              }}
            >
              Box Menu
            </h2>
          </div>
        </div>

        <div className="w-full md:w-1/2" />
      </section>

      {/* MENU CARDS SECTION */}
      <section className="bg-grayLight px-4 sm:px-8 md:px-16 py-12">
        <div className="w-full max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
