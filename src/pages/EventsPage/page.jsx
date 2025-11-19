import CoverEvents from "../../assets/Images/4.Events/_Cover Special Promotion.png";
import EventsCard from "../../components/EventsCard"; 
import { eventsData as events } from "../../data/events";

const EventsPage = () => {
  return (
    <section className="w-full min-h-[calc(100vh-90px)] pb-16 sm:pb-20 md:pb-24">

      {/* Hero Section */}
      <div className="relative w-full md:h-[calc(100vh-90px)] flex flex-col md:flex-row items-center justify-center overflow-hidden px-4 sm:px-6">
        
        {/* Text Section */}
        <div className="relative w-full md:w-1/2 flex flex-col justify-center items-center text-center h-full">
          <h1
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 700,
              fontSize: "clamp(36px, 6vw, 88.36px)",
              lineHeight: "120%",
              letterSpacing: "-2.2%",
              color: "#DEA401",
              textAlign: "center",
            }}
            className="mb-3 sm:mb-4"
          >
            Events and
          </h1>

          <h2
            className="font-santa whitespace-normal md:whitespace-nowrap"
            style={{
              color: "#E9610C",
              fontWeight: 400,
              fontSize: "clamp(48px, 8vw, 94.5px)",
              lineHeight: "132%",
              letterSpacing: "-0.02em",
              transform: "rotate(-3.62deg)",
              marginTop: "0.5rem",
              marginLeft: "clamp(0px, 5vw, 80px)",
            }}
          >
            Special Promotions
          </h2>
        </div>

        {/* Image Section */}
        <div className="relative w-full md:w-1/2 flex items-center justify-center mt-6 md:mt-0">
          <img
            src={CoverEvents}
            alt="Events Cover"
            className="w-full max-w-[700px] object-contain"
          />
        </div>
      </div>

      {/* Events Cards Section */}
      <div className="flex flex-col gap-12 px-4 sm:px-6 lg:px-24 py-16 max-w-7xl mx-auto">
        {events.map((event, idx) => (
          <EventsCard
            key={idx}
            title={event.title}
            image={event.image}
            description={event.description}
            isSpecial={idx === 0 || idx === 1} 
          />
        ))}
      </div>
    </section>
  );
};

export default EventsPage;
