import logo from "../../assets/Logo Gandom/Logo White.png";
import background from "../../assets/Images/6.Footer/Slide9.png";

import Instagram1 from "../../assets/Images/6.Footer/ShareAshe.png";
import Instagram2 from "../../assets/Images/6.Footer/Waffles.png";
import Instagram3 from "../../assets/Images/6.Footer/MenuGandom.png";
import Instagram4 from "../../assets/Images/6.Footer/Travel.png";

const instagramImages = [Instagram1, Instagram2, Instagram3, Instagram4];

const Footer = () => {
  return (
    <footer
      className="relative w-full bg-cover bg-center bg-no-repeat text-grayLight py-12 md:py-16"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20">
        <div className="flex flex-col md:flex-row items-start md:items-start justify-between gap-y-6 md:gap-x-0">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Gandom Logo"
              className="w-28 md:w-36 lg:w-40 object-contain"
            />
          </div>

          {/* Pages */}
          <div>
            <h3 className="font-inter font-bold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] whitespace-nowrap">
              Pages
            </h3>
          </div>

          {/* Utility Pages */}
          <div>
            <h3 className="font-inter font-bold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] whitespace-nowrap">
              Utility Pages
            </h3>
          </div>

          {/* Instagram */}
          <div>
            <h3 className="font-inter font-bold text-[16px] text-center sm:text-[18px] md:text-[20px] lg:text-[24px] mb-3 whitespace-nowrap">
              Follow Us On Instagram
            </h3>
            <div className="grid grid-cols-2 gap-2 sm:gap-3 md:gap-4">
              {instagramImages.map((src, index) => (
                <img
                  key={index}
                  src={src}
                  alt={`Instagram ${index + 1}`}
                  className="w-[139px] h-[139px] rounded-[10px] object-cover"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
