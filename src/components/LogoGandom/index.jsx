
import logo from "../../assets/Logo Gandom/Logo color.png"

const LogoGandom = () => {
  return (
    <div className="flex items-center">
      <a href="/">
        <img
          src={logo}
          alt="LogoGandom"
          className="h-[80px] w-auto object-contain"
        />
      </a>
    </div>
  );
};

export default LogoGandom;
