import { useState } from "react";
import { TiShoppingCart } from "react-icons/ti";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(""); 

  const links = [
    { label: "Home", href: "/" },
    { label: "Dishes", href: "/dishes" },
    { label: "About Us", href: "/about-us" },
    { label: "Events", href: "/events" },
    { label: "Delivery", href: "/delivery/order" },
  ];

  return (
    <div className="flex items-center justify-end gap-6 relative">
      {/* Desktop Navbar*/}
      <div className="hidden lg:flex items-center gap-8">
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className={`font-inter text-[16px] transition-all ${
              activeLink === link.label
                ? "text-primary font-bold"
                : "text-black hover:text-primary hover:font-bold"
            }`}
            onClick={() => setActiveLink(link.label)}
          >
            {link.label}
          </a>
        ))}
        <button className="p-2 rounded hover:text-primary transition-all">
          <TiShoppingCart className="w-[27px] h-[24px]" />
        </button>
      </div>

      {/* Tablet & Mobile Hamburger + Cart */}
      <div className="flex lg:hidden items-center gap-4">
        <button className="p-2 rounded hover:text-primary">
          <TiShoppingCart className="w-[27px] h-[24px]" />
        </button>

        <button
          className="p-2 rounded hover:text-primary"
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
        >
          <RxHamburgerMenu className="w-[27px] h-[27px]" />
        </button>
      </div>

      {/* Mobile & Tablet Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full right-0 w-56 bg-white shadow-md flex flex-col items-center py-4 gap-4 lg:hidden z-50">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => {
                setActiveLink(link.label);
                setMobileMenuOpen(false);
              }}
              className={`font-inter text-[18px] w-full text-center py-2 rounded
                ${
                  activeLink === link.label
                    ? "text-primary font-bold bg-red-100" 
                    : "text-black hover:text-primary hover:font-bold hover:bg-gray-900"
                }`}
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
