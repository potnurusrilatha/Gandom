import CoverDessert from "../../../assets/Images/2.Dishes/_Cover Dessert.png";

const DessertPage = () => {
  return (
    <section
      className="relative w-full h-screen bg-cover bg-center flex items-center px-4 sm:px-8 md:px-16 lg:px-32 xl:px-48"
      style={{ backgroundImage: `url(${CoverDessert})` }}
    >
     
      <div className="absolute inset-0 bg-black/30"></div>


      <div className="relative z-10 flex flex-col items-start">
       
        <div className="text-left">
          <h1 className="text-primaryHover text-center font-inter font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight">
            Healthy
          </h1>
          <h1 className="text-primaryHover font-inter font-bold text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl leading-tight tracking-tight">
            HomeBaked
          </h1>
        </div>

        <h2
          className="mt-2 sm:mt-4 text-primaryHover font-normal text-left sm:text-left md:text-left"
          style={{
            fontFamily: '"Santa Catalina", cursive',
            transform: "rotate(3.62deg)",
            width: "100%",
            textAlign: "center",
            fontSize: "2.5rem", 
          }}
        >
          Desserts
        </h2>
      </div>
    </section>
  );
};

export default DessertPage;
