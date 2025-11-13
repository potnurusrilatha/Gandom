import DessertCard from "../../../components/DessertCard"
import sholeZardImg from "../../../assets/Images/2.Dishes/Shole Zard.png";
import CoverDessert from "../../../assets/Images/2.Dishes/_Cover Dessert.png"

const DessertPage = () => {
  return (
    <>
    <section
      className="relative w-full min-h-[calc(100vh-90px)] flex flex-col md:flex-row items-center justify-center overflow-hidden -mt-[112px]"
    >
      <div className="flex flex-col justify-center items-start w-full md:w-1/2 px-4 sm:px-8 md:px-16 lg:px-24 h-full">
        <div className="w-full">
          <h1
            className="text-primaryHover font-lexend font-bold leading-tight tracking-tight text-center md:text-center"
            style={{
              fontSize: "clamp(40px, 6vw, 94px)", 
              lineHeight: "132%",
              letterSpacing: "-0.02em",
            }}
          >
            <span className="block">Healthy</span>
            <span className="block">HomeBaked</span>
          </h1>

         
          <h2
            className="text-warning font-santa mt-4 text-center md:text-center"
            style={{
              fontSize: "clamp(36px, 5vw, 94px)", 
              transform: "rotate(3.62deg)",
            }}
          >
            Desserts
          </h2>
        </div>
      </div>

      <div className="relative flex items-center justify-center w-full md:w-1/2 h-full">
        <img
          src={CoverDessert}
          alt="Desserts Cover"
          className="object-contain w-[80%] sm:w-[70%] md:w-[90%] lg:w-[1003px] h-auto max-h-[473px]"
        />
      </div>
    </section>
    
      <section className="bg-grayLight flex justify-start items-start py-12 px-4">
  <div className="max-w-5xl w-full">
    <DessertCard
      title="Shole Zard"
      calories="120–130 kcal"
      description="Persian Saffron Rice Pudding"
      image={sholeZardImg}
    />
  </div>
</section>

    </>
  );
};

export default DessertPage;
