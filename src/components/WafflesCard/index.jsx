import NutritionTable from "../NutritionTable";

const WafflesCard = ({ title, price, description, image, nutrition }) => {
  return (
    <div className="w-full max-w-[1200px] bg-white rounded-2xl p-6 flex flex-col md:flex-row gap-6 shadow-md ">

      {/* Left side: image and info */}
      <div className="flex flex-col w-full md:w-[370px]">
        <div className="rounded-xl overflow-hidden">
          <img
            src={image}
            alt={`${title} - ${description}`}
            className="w-full h-[276px] object-cover rounded-xl"
          />
        </div>

        <div className="flex justify-center gap-2 mt-2">
          <div className="w-[13px] h-[13px] rounded-full bg-gray-300" />
          <div className="w-[13px] h-[13px] rounded-full bg-gray-300" />
          <div className="w-[13px] h-[13px] rounded-full bg-gray-300" />
        </div>

        <div className="flex justify-between items-center mt-2">
          <h3 className="text-black font-semibold text-lg">{title}</h3>
          <button className="w-10 h-10 border border-black rounded-full flex items-center justify-center text-xl font-light">
            +
          </button>
        </div>

        <p className="text-[#426B1F] font-semibold text-lg mt-1">{price}</p>
        <p className="text-gray-500 font-normal text-sm mt-2">{description}</p>
      </div>

      {/* Right side: Nutrition Table */}
      <div className="flex-1 w-full">
        <NutritionTable nutrition={nutrition} />
      </div>
    </div>
  );
};

export default WafflesCard;
