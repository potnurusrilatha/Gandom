import Header from "./components/Header";
import Footer from "./components/Footer";
import HealthySection from "./components/HealthyDishes";
import EventsSpecialpromotions from "./components/EventsSpecialpromotions";
import SoupsPage from "./pages/Dishes/SoupsPage/page.jsx";
import DessertsPage from "./pages/Dishes/DessertsPage/page.jsx";
import WaffelsPage from "./pages/Dishes/WaffelsPage/page.jsx";
import SidedishesPage from "./pages/Dishes/SidedishesPage/page.jsx";

function App() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-gray-100">
      {/* Header */}
      <Header />

      {/* Main content */}
      <main className="flex-grow w-full max-w-[1440px] px-8 mx-auto">
        <Routes>
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
          <Route path="/dishes/soupsPage" element={<SoupsPage />} />
          <Route path="/dishes/dessertsPage" element={<DessertsPage />} />
          <Route path="/dishes/waffelsPage" element={<WaffelsPage />} />
          <Route path="/dishes/sidedishesPage" element={<SidedishesPage />} />
        </Routes>

      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;
