import CoverEvents from "../../assets/Images/4.Events/_Cover Special Promotion.png";
import EventsCard from "../../components/EventsCard"; 
import { eventsData as events } from "../../data/events";

const EventsPage = () => {
  return (
    <section className="w-full min-h-[calc(100vh-90px)] pb-16 sm:pb-20 md:pb-24">

      {/* Hero Section */}
      <div className="relative w-full min-h-[500px] md:min-h-[calc(100vh-90px)] flex items-center overflow-hidden">
        
        {/* Background Image */}
        <img
          src={CoverEvents}
          alt="Events Cover"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Text Overlay */}
        <div className="relative z-10 flex flex-col justify-center items-start w-full md:w-1/2 px-4 sm:px-8 md:px-16 lg:px-24 text-left">
          <h1
            className="text-primaryHover font-lexend font-bold leading-tight tracking-tight"
            style={{
              fontSize: "clamp(36px, 6vw, 88px)",
              lineHeight: "132%",
              letterSpacing: "-0.02em",
              marginBottom: "clamp(0px, 4vh, 40px)",
               left: "calc(20% + 0.5rem)",
               position: "relative",

            }}
          >
            Events and
          </h1>

          <h2
            className="font-santa"
            style={{
              color: "#E9610C",
              fontWeight: 400,
              fontSize: "clamp(48px, 8vw, 94.5px)",
              lineHeight: "132%",
              letterSpacing: "-0.02em",
              transform: "rotate(-3.62deg)",
              whiteSpace: "nowrap",
            }}
          >
            Special Promotions
          </h2>
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
