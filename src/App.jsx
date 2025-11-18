import Header from "./components/Header";
import Footer from "./components/Footer";
import HealthySection from "./components/HealthyDishes";
import EventsSpecialpromotions from "./components/EventsSpecialpromotions";
import SoupsPage from "./pages/Dishes/SoupsPage/page.jsx";
import DessertsPage from "./pages/Dishes/DessertsPage/page.jsx"
import WafflesPage from "./pages/Dishes/WafflesPage/page.jsx";
import SidedishesPage from "./pages/Dishes/SidedishesPage/page.jsx";
import Delivery from "./components/Delivery";
import DeliveryOrderPage from "./pages/Delivery/DeliveryOrderPage/page.jsx";
import CreateBoxMenuPage from "./pages/Delivery/CreateBoxMenu/page.jsx";
import AboutUsPage from "./pages/AboutUs/about-us.jsx";
import YourCart from "./pages/YourCart/YourCart";

import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-grayLight">
      <Header />

      <main className="flex-grow w-full max-w-[1440px] px-8 mx-auto">
        <Routes>
          {/* Home page */}
          <Route
            path="/"
            element={
              <>
                <HealthySection />
                <EventsSpecialpromotions />
                <Delivery />
              </>
            }
          />

          {/* Dishes pages */}
          <Route path="/dishes/soups" element={<SoupsPage />} />
          <Route path="/dishes/desserts" element={<DessertsPage />} />
          <Route path="/dishes/waffles" element={<WafflesPage />} />
          <Route path="/dishes/sidedishes" element={<SidedishesPage />} /> {/* fixed */}


          {/* Delivery pages */}
          <Route path="/delivery/order" element={<DeliveryOrderPage />} />
          <Route path="/delivery/create-box-menu" element={<CreateBoxMenuPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/your-cart" element={<YourCart />} />

        </Routes>
      </main>

      <Footer />
    </div>
  );
}

export default App;
