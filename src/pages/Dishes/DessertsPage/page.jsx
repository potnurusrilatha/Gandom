import CoverDessert from "../../../assets/Images/2.Dishes/_Cover Dessert.png";

const DessertsPage = () => {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${CoverDessert})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-30"></div>

      <div className="absolute top-1/4 left-4 sm:left-6 md:left-16 lg:left-32 xl:left-40 text-left">
       
        <h1
          className="text-primaryHover font-inter font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl"
          style={{
            lineHeight: "1.1",
            letterSpacing: "-2%",
          }}
        >
          <span className="block text-center w-full">Healthy</span>
          <span className="block text-left">HomeBaked</span>
        </h1>

        <h2
          className="text-[#DEA401] font-normal mt-2 sm:mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center"
          style={{
            fontFamily: '"Santa Catalina", cursive',
            lineHeight: "1.32",
            letterSpacing: "-2%",
            transform: "rotate(3.62deg)",
          }}
        >
          Desserts
        </h2>
      </div>
    </section>
  );
};

export default DessertsPage;
