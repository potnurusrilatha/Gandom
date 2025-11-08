
import logo from "../../assets/LogoGandom/Logocolor.png"

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
