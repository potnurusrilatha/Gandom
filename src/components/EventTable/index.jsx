const EventText = ({ description }) => {
  return (
    <div
      style={{
        fontFamily: "Inter, sans-serif",
        fontSize: "16px",
        lineHeight: "150%",
        letterSpacing: "-1.1%",
        color: "#333",
        whiteSpace: "pre-line",
        padding: "20px",           
      }}
    >
      {description}
    </div>
  );
};

export default EventText;
