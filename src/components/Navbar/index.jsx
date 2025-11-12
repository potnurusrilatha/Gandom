import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { label: "Home", href: "/" },
    { label: "Dishes", href: "/dishes" },
    { label: "About Us", href: "/about-us" },
    { label: "Events", href: "/events" },
    { label: "Delivery", href: "/delivery" },
  ];

  return (
    <div className="flex items-center gap-8">
      {/* Desktop Navbar + Cart */}
      <div className="hidden md:flex items-center gap-8">
        <nav className="flex gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-inter text-[16px] text-black hover:font-bold hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <button className="p-2 rounded  hover:text-primary">
          <TiShoppingCart className="w-[27px] h-[24px] text-black" />
        </button>
      </div>

      {/* Mobile Hamburger + Cart */}
      <div className="md:hidden flex items-center gap-4">
        <button className="p-2 rounded hover:text-primary">
          <TiShoppingCart className="w-[27px] h-[24px] text-black" />
        </button>

        <button
          className="p-2 rounded hover:text-primary"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <RxHamburgerMenu className="w-[27px] h-[27px] text-black" />
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-[112px] left-0 w-full bg-white shadow-md flex flex-col items-center md:hidden py-4 gap-4 z-50">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="font-inter text-[18px] text-black hover:font-bold hover:text-primary"
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </div>
  );
};

export default Navbar;
