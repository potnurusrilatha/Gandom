import EventTable from "../EventTable";

const EventsCard = ({ title, price, description, image, nutrition }) => {
  return (
    <div className="w-full bg-white rounded-2xl p-4 flex flex-col md:flex-row gap-6 shadow-md">
      {/* Left: Image */}
      <div className="flex flex-col flex-shrink-0 md:w-[370px]">
        <div className="rounded-xl overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-[370px] h-[276px] object-cover rounded-xl"
          />
        </div>

        {/* Image indicator dots */}
        <div className="flex justify-center gap-2 mt-2">
          <div className="w-[13px] h-[13px] rounded-full bg-gray-300" />
          <div className="w-[13px] h-[13px] rounded-full bg-gray-300" />
        </div>

        <div className="flex justify-between items-center mt-2">
          <h3 className="text-black font-semibold text-lg">{title}</h3>
        </div>
      </div>

      {/* Right: Nutrition Table with title, price, description */}
      <div className="flex-1 min-w-[250px]">
        <EventTable
          title={title}
          price={price}
          description={description}
          nutrition={nutrition}
        />
      </div>
    </div>
  );
};

export default EventsCard;
