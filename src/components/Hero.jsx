import React from "react";
import coverImg from "../../assets/Images/1.Home Page/_Cover.png";

const Hero = () => {
    return (
        <section
            className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: `url(${coverImg})` }}
        >
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative text-center text-white z-10">
                <h1 className="text-5xl font-santa text-primary mb-4 tracking-wide">
                    GANDOM
                </h1>
                <p className="text-xl font-lexend">
                    Wholesome flavors, redefined.
                </p>
            </div>
        </section>
    );
};

export default Hero;
