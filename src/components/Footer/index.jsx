
import logo from "../../assets/Logo Gandom/Logo White.png";

const Footer = () => {
  return (
    <footer className="bg-[#d9a400] text-grayLight  py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10 px-6">
        {/* Logo Section */}
        <div className="flex flex-col items-start">
          <img
            src={logo}
            alt="Gandom Logo"
            className="w-36 mb-3 object-contain"
          />
        </div>

        {/* Pages */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Pages</h3>
        </div>

        {/* Utility Pages */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Utility Pages</h3>
        </div>

        {/* Instagram Section */}
        <div>
          <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
             Follow Us On Instagram
          </h3>
          <div className="grid grid-cols-2 gap-2">
            <img
              src="/Images/1.Home Page/Menu.png"
              alt="Instagram 1"
              className="rounded-lg w-full h-24 object-cover"
            />
            <img
              src="/Images/5.Delivery/Menu Gandom.png"
              alt="Instagram 2"
              className="rounded-lg w-full h-24 object-cover"
            />
            <img
              src="/images/insta3.jpg"
              alt="Instagram 3"
              className="rounded-lg w-full h-24 object-cover"
            />
            <img
              src="/images/insta4.jpg"
              alt="Instagram 4"
              className="rounded-lg w-full h-24 object-cover"
            />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
