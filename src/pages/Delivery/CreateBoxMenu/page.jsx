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
      if (letters[2] && letters[4]) {
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
<div className="relative w-full md:w-1/2 px-4 sm:px-8 md:px-16 lg:px-24 flex flex-col">

  <div className="relative w-fit mx-auto md:mx-0">

    {/* Create your heading */}
    <h1
      className="text-primaryHover font-Robot font-bold whitespace-nowrap leading-[132%]"
      style={{
        fontSize: "clamp(38px, 6vw, 94px)",
        letterSpacing: "-0.02em",
      }}
    >
      Create your
    </h1>

    {/* Box Menu heading */}
    <h2
  className="font-santa absolute"
  style={{
    color: "#EA3FB8",
    fontWeight: 400,
    letterSpacing: "-0.02em",
    lineHeight: "162%",
    whiteSpace: "nowrap",
    textAlign: "center",

    fontSize: "clamp(36px, 5vw, 94px)",
    width: "clamp(200px, 20vw, 416px)",
    height: "clamp(60px, 10vw, 124px)",
    left: "clamp(45px, 12vw, 128px)",
    top: "100%",
    transform: "rotate(-3.62deg)",
    transformOrigin: "left center",
  }}
>
  Box Menu
</h2>

  </div>
</div>


        {/* Image Column */}
        <div className="relative flex items-center justify-center w-full md:w-1/2 h-[300px] sm:h-[400px] md:h-[calc(100vh-90px)] mt-8 md:mt-0">
          <img
            src={CoverDeliveryBoxMenu}
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
