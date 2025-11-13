import LogoGandom from "../LogoGandom";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <header className="w-full h-[80px] sm:h-[100px] md:h-[112px] lg:h-[128px] xl:h-[144px] bg-white flex items-center px-8">
      <div className="w-full max-w-[2560px] mx-auto flex items-center justify-between">
        <LogoGandom />
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
