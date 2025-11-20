import SidedishesTable from "../SideDishesTable";

const SideDishCard = ({ title, price, description, image, nutrition }) => {
  const isTextOnly = typeof nutrition === "string";

  const renderParagraphs = (text) => {
    const parts = text.split("\n\n");

    return parts.map((block, idx) => {
      if (block.startsWith("Please note:")) {
        const notesText = block.replace("Please note:", "").trim();
        const noteLines = notesText.split("\n").filter((line) => line.trim().length > 0);

        return (
          <div key={idx} className="mt-6">
            <p className="text-darkGray font-inter font-semibold text-[18px] leading-[150%] tracking-[-1.1px] mb-2">
              Please note:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              {noteLines.map((line, i) => (
                <li
                  key={i}
                  className="text-darkGray font-inter font-semibold text-[16px] leading-[150%] tracking-[-0.5px]"
                >
                  {line}
                </li>
              ))}
            </ul>
          </div>
        );
      }

      return (
        <p
          key={idx}
          className="text-darkGray font-inter font-semibold text-[18px] leading-[150%] tracking-[-1.1px] mb-4"
        >
          {block}
        </p>
      );
    });
  };

  return (
    <div className="w-full bg-white rounded-2xl p-6 md:p-10 lg:p-12 flex flex-col md:flex-row gap-8 md:gap-10 shadow-md">

      <div className="flex flex-col flex-shrink-0 w-full md:w-[340px] lg:w-[370px]">

        <div className="rounded-xl overflow-hidden">
          <img
            src={image}
            alt={`${title} - ${description}`}
            className="w-full h-[240px] md:h-[260px] lg:h-[276px] object-cover rounded-xl"
          />
        </div>

        <div className="flex justify-between items-center mt-3">
          <h3 className="text-black font-semibold text-lg">{title}</h3>
          <button className="w-10 h-10 border border-black rounded-full flex items-center justify-center text-xl font-semibold">
            +
          </button>
        </div>

        <p className="text-green font-semibold text-lg">{price}</p>

        {/* Description */}
        <p className="text-darkGray font-inter font-semibold text-[18px] leading-[150%] tracking-[-1.1px] mt-3">
          {description}
        </p>
      </div>

      <div className="flex-1 w-full mt-4 md:mt-0">
        {isTextOnly ? (
          <div>{renderParagraphs(nutrition)}</div>
        ) : (
          <SidedishesTable nutrition={nutrition} />
        )}
      </div>
    </div>
  );
};

export default SideDishCard;
