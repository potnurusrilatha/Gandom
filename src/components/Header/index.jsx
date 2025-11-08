import LogoGandom from "../../assets/Logo Gandom/Logo color.png"
//import Navbar from "../Navbar/index.jsx"

const Header = () => {
  return (
    <header className="w-full max-w-[1440px] h-[112px] mx-auto flex items-center justify-between px-8 relative">
      <img src={LogoGandom} alt="Gandom Logo" className="h-16" />
      {/* <Navbar /> */}
    </header>
  );
};

export default Header;
