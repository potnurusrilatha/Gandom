import React from "react";

const EventTable = ({ description }) => {
  return (
    <div
      style={{
        width: "793px",
        maxWidth: "100%",
        overflowX: "auto",
        marginTop: "16px",
        border: "1px solid #000000",
        borderRadius: "12px",
        padding: "16px",
      }}
    >
      {/* Only description */}
      <p style={{ fontSize: "14px", color: "#555" }}>{description}</p>
    </div>
  );
};

export default EventTable;
