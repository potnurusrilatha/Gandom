import CoverDishes from "../../../assets/Images/2.Dishes/_Cover Side Dishes.png";
import { sidedishesData } from "../../../data/sidedishesdata";
import SideDishCard from "../../../components/SideDishCard";

const SidedishesPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] md:min-h-[calc(100vh-90px)] flex items-center overflow-hidden">
        <img
          src={CoverDishes}
          alt="Side Dishes Cover"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="relative z-10 flex flex-col justify-center items-center md:items-start w-full md:w-1/2 px-4 sm:px-8 md:px-16 lg:px-24 text-center md:text-left">
          <h1
            className="text-primaryHover font-lexend text-center font-bold leading-tight tracking-tight"
            style={{
              fontSize: "clamp(36px, 5vw, 94px)",
              lineHeight: "132%",
              letterSpacing: "-0.02em",
              marginBottom: "clamp(20px, 3vh, 80px)",
            }}
          >
            Side Dishes,
          </h1>

          <h2
            className="font-santa"
            style={{
              color: "#AC7F5E",
              fontWeight: 400,
              fontStyle: "normal",
              fontSize: "clamp(36px, 5vw, 94.25px)",
              lineHeight: "132%",
              letterSpacing: "-0.02em",
              transform: "rotate(-3.62deg)",
              whiteSpace: "nowrap",
              textAlign: "center",
            }}
          >
            Pickles and snacks
          </h2>
        </div>
      </section>

      {/* Side Dish Cards */}
      <section className="bg-grayLight flex flex-col items-center px-4 sm:px-8 md:px-16 py-12 gap-6">
        <div className="w-full max-w-5xl flex flex-col md:flex-row flex-wrap gap-6">
          {sidedishesData.map((dish, idx) => (
            <SideDishCard
              key={idx}
              title={dish.title}
              price={dish.price}
              description={dish.description}
              image={dish.image}
              nutrition={dish.nutrition}
            />
          ))}
        </div>
      </section>
    </>
  );
};

export default SidedishesPage;
