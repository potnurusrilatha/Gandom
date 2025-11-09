import LogoGandom from "../LogoGandom";
import Navbar from "../Navbar";

const Header = () => {
  return (
    <header className="w-full max-w-[1440px] h-[112px] mx-auto flex items-center justify-between px-8 relative">
      <LogoGandom />
      <Navbar />
    </header>
  );
};

export default Header;
