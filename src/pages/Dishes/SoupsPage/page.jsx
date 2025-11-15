import { useRef, useEffect, useState } from "react";
import SoupsCard from "../../../components/SoupsCard";

import CoverSoups from "../../../assets/Images/2.Dishes/_Cover Soups.png";
import AsheReshteh from "../../../assets/Images/2.Dishes/Ashe Reshteh.png";
import AsheDoogh from "../../../assets/Images/2.Dishes/Ashe Doogh.png";
import AsheAnar from "../../../assets/Images/2.Dishes/Ashe Anar.png";

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

  const soups = [
    {
      title: "Ashe Reshteh",
      calories: "62.50 SEK",
      description: "Noodle, Herb and Bean Pottage",
      image: AsheReshteh,
      nutrition: [
        { nutrient: "Calories", amount: "300–350 kcal", notes: "Filling but not as heavy as soups/stews" },
        { nutrient: "Protein", amount: "15–18 g", notes: "From chickpeas, beans, lentils, and yogurt" },
        { nutrient: "Fat", amount: "5–7 g", notes: "Olive oil, mostly healthy fats" },
        { nutrient: "Carbs", amount: "45–50 g", notes: "Slow-digesting carbs from legumes & noodles" },
        { nutrient: "Fiber", amount: "10–12 g", notes: "Very high in fiber great for digestion & feeling full" },
        { nutrient: "Sugars", amount: "4–6 g", notes: "Only natural sugars from legumes & yogurt (no added sugar)" },
        { nutrient: "Sodium", amount: "250–3500 mg", notes: "Can be reduced by using less salt" },
        { nutrient: "Micronutrients", amount: " ", notes: "Rich in folate, magnesium, potassium, iron, and antioxidants from herbs" },
      ],
    },
    {
      title: "Ashe Doogh",
      calories: "62.50 SEK",
      description: "Yogurt and herb soup",
      image: AsheDoogh,
      nutrition: [
        { nutrient: "Calories", amount: "250–300 kcal", notes: "Light yet nourishing; ideal as a balanced meal or snack" },
        { nutrient: "Protein", amount: "12–15 g", notes: "From yogurt, chickpeas, and lentils — supports muscle recovery" },
        { nutrient: "Fat", amount: "4–6 g", notes: "Mainly from yogurt and Olive oil; contains healthy fats" },
        { nutrient: "Carbs", amount: "35–40 g", notes: "Slow-releasing carbs from rice and legumes for steady energy" },
        { nutrient: "Fiber", amount: "8–10 g", notes: "High in fiber, helping digestion and keeping you full longer" },
        { nutrient: "Sugars", amount: "4–5 g", notes: "Naturally occurring from yogurt — no added sugar" },
        { nutrient: "Sodium", amount: "200–300 mg", notes: "Moderate salt content; can be reduced in low-sodium diets" },
        { nutrient: "Micronutrients", amount: "-", notes: "Rich in calcium, magnesium, potassium, and antioxidants from herbs; supports immunity, bone health, and metabolism" },
      ],
    },
    {
      title: "Ashe Anar",
      calories: "62.50 SEK",
      description: "Pomegranate-flavored soup",
      image: AsheAnar,
      nutrition: [
        { nutrient: "Calories", amount: "260–320 kcal", notes: "Light yet satisfying; naturally rich in flavor without heaviness" },
        { nutrient: "Protein", amount: "10–14 g", notes: "From lentils and legumes; supports recovery and sustained energy" },
        { nutrient: "Fat", amount: "3–6 g", notes: "Very low in fat; mostly from olive oil and natural sources" },
        { nutrient: "Carbs", amount: "40–48 g", notes: "Slow-digesting carbs from rice and lentils for steady energy release" },
        { nutrient: "Fiber", amount: "8–12 g", notes: "High fiber content promotes digestion and long-lasting fullness" },
        { nutrient: "Sugars", amount: "5–8 g", notes: "Natural sugars from pomegranate — no added sugar" },
        { nutrient: "Sodium", amount: "220–330 mg", notes: "Moderate sodium; can be reduced with less salt" },
        { nutrient: "Micronutrients", amount: "-", notes: "Rich in vitamin C, antioxidants, folate, and minerals from pomegranate and herbs; supports immunity, heart health, and anti-inflammatory benefits" },
      ],
    },
  ];

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
