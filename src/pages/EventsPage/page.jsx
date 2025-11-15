import React from "react";
import CoverEvents from "../../assets/Images/1.Home Page/Catering.png";
import EventsCard from "../../components/EventsCard"; 

import { events } from "../../data/events"; 

const EventsPage = () => {
  return (
    <section className="w-full min-h-[calc(100vh-90px)] -mt-[90px] pb-16 sm:pb-20 md:pb-24">

      {/* Top banner section */}
      <div className="relative w-full md:h-[calc(100vh-90px)] flex flex-col md:flex-row items-center justify-center overflow-hidden">
        <div className="relative w-full md:w-1/2 flex flex-col justify-center items-center text-center px-4 sm:px-8 md:px-16 lg:px-24 h-full">
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
              marginTop: "0.5rem",
              marginLeft: "clamp(0px, 5vw, 80px)",
            }}
          >
            Special Promotions
          </h2>
        </div>

        <div className="relative w-full md:w-1/2 flex items-center justify-center">
          <img
            src={CoverEvents}
            alt="Events Cover"
            className="w-full max-w-[700px] object-contain"
          />
        </div>
      </div>

      {/* Events cards section */}
      <div className="flex flex-col gap-12 px-6 lg:px-24 py-16">
      {events.map((event, idx) => (
        <EventsCard
          key={idx}
          image={event.image}
          description={event.description}
        />
      ))}
    </div>
    </section>
  );
};

export default EventsPage;
