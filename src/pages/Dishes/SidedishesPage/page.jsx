<<<<<<< HEAD
import CoverDishes from "../../../assets/Images/2.Dishes/_Cover Side Dishes.png";

const SidedishesPage = () => {
  return (
     <>
      <section
        className="relative w-full min-h-[calc(100vh-90px)] flex flex-col md:flex-row items-center justify-center overflow-hidden -mt-[112px] pb-16 sm:pb-20 md:pb-24" // 👈 Added padding-bottom
      >
       
        <div className="relative flex flex-col justify-center items-center w-full md:w-1/2 px-4 sm:px-8 md:px-16 lg:px-24 h-full text-center">
          {/* Side Dishes */}
          <h1
            className="text-primaryHover font-lexend font-bold leading-tight tracking-tight"
            style={{
              fontSize: "clamp(36px, 5vw, 80px)", 
              lineHeight: "132%",
              letterSpacing: "-0.02em",
              whiteSpace: "nowrap",
              marginBottom: "clamp(20px, 4vh, 40px)", 
            }}
          >
            Side Dishes,
          </h1>

           {/* Pickles and Snacks */}
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
       {/* Right Section — Image */}
        <div className="relative flex items-center justify-center w-full md:w-1/2 h-auto">
          <img
            src={CoverDishes}
            alt="Side Dishes Cover"
            className="object-contain w-[80%] sm:w-[70%] md:w-[90%] lg:w-[1003px] h-auto max-h-[473px]"
          />
        </div>
      </section>

      <div className="w-full h-[80px] sm:h-[100px] md:h-[140px]"></div>
    </>
  );
};
export default SidedishesPage
=======
const SideDishesPage = () => {
    return (
        <div className="py-8">
            <h1 className="text-4xl font-bold mb-4">SideDishesPage</h1>
        </div>
    );
}
export default SideDishesPage;
>>>>>>> T5/feature/Healthy-Dishes-Grid
