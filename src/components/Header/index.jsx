import logo from "../../assets/Logo Gandom/Logo color.png";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <header className="w-full max-w-[1440px] h-[112px] mx-auto flex items-center justify-between px-8 relative">
      {/* Logo */}
      <div className="flex items-center gap-20">
        <a href="/">
          <img
            src={logo}
            alt="LogoGandom"
            className="h-[80px] w-auto object-contain"
          />
        </a>
        
        <Navbar />
      </div>
    </header>
  );
};

export default Header;
