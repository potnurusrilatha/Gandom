const DessertCard = ({ title, calories, description, image }) => {
  return (
    <div
      style={{
        width: "100%",           
        maxWidth: "1248px",      
        minHeight: "470px",
        backgroundColor: "white",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        border: "2px solid grayBorder",
        borderRadius: "20px",
        boxSizing: "border-box",
        margin: "0 auto",
        padding: "2%",
        flexWrap: "wrap",        
      }}
    >
     
      <div
        style={{
          borderRadius: "20px",
          position: "relative",
          boxSizing: "border-box",
          overflow: "hidden",
          padding: "2%",
          flex: "1 1 380px",      
          maxWidth: "400px",      
          minWidth: "300px",      
        }}
      >
       
        <div
          style={{
            borderRadius: "16px",
            padding: "2%",
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
              maxWidth: "374px",
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
            position: "relative",
            marginTop: "2%",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <svg
            width="55"
            height="13"
            viewBox="0 0 55 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="6.5" cy="6.5" r="6.5" fill="#D9D9D9" />
            <circle cx="27.5" cy="6.5" r="6.5" fill="#D9D9D9" />
            <circle cx="48.5" cy="6.5" r="6.5" fill="#D9D9D9" />
          </svg>
        </div>

      
        <h3
          style={{
            marginTop: "2%",
            marginLeft: "4%",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "1.25rem",   
            lineHeight: "130%",
            color: "black",
            whiteSpace: "nowrap",
          }}
        >
          {title}
        </h3>

      
        <p
          style={{
            marginTop: "1%",
            marginLeft: "4%",
            fontFamily: "Inter, sans-serif",
            fontWeight: 600,
            fontSize: "1.25rem",
            lineHeight: "130%",
            color: "#426B1F",
            whiteSpace: "nowrap",
          }}
        >
          {calories}
        </p>

       
        <p
          style={{
            marginTop: "1%",
            marginLeft: "4%",
            fontFamily: "Inter, sans-serif",
            fontWeight: 400,
            fontSize: "1rem",
            lineHeight: "150%",
            color: "darkGray",
            whiteSpace: "nowrap",
            gap: "2px",         
           }}
        >
          {description}
        </p>

       
        <div
          style={{
            position: "absolute",
            top: "70%",              
            right: "5%",
            width: "62px",          
            height: "62px",        
            borderRadius: "50%",
            border: "2px dotted rgba(0,0,0,0.4)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "transparent",
           
          }}
        >
          <span
            style={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 200,
              fontSize: "3rem",
              lineHeight: "130%",
              color: "rgba(0,0,0,0.5)",
            }}
          >
            +
          </span>
        </div>
      </div>
    </div>
  );
};

export default DessertCard;
