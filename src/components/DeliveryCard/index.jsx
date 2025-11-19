const DeliveryCard = ({ title, calories, description, image }) => {
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "1248px",
        backgroundColor: "white",
        border : "1px solid #E0E0E0",
        borderRadius: "20px",
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
              width: "358px",
              height: "254px",
              objectFit: "cover",
              borderRadius: "12px",
              display: "block",
            }}
          />
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

export default DeliveryCard;