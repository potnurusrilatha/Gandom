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
 <div className="absolute w-full flex flex-col items-center md:items-start px-4 md:px-16 top-1/2 transform -translate-y-1/2">
  {/* "Create your" */}
  <h1
    className="text-primaryHover font-lexend font-bold leading-tight text-center md:text-left"
    style={{
      fontSize: "clamp(32px, 6vw, 94px)"
    }}
  >
    {"Create your".split("").map((letter, idx) => (
      <span key={idx}>{letter}</span>
    ))}
  </h1>

  {/* "Box Menu" */}
  <span
    className="font-santa text-pink-500 block mt-2 md:mt-[-20px]"
    style={{
      fontSize: "clamp(28px, 5vw, 94px)",
      transform: "translateX(clamp(20px, 5vw, 70px)) rotate(-3.62deg)",
      transformOrigin: "left center"
    }}
  >
    Box Menu
  </span>
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
