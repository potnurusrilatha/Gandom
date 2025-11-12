const WaffelsCard = ({ title, calories, description, image }) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1248px",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "flex-start",
        flexWrap: "wrap",
        gap: "16px",
        margin: "0 auto",
        padding: "16px",
        boxSizing: "border-box",
      }}
    >
      <div
        style={{
          borderRadius: "20px",
          position: "relative",
          overflow: "hidden",
          padding: "16px",
          flex: "1 1 100%",
          maxWidth: "400px",
          minWidth: "0",
          boxSizing: "border-box",
        }}
      >
        <div
          style={{
            borderRadius: "16px",
            overflow: "hidden",
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
              height: "auto",
              maxHeight: "276px",
              objectFit: "cover",
              borderRadius: "12px",
              display: "block",
            }}
          />
        </div>
        <div
          style={{
            marginTop: "6px", 
            display: "flex",
            justifyContent: "center",
          }}
        >
          <svg width="55" height="13" viewBox="0 0 55 13" fill="none" xmlns="http://www.w3.org/2000/svg">
            <circle cx="6.5" cy="6.5" r="6.5" fill="#D9D9D9" />
            <circle cx="27.5" cy="6.5" r="6.5" fill="#D9D9D9" />
          </svg>
        </div>

        <div
          style={{
            marginTop: "8px", 
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h3
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 600,
              fontSize: "1.25rem",
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
            style={{
              width: "40px",
              height: "40px",
              borderRadius: "50%",
              border: "0.5px solid black",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "transparent",
              flexShrink: 0,
              marginLeft: "8px",
            }}
          >
            <span
              style={{
                fontFamily: "Inter, sans-serif",
                fontWeight: 200,
                fontSize: "28px",
                lineHeight: "130%",
                color: "black",
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
            fontSize: "1.25rem",
            lineHeight: "130%",
            color: "#426B1F",
            margin: "2px 0 0 0", 
            wordBreak: "break-word",
          }}
        >
          {calories}
        </p>

        <p
          style={{
            marginTop: "16px", 
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: "150%",
            color: "darkgray",
            marginBottom: 0,
          }}
        >
          {description}
        </p>
      </div>
    </div>
  );
};

export default WaffelsCard;
