import { items } from "../../data/data"
import { useNavigate } from "react-router-dom";

const HealthySection = () => {
  const navigate = useNavigate();


  return (
    <section className="text-center mt-0 md:mt-4">


      {/* Heading */}
      <h2 className="font-santa font-normal text-primary text-[40px] md:text-[52px] lg:text-[64px] mb-12">
        Healthy Lifestyle
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {items.map((item, index) => (
          <div
            key={index}
            onClick={() => navigate(item.path)}
            className="relative cursor-pointer transition-transform hover:scale-105"
          >

            <img
              src={item.img}
              alt={item.name}
              className="w-[220px] h-[220px] md:w-[260px] md:h-[260px] lg:w-[288px] lg:h-[288px] object-cover rounded-[20px]"
            />
            <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-white font-inter font-bold text-[18px] md:text-[20px] lg:text-[24px] whitespace-nowrap drop-shadow-lg">
              {item.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HealthySection;
