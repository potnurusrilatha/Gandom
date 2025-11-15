const SoupNutritionTable = ({ nutrition }) => {
  return (
    <div
      style={{
        width: "793px",
        maxWidth: "100%",
        overflowX: "auto",
        marginTop: "16px",
        border: "1px solid #000000",
      }}
    >
      <table
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th
              style={{
                padding: "8px 12px",
                textAlign: "left",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "130%",
                color: "#000000",
                borderBottom: "1px solid #000000",
              }}
            >
              Nutrient
            </th>
            <th
              style={{
                padding: "8px 12px",
                textAlign: "left",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "130%",
                color: "#000000",
                borderBottom: "1px solid #000000",
                whiteSpace: "nowrap", 
              }}
            >
              Amount
            </th>
            <th
              style={{
                padding: "8px 32px", 
                textAlign: "left",
                fontFamily: "Inter, sans-serif",
                fontWeight: 600,
                fontSize: "16px",
                lineHeight: "130%",
                color: "#000000",
                borderBottom: "1px solid #000000",
              }}
            >
              Notes
            </th>
          </tr>
        </thead>
        <tbody>
          {nutrition.map((item, idx) => {
            const isMicro = item.nutrient.toLowerCase().includes("micronutrients");
            return (
              <tr key={idx}>
                <td
                  style={{
                    padding: "8px 12px",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "130%",
                    color: "#000000",
                    borderBottom: "1px solid #000000",
                  }}
                >
                  {item.nutrient}
                </td>
                <td
                  style={{
                    padding: "8px 12px",
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: "16px",
                    lineHeight: "130%",
                    color: "#000000",
                    borderBottom: "1px solid #000000",
                    whiteSpace: "nowrap", 
                  }}
                >
                  {item.amount}
                </td>
                <td
                  style={{
                    padding: "8px 32px", 
                    fontFamily: "Inter, sans-serif",
                    fontWeight: 400,
                    fontSize: isMicro ? "12px" : "16px",
                    lineHeight: "130%",
                    color: "#000000",
                    borderBottom: "1px solid #000000",
                  }}
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

export default SoupNutritionTable;
