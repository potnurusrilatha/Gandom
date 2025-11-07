import logo from "../../assets/Logo Gandom/Logo color.png";

const Logo = () => {
  return (
    <a href="/">
      <img
        src={logo}
        alt="LogoGandom"
        className="h-[80px] w-auto object-contain"
      />
    </a>
  );
};

export default Logo;
