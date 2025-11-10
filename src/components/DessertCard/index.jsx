const DessertCard = ({ image, title, calories }) => {
  return (
    <div className="flex flex-col bg-white p-4 rounded-lg shadow-md w-[150px] sm:w-[180px] md:w-[200px]">
      <img 
        src={image} 
        alt={title} 
        className="mb-2 w-full h-auto object-cover rounded-lg" 
      />
      <p className="text-sm text-gray-700">{title}</p>
      <p className="text-xs text-gray-500">{calories} kcal</p>
    </div>
  );
};
export default DessertCard