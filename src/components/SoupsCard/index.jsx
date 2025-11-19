import NutritionTable from "../NutrionsTable";

const SoupsCard = ({ title, price, description, image, nutrition }) => {
  return (
    <div className="w-full bg-white rounded-2xl p-4 flex flex-col md:flex-row gap-6 shadow-md">
      <div className="flex flex-col flex-shrink-0 md:w-[370px]">
        <div className="rounded-xl overflow-hidden">
          <img
            src={image}
            alt={`${title} - ${description}`}
            className="w-[370px] h-[276px] object-cover rounded-xl"
          />
        </div>

        <div className="flex justify-center gap-2 mt-2">
          <div className="w-[13px] h-[13px] rounded-full bg-gray-300" />
          <div className="w-[13px] h-[13px] rounded-full bg-gray-300" />
          <div className="w-[13px] h-[13px] rounded-full bg-gray-300" />
        </div>

        <div className="flex justify-between items-center">
          <h3 className="text-black font-semibold text-lg">{title}</h3>
          <button className="w-10 h-10 border border-black rounded-full flex items-center justify-center text-xl font-light">
            +
          </button>
        </div>

        <p className="text-[#426B1F] font-semibold text-lg">{price}</p>
        <p className="text-gray-500 font-normal text-sm mt-6">{description}</p>
      </div>
      <div className="flex-1 min-w-[250px]">
        <NutritionTable nutrition={nutrition} />
      </div>
    </div>
  );
};

export default SoupsCard;
