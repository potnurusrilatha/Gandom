// src/components/SoupsCard/index.jsx
const SoupsCard = ({ title, calories, description, image }) => {
  return (
    <div className="bg-white rounded-xl p-4 shadow-md max-w-[400px]">
      {/* Image */}
      <div className="overflow-hidden rounded-lg">
        <img
          src={image}
          alt={title}
          className="w-full h-auto object-cover"
        />
      </div>

     
      <div className="mt-4 flex justify-between items-center">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="w-10 h-10 border border-black rounded-full flex items-center justify-center text-xl font-thin">
          +
        </div>
      </div>

      
      <p className="mt-1 font-semibold text-green-700">{calories}</p>
      <p className="mt-2 text-gray-500">{description}</p>
    </div>
  );
};

export default SoupsCard;
