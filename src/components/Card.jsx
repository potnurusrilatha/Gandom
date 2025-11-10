import React from "react";

const Card = ({ text, author, stars = 5 }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center w-80">
            <div className="flex mb-4">
                {Array.from({ length: stars }).map((_, i) => (
                    <span key={i} className="text-accentYellow text-2xl">★</span>
                ))}
            </div>
            <p className="text-grayDark mb-4">"{text}"</p>
            <span className="text-grayDark font-semibold">{author}</span>
        </div>
    );
};

export default Card;
