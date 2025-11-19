import EventTable from "../EventTable";

const EventsCard = ({ title, image, description }) => {
  return (
    <div className="w-full bg-white rounded-2xl p-4 flex flex-col md:flex-row gap-6 shadow-md">
      
      {/* Image Section */}
      <div className="flex flex-col md:w-[370px] items-center">
        <img
          src={image}
          alt={title}
          className="w-[370px] h-[276px] object-cover rounded-xl"
        />

        {/* Dots */}
        <div className="flex justify-center gap-2 mt-3">
          <div className="w-[13px] h-[13px] rounded-full bg-gray-300" />
          <div className="w-[13px] h-[13px] rounded-full bg-gray-300" />
        </div>

        {/* Title under dots */}
       
  <h3 className="text-black font-semibold text-lg mt-3 mb-14 text-left w-full pl-2">
    {title}
  </h3>
      </div>

      {/* Text Section */}
      <div className="flex-1">
        <EventTable description={description} />
      </div>
    </div>
  );
};

export default EventsCard;
