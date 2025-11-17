import { useNavigate } from 'react-router-dom';
import Gandom from "../../assets/Images/1.Home Page/Gandom.png"
import FoodoraLogo from "../../assets/Images/1.Home Page/Foodora Logo.png"; 
import Klarna from "../../assets/Images/1.Home Page/Klarna.png";

const Delivery = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full py-20 flex flex-col items-center px-4">

      {/* Heading */}
      <h1
        className="
          font-santa font-normal
          text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px]
          leading-[150%] tracking-[-0.023em]
          text-primary mb-4 text-center whitespace-nowrap align-middle
        "
      >
        Order it Here
      </h1>

      {/* Paragraph */}
      <div className="
        w-full 
        max-w-[815px] 
        h-auto 
        min-h-[80px] md:min-h-[100px] lg:h-[120px]
        flex items-center justify-center 
        mb-12 px-2
      ">
        <p
          className="
            font-inter font-semibold
            text-[20px] sm:text-[28px] md:text-[34px] lg:text-[40px]
            leading-[150%] tracking-[-0.022em]
            text-primary text-center
          "
        >
          You can place your order through one of the channels below.
        </p>
      </div>

      {/* Images */}
      <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-8 sm:gap-10 lg:gap-12">

        <img
          src={Gandom}
          alt="Gandom"
          className="
            cursor-pointer hover:scale-105 transition-transform duration-300
            rounded-[20px]
            w-[200px] h-[200px]
            sm:w-[220px] sm:h-[220px]
            md:w-[230px] md:h-[230px]
            lg:w-[243px] lg:h-[243px]
            object-cover
          "
          onClick={() => navigate('/delivery/order')}
        />

        <img
          src={FoodoraLogo}
          alt="Foodora Logo"
          className="
            cursor-pointer hover:scale-105 transition-transform duration-300
            rounded-[20px]
            w-[200px] h-[200px]
            sm:w-[220px] sm:h-[220px]
            md:w-[230px] md:h-[230px]
            lg:w-[243px] lg:h-[243px]
            object-cover shadow-md
          "
          onClick={() => navigate('/delivery/createboxmenu')}
        />

        <img
          src={Klarna}
          alt="Klarna Logo"
          className="
            rounded-[20px]
            w-[200px] h-[200px]
            sm:w-[220px] sm:h-[220px]
            md:w-[230px] md:h-[230px]
            lg:w-[243px] lg:h-[243px]
            object-cover shadow-md
          "
        />

      </div>

    </section>
  );
};

export default Delivery;
