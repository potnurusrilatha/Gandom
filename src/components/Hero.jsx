import React from "react";
<<<<<<< HEAD
import coverImg from "../assets/Images/1.Home Page/_Cover.png";
import logo from "../assets/Logo Gandom/Logo white.png";
=======
import coverImg from "../.././src/assets/Images/1.Home Page/_Cover.png";
>>>>>>> 9289cf5 (fixed Hero Component)

const Hero = () => {
    return (
        <section
            className="relative w-full h-[90vh] bg-cover bg-center flex items-center justify-end pr-16"
            style={{ backgroundImage: `url(${coverImg})` }}
        >
            <div className="absolute inset-0 bg-black/20" />
            <div className="relative z-10 text-right text-white flex flex-col items-end">
                <img src={logo} alt="GANDOM Logo" className="w-64 mb-4" />
                <p className="text-xl font-lexend">
                    Wholesome flavors, redefined.
                </p>
            </div>
        </section>
    );
};

export default Hero;
