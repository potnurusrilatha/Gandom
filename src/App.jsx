import Header from "./components/Header";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import HealthySection from "./components/HealthyDishes";
import SoupsPage from "./pages/Dishes/SoupsPage/page.jsx";
import DessertsPage from "./pages/Dishes/DessertsPage/page.jsx"
import WafflesPage from "./pages/Dishes/WafflesPage/page.jsx";
import SidedishesPage from "./pages/Dishes/SidedishesPage/page.jsx";
import Delivery from "./components/Delivery";
import DeliveryOrderPage from "./pages/Delivery/DeliveryOrderPage/page.jsx";
import CreateBoxMenuPage from "./pages/Delivery/CreateBoxMenu/page.jsx";
import Card from "./components/Card"
import AboutUsPage from "./pages/AboutUs/about-us.jsx";
import YourCart from "./pages/YourCart/your-cart.jsx";
import HomeEvents from "./components/HomeEvents";
import EventsPage from "./pages/EventsPage/page.jsx";
import { Routes, Route } from "react-router-dom";
import GymHealthy from "./components/Gym/GymHealthy";


function App() {
  const testimonials = [
    {
      text: "Maten är fantastisk och det kommer att bli min nya favoriträtt",
      author: "Gandoms customer",
    },
    {
      text: "The food arrived hot. Yogurt dishes are often good, and I thought it was pretty good with noodles. Also, being vegetarian is really important to me. Thanks.",
      author: "Gandoms customer",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen w-full bg-beigebg">
      <Header />
      {/* Hero section */}
      <Hero />

      {/* Main content */}
      <main className="flex-grow w-full max-w-[1440px] px-8 mx-auto">
      <main className="flex-grow w-full max-w-[1440px] mx-auto">
        <Routes>

          {/* Home page */}

          <Route
            path="/"
            element={
              <>
                <HealthySection />
                <AboutUs />
             
                <HomeEvents />
                <GymHealthy />

                <Delivery />
              </>
            }
          />


          {/* Dishes pages */}
          <Route path="/dishes/soups" element={<SoupsPage />} />
          <Route path="/dishes/desserts" element={<DessertsPage />} />
          <Route path="/dishes/waffles" element={<WafflesPage />} />
          <Route path="/dishes/sidedishes" element={<SidedishesPage />} />
          
          {/* Delivery pages */}
          <Route path="/delivery/order" element={<DeliveryOrderPage />} />
          <Route path="/delivery/createboxmenu" element={<CreateBoxMenuPage />} />

          {/* Other pages */}
          <Route path="/about-us" element={<AboutUsPage />} />
          <Route path="/your-cart" element={<YourCart />} />
          <Route path="/events" element={<EventsPage />} />
        </Routes>

      </main>

      {/* Testimonials */}
      <section className="bg-grayLight py-16 flex justify-center gap-8 flex-wrap">
        {testimonials.map((t, i) => (
          <Card key={i} text={t.text} author={t.author} />
        ))}
      </section>

      {/* Footer */}
      <Footer />
    </div >
  );
}

export default App;
