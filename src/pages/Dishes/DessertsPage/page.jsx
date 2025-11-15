
import CoverDessert from "../../../assets/Images/2.Dishes/_Cover Dessert.png";
import DessertCard from "../../../components/DessertCard";
import desserts from "../../../data/dessertsdata.js";

const DessertsPage = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full min-h-[500px] md:min-h-[calc(100vh-90px)] flex items-center overflow-hidden">
        {/* Background Image */}
        <img
          src={CoverDessert}
          alt="Desserts hero cover"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Left Gradient Overlay */}
        <div className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-r from-[#F7F4EF] via-[#F7F4EF]/80 to-transparent pointer-events-none" />

        {/* Text */}
        <div className="absolute left-8 sm:left-16 md:left-40 top-32 sm:top-40 md:top-64">
          <h1 className="leading-tight text-left">
            <span className="block text-primaryHover text-center font-roboto font-bold text-4xl sm:text-5xl md:text-[94px] tracking-tight">
              Healthy
            </span>
            <span className="block text-primaryHover font-lexend font-bold text-4xl sm:text-5xl md:text-[94px] tracking-tight">
              HomeBaked
            </span>
          </h1>
          <h2
            className="block font-santa text-warning text-4xl text-center sm:text-5xl md:text-[94px] mt-4"
            style={{ transform: "rotate(-3.62deg)" }}
          >
            Desserts
          </h2>
        </div>
      </section>

      {/* Dessert Cards */}
      <section className="flex flex-col items-center px-4 sm:px-8 md:px-16 py-12 gap-6 mb-8">
        {desserts.map((item, idx) => (
          <DessertCard
            key={idx}
            title={item.title}
            price={item.price}
            description={item.description}
            image={item.image}
            nutrition={item.nutrition}
          />
        ))}
      </section>
    </>
  );
};

export default DessertsPage;
