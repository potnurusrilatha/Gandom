import { useNavigate } from "react-router-dom";

const DeliveryCard = ({ title, calories, description, image, onPlusClick }) => {
  const navigate = useNavigate();

  const handlePlusClick = () => {
    if (onPlusClick) {
      onPlusClick();
    } else {
      navigate("/delivery/createboxmenu");
    }
  };

  return (
    <div
      style={{
        width: "100%",
        maxWidth: "395px", 
        aspectRatio: "395 / 444", 
        backgroundColor: "white",
        border: "1px solid #E0E0E0",
        borderRadius: "20px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        gap: "12px",
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      {/* Image */}
      <div
        style={{
          borderRadius: "16px",
          overflow: "hidden",
          flex: "0 0 auto",
          aspectRatio: "1 / 0.7",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <img
          src={image}
          alt={`${title} - ${description}`}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            borderRadius: "12px",
          }}
        />
      </div>

      {/* Title + Button */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h3
          style={{
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "clamp(1rem, 1.25vw, 1.25rem)", 
            lineHeight: "130%",
            color: "black",
            margin: 0,
            flex: 1,
            wordBreak: "break-word",
          }}
        >
          {title}
        </h3>

        <div
          onClick={handlePlusClick}
          style={{
            width: "40px",
            height: "40px",
            borderRadius: "50%",
            border: "0.5px solid black",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            userSelect: "none",
          }}
        >
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 200,
              fontSize: "clamp(20px, 3vw, 28px)", 
              lineHeight: "130%",
              color: "black",
              marginTop: "-4px",
            }}
          >
            +
          </span>
        </div>
      </div>

      {/* Calories */}
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 600,
          fontSize: "clamp(1rem, 1vw, 1.25rem)", 
          lineHeight: "130%",
          color: "#426B1F",
          margin: "2px 0 0 0",
          wordBreak: "break-word",
        }}
      >
        {calories}
      </p>

      {/* Description */}
      <p
        style={{
          fontFamily: "Inter, sans-serif",
          fontWeight: 400,
          fontSize: "clamp(0.875rem, 0.9vw, 1rem)", 
          lineHeight: "150%",
          color: "darkgray",
          marginTop: "2px",
          marginBottom: 0,
        }}
      >
        {description}
      </p>
    </div>
  );
};

export default DeliveryCard;
