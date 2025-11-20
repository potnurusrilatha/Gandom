import CoverDelivery from "../../../assets/Images/5.Delivery/_Cover Delivery.png";
import DeliveryCard from "../../../components/DeliveryCard";
import FoodoraAsheReshteh from "../../../assets/Images/5.Delivery/Foodora - Ashe Reshteh.png";
import FoodoraAsheDoogh from "../../../assets/Images/5.Delivery/Foodora - Ashe Doogh.png";
import FoodoraAsheAnar from "../../../assets/Images/5.Delivery/Foodora - Ashe Anar.png";
import FoodoraSholeZard from "../../../assets/Images/5.Delivery/Foodora - Shole Zard.png";
import MenuGandom from "../../../assets/Images/5.Delivery/Menu Gandom.png";
import { useNavigate } from "react-router-dom";

import { useRef, useEffect, useState } from "react";

const DeliveryOrderPage = () => {
  const navigate = useNavigate();
  const healthyRef = useRef(null);
  const [tOffset, setTOffset] = useState(0);

 
  const [activeMenu, setActiveMenu] = useState(false);

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
      {/* Hero Section */}
<div className="w-full relative">
  <section className="relative w-full min-h-[500px] md:min-h-[calc(100vh-90px)]">
    {/* Hero Image */}
    <img
      src={CoverDelivery}
      alt="Delivery hero cover"
      className="absolute inset-0 w-full h-full object-cover"
    />
    <div className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-[#F7F4EF] via-[#F7F4EF]/80 to-transparent pointer-events-none" />
    <div className="absolute left-16 md:left-40 top-52 md:top-64">
      <h1 className="leading-tight text-left">
        <span
          ref={healthyRef}
          className="block text-primaryHover font-lexend font-bold text-4xl sm:text-5xl md:text-[94px] tracking-tight"
        >
          {"Delivery".split("").map((letter, idx) => (
            <span key={idx}>{letter}</span>
          ))}
        </span>
        <span
          className="block font-santa text-pink-500 text-4xl sm:text-5xl md:text-[94px]"
          style={{
            transform: `translateX(${tOffset + 50}px) translateY(25px) rotate(-3.62deg)`,
            transformOrigin: "left center",
          }}
        >
          Order
        </span>
      </h1>
    </div>
  </section>
</div>

{/* Delivery Cards Section */}
<section className="bg-grayLight px-4 sm:px-8 md:px-16 py-12">
  <div
    className="w-full max-w-[1248px] mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
    style={{
      gap: "24px", 
      justifyContent: "center", 
    }}
  >
    <DeliveryCard
      title="Ashe Reshteh"
      calories="300–350 kcal"
      description="Noodle, Herb and Bean Pottage"
      image={FoodoraAsheReshteh}
      onPlusClick={() => setActiveMenu(true)}
    />
    <DeliveryCard
      title="Ashe Doogh"
      calories="250–300 kcal"
      description="Refreshing Yogurt Soup"
      image={FoodoraAsheDoogh}
      onPlusClick={() => setActiveMenu(true)}
    />
    <DeliveryCard
      title="Ashe Anar"
      calories="260–320 kcal"
      description="Pomegranate and Herb Pottage"
      image={FoodoraAsheAnar}
      onPlusClick={() => setActiveMenu(true)}
    />
    <DeliveryCard
      title="Shole Zard"
      calories="180–230 kcal"
      description="Saffron Rice Pudding"
      image={FoodoraSholeZard}
      onPlusClick={() => setActiveMenu(true)}
    />
    <DeliveryCard
      title="Menu Your Own Box"
      calories="it's your dish"
      description="9 different dishes"
      image={MenuGandom}
       onPlusClick={() => navigate("/delivery/createboxmenu")}
           style={{
              border: activeMenu ? "2px solid #EA3FB8" : "1px solid #E0E0E0",
            }}
    />
  </div>
</section>

    </>
  );
};

export default DeliveryOrderPage;
