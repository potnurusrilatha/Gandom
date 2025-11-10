import CateringImg from "../../assets/Images/4.Events/Caterings.png";
import SpecialPromotionImg from "../../assets/Images/4.Events/_Cover Special Promotion.png";
import EventSetupImg from "../../assets/Images/4.Events/Event.png";

const EventsSection = () => {
  const events = [
    { src: CateringImg, alt: "Catering", link: "/events" },
    { src: SpecialPromotionImg, alt: "Special Promotion", link: "/events" },
    { src: EventSetupImg, alt: "Event Setup", link: "/events" },
  ];

  return (
    <section className="text-center mt-[200px] md:mt-[400px] lg:mt-[600px] mb-6">
      {/* Heading */}
      <h2 className="font-santa font-normal text-primary text-[40px] md:text-[52px]lg:text-[64px] mb-8">
        Events & Special Promotion
      </h2>

      {/* Event Images */}
      <div className="flex flex-wrap justify-center gap-6">
        {events.map((event, index) => (
          <a
            href={event.link}
            key={index}
            className="relative block cursor-pointer transition-transform hover:scale-105"
          >
            {/* Image */}
            <img
              src={event.src}
              alt={event.alt}
              className="w-[200px] h-[200px] md:w-[240px] md:h-[240px] lg:w-[288px] lg:h-[288px] rounded-[20px] object-cover"
            />
            {/* Text */}
            <span className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-grayLight font-inter font-bold text-[18px] md:text-[20px] lg:text-[24px] whitespace-nowrap">
              {event.alt}
            </span>
          </a>
        ))}
      </div>
    </section>
  );
};

export default EventsSection;
