import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HealthySection from "./components/HealthyDishes";
import EventsSpecialpromotions from "./components/EventsSpecialpromotions";
import SoupsPage from "./pages/Dishes/SoupsPage/page.jsx";
import DessertsPage from "./pages/Dishes/DessertsPage/page.jsx";
import WaffelsPage from "./pages/Dishes/WaffelsPage/page.jsx";
import GymPage from "./pages/Dishes/GymPage/page.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-[theme(colors.grayLight)]">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-grow w-full max-w-[1440px] px-8 mx-auto">
        <Routes>
          {/* 🏠 Home page (Healthy + Events sections) */}
          <Route
            path="/"
            element={
              <>
                <HealthySection />
                <EventsSpecialpromotions />
              </>
            }
          />
          <Route path="/dishes/soupsPage" element={<SoupsPage />} />
          <Route path="/dishes/dessertsPage" element={<DessertsPage />} />
          <Route path="/dishes/waffelsPage" element={<WaffelsPage />} />
          <Route path="/dishes/gymPage" element={<GymPage />} />
        </Routes>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
