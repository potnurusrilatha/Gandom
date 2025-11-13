import Header from "./components/Header";
import Footer from "./components/Footer";
import HealthySection from "./components/HealthyDishes";
import EventsSpecialpromotions from "./components/EventsSpecialpromotions";
import SoupsPage from "./pages/Dishes/SoupsPage/page.jsx";
import DessertsPage from "./pages/Dishes/DessertsPage/page.jsx";
<<<<<<< HEAD
import WafflesPage from "./pages/Dishes/WaffelsPage/page.jsx";
import GymPage from "./pages/Dishes/SidedishesPage/page.jsx";
import Delivery from "./components/Delivery";
import DeliveryOrderPage from "./pages/Delivery/DeliveryOrderPage/page.jsx";
import CreateBoxMenuPage from "./pages/Delivery/CreateBoxMenu/page.jsx";
import AboutUsPage from "./pages/AboutUs/about-us"


import { Routes, Route } from "react-router-dom";
=======
import WaffelsPage from "./pages/Dishes/WaffelsPage/page.jsx";
import SidedishesPage from "./pages/Dishes/SidedishesPage/page.jsx";
>>>>>>> T5/feature/Healthy-Dishes-Grid

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-grayLight">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-grow w-full max-w-[1440px] px-8 mx-auto">
        <Routes>
<<<<<<< HEAD
          {/* Home page */}
=======
>>>>>>> T5/feature/Healthy-Dishes-Grid
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
<<<<<<< HEAD

          {/* Dishes pages */}
          <Route path="/dishes/soups" element={<SoupsPage />} />
          <Route path="/dishes/desserts" element={<DessertsPage />} />
          <Route path="/dishes/waffles" element={<WafflesPage />} />
          <Route path="/dishes/gym" element={<GymPage />} />

          {/* Delivery pages */}
          <Route path="/delivery/order" element={<DeliveryOrderPage />} />
          <Route path="/delivery/create-box-menu" element={<CreateBoxMenuPage />} />
          <Route path="/about-us" element={<AboutUsPage />} />


=======
          <Route path="/dishes/soupsPage" element={<SoupsPage />} />
          <Route path="/dishes/dessertsPage" element={<DessertsPage />} />
          <Route path="/dishes/waffelsPage" element={<WaffelsPage />} />
          <Route path="/dishes/sidedishesPage" element={<SidedishesPage />} />
>>>>>>> T5/feature/Healthy-Dishes-Grid
        </Routes>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
