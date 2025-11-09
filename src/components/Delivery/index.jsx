import { useNavigate } from 'react-router-dom';
import Pakaging from "../../assets/Images/1.Home Page/Pakaging.png"
import foodImage2 from "../../assets/Images/1.Home Page/Menu.png"; 
import foodImage3 from "../../assets/Images/1.Home Page/Foodora Logo.png";
import foodImage4 from "../../assets/Images/1.Home Page/Ashe Reshteh X2.png"; 

const DeliveryPage = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full py-20 flex flex-col items-center">
    
      <h1 className="text-[40px] md:w-[223px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-santa font-semibold text-primary mb-16 text-center">
        Delivery
      </h1>


      <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12 flex-wrap px-4">
      
        <img
          src={Pakaging}
          alt="Pakaging"
          className="cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md rounded-[20px] w-[90%] sm:w-[400px] md:w-[450px] lg:w-[506px] aspect-square object-cover"
          onClick={() => navigate('/delivery/order')}
        />

        <img
          src={foodImage2}
          alt="Create Box Menu"
          className="cursor-pointer hover:scale-105 transition-transform duration-300 shadow-md rounded-[20px] w-[90%] sm:w-[320px] md:w-[360px] lg:w-[370px] object-cover"
          style={{ aspectRatio: '370 / 508' }}
          onClick={() => navigate('/delivery/create-box-menu')}
        />
        <div className="flex flex-col gap-6 items-center">
          <img
            src={foodImage3}
            alt="Foodora Logo"
            className="rounded-[20px] shadow-md w-[180px] sm:w-[200px] md:w-[220px] lg:w-[234px] object-cover"
            style={{ aspectRatio: '234 / 243' }}
          />
          <img
            src={foodImage4}
            alt="Food Dish"
            className="rounded-[20px] shadow-md w-[180px] sm:w-[200px] md:w-[220px] lg:w-[234px] object-cover"
            style={{ aspectRatio: '234 / 243' }}
          />
        </div>
      </div>
    </section>
  );
};

export default DeliveryPage;
