const SidedishesTable = ({ nutrition = [] }) => {
  return (
    <div className="w-full mt-4 border border-black overflow-hidden">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="p-2 text-left font-semibold border-b border-black">Nutrient</th>
            <th className="p-2 text-left font-semibold border-b border-black">Amount</th>
            <th className="p-2 text-left font-semibold border-b border-black">Notes</th>
          </tr>
        </thead>
        <tbody>
          {nutrition.map((item, idx) => {
            const isMicro = item.nutrient.toLowerCase().includes("micronutrients");
            return (
              <tr key={idx}>
                <td className="p-2 border-b border-black">{item.nutrient}</td>
                <td
                  className="p-2 border-b border-black"
                  style={{ fontSize: isMicro ? "12px" : "16px" }}
                >
                  {item.amount}
                </td>
                <td
                  className={`p-2 border-b border-black break-words`}
                  style={{ whiteSpace: "normal", fontSize: isMicro ? "12px" : "16px" }}
                >
                  {item.notes}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default SidedishesTable;
