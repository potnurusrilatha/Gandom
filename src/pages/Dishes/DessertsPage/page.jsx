import CoverDessert from "../../../assets/Images/2.Dishes/_Cover Dessert.png";

const DessertPage = () => {
  return (
    <section
      className="relative w-full min-h-[calc(100vh-112px)] flex flex-col md:flex-row items-center justify-center overflow-hidden -mt-[112px]"
    >
    
      <div className="flex flex-col justify-center items-start w-full md:w-1/2 px-8 sm:px-12 md:px-16 lg:px-24 h-full">
        <div className="w-full">
        
        <h1 className="text-primaryHover font-inter font-bold leading-tight tracking-tight"
            style={{
                fontSize: "94px",      
                lineHeight: "132%",    
                letterSpacing: "-2%", 
            }}
        >
            <span className="block text-center md:text-center">Healthy</span>
            <span className="block text-center md:text-center">HomeBaked</span>
        </h1>
        <h2 className="text-[#DEA401] font-normal mt-4 text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-center md:text-center"
            style={{
                fontsize: "94px",
              fontFamily: '"Santa Catalina", cursive',
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
          width={1003}
          height={473}
          className="object-contain w-auto h-auto max-w-[1003px] max-h-[473px]"
        />
      </div>
    </section>
  );
};

export default DessertPage;
