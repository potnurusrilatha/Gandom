import logo from "../../assets/Logo Gandom/Logo color.png";

const Header = () => {
  return (
    <header className="w-full max-w-[1440px] h-[112px] mx-auto flex items-center justify-between px-8 relative">
      {/* Logo */}
      <div className="flex items-center">
        <a href="/">
          <img
            src={logo}
            alt="LogoGandom"
            className="h-[80px] w-auto object-contain"
          />
        </a>
      </div>
    </header>
  );
};

export default Header;
