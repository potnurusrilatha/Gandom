const NutritionTable = ({ nutrition }) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "780px",
        marginTop: "16px",
        border: "1px solid #000",
        borderRadius: "8px",
        overflowX: "hidden",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
          tableLayout: "auto", // allow columns to resize
        }}
      >
        <thead>
          <tr>
            <th style={{ padding: "8px 12px", textAlign: "left", borderBottom: "1px solid #000", width: "155px", minWidth: "60px" }}>
              Nutrient
            </th>
            <th style={{ padding: "8px 12px", textAlign: "left", borderBottom: "1px solid #000", width: "195px", whiteSpace: "nowrap", minWidth: "80px" }}>
              Amount
            </th>
            <th style={{ padding: "8px 12px", textAlign: "left", borderBottom: "1px solid #000", width: "365px", whiteSpace: "normal", wordBreak: "break-word", minWidth: "380px" }}>
              Notes
            </th>
          </tr>
        </thead>
        <tbody>
          {nutrition.map((item, idx) => {
            const isMicro = item.nutrient.toLowerCase().includes("micronutrients");
            return (
              <tr key={idx}>
                <td data-label="Nutrient" style={{ padding: "8px 12px", fontFamily: "Inter, sans-serif", fontWeight: 400, fontSize: "16px", lineHeight: "130%", color: "#000", borderBottom: "1px solid #000" }}>
                  {item.nutrient}
                </td>
                <td data-label="Amount" style={{ padding: "8px 12px", borderBottom: "1px solid #000", whiteSpace: "nowrap" }}>
                  {item.amount}
                </td>
                <td data-label="Notes" style={{ padding: "8px 12px", borderBottom: "1px solid #000", whiteSpace: "normal", wordBreak: "break-word", fontSize: isMicro ? "12px" : "16px" }}>
                  {item.notes}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>

      <style>
        {`
          @media (max-width: 1024px) {
            th:nth-child(3), td:nth-child(3) { 
              min-width: auto; 
              width: auto; 
            }
            th, td { font-size: 14px; padding: 6px 8px; }
            td { white-space: normal; word-break: break-word; }
          }

          @media (max-width: 640px) {
            table, thead, tbody, th, td, tr { display: block; width: 100%; }
            thead tr { display: none; }
            tr { margin-bottom: 16px; border-bottom: 1px solid #ccc; }
            td { display: flex; justify-content: space-between; padding: 6px 12px; white-space: normal; }
            td::before { content: attr(data-label); font-weight: 600; width: 50%; flex-shrink: 0; }
          }
        `}
      </style>
    </div>
  );
};

export default NutritionTable;
