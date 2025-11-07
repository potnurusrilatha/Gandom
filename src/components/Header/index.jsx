import logo from "../../assets/Logo Gandom/Logo color.png"; 
import { TiShoppingCart } from "react-icons/ti";

const Header = () => {
  return (
    <header className="w-[1440px] h-[112px] mx-auto flex items-center justify-between px-8">
      {/* Logo */}
      <div className="flex items-center">
        <a href="/">
          <img
            src={logo}
            alt="MyStore Logo"
            className="h-[80px] w-auto object-contain"
          />
        </a>
      </div>

      {/* Navbar + Cart */}
      <div className="flex items-center space-x-6">
        {/* Navbar */}
       <nav className="hidden md:flex">
  <a
    href="#"
    className="text-gray-700 hover:text-gray-900 text-lg font-medium px-4 py-2 w-[47px] h-[21px] top-[45.5px] left-[740px]"
  >
    Home
  </a>
  <a
    href="#"
    className="text-gray-700 hover:text-gray-900 text-lg font-900 px-4 py-2 w-[51px] h-[21px] top-[45.5px] left-[840px]"
  >
    Dishes
  </a>
  <a
    href="#"
    className="text-gray-700 hover:text-gray-900 text-lg font-medium px-4 py-2 w-[140px] h-[40px]"
  >
    About Us
  </a>
  <a
    href="#"
    className="text-gray-700 hover:text-gray-900 text-lg font-medium px-4 py-2 w-[71px] h-[21px] top-[45.5px] left-[945px]"
  >
    Events
  </a>
  <a
    href="#"
    className="text-gray-700 hover:text-gray-900 text-lg font-medium px-4 py-2 w-[51px] h-[21px] top-[45.5px] left-[1045px]"
  >
    Gym
  </a>
  <a
    href="#"
    className="text-gray-700 hover:text-gray-900 text-lg font-medium px-4 py-2 w-[51px] h-[21px] top-[45.5px] left-[1045px]"
  >
    Delivery
  </a>
</nav>


        {/* Cart Icon */}
        <button className="relative p-2 rounded hover:bg-gray-100 transition">
          <TiShoppingCart className="w-7 h-7 text-gray-700" />
        
        </button>
      </div>
    </header>
  );
};

export default Header;
