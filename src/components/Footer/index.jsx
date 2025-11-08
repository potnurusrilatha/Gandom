const Footer = () => {
  const logo = new URL("../../assets/Logo Gandom/Logo White.png", import.meta.url).href;
  const background = new URL("../../assets/Images/6.Footer/Slide9.png", import.meta.url).href;

  const instagramImages = [
    "../../assets/Images/6.Footer/ShareAshe.png",
    "../../assets/Images/6.Footer/Waffles.png",
    "../../assets/Images/6.Footer/MenuGandom.png",
    "../../assets/Images/6.Footer/Travel.png",
  ].map((path) => new URL(path, import.meta.url).href);

  return (
    <footer
      className="relative w-full bg-cover bg-center bg-no-repeat text-grayLight py-12 md:py-16"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="max-w-[1440px] mx-auto px-4 md:px-8 lg:px-20">
        <div className="flex flex-col md:flex-row md:flex-nowrap items-start md:items-start gap-y-6 md:gap-x-12 lg:gap-x-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img
              src={logo}
              alt="Gandom Logo"
              className="w-28 md:w-36 lg:w-40 object-contain"
            />
          </div>

          {/* Pages */}
          <div className="flex-shrink min-w-[80px]">
            <h3 className="font-inter font-bold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-grayLight whitespace-nowrap">
              Pages
            </h3>
          </div>

          {/* Utility Pages */}
          <div className="flex-shrink min-w-[100px]">
            <h3 className="font-inter font-bold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-grayLight whitespace-nowrap">
              Utility Pages
            </h3>
          </div>

          {/* Instagram */}
          <div className="flex-shrink min-w-[220px]">
            <h3 className="font-inter font-bold text-[16px] sm:text-[18px] md:text-[20px] lg:text-[24px] text-grayLight mb-3 whitespace-nowrap">
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
