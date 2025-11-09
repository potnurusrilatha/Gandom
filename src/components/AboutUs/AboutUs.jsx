import React from "react";
import aboutImg from "../../assets/Images/1.Home Page/Kitchen.png";

const AboutUs = () => {
    return (
        <section className="relative w-full">

            <img src={aboutImg} alt="Kitchen" className="w-full object-cover h-[500px]" />


            <div className="absolute inset-0 bg-black/25" />

            {/* متن و دکمه */}
            <div className="absolute top-[30%] right-[10%] z-10 text-right max-w-[400px]">
                <p className="text-white text-xl font-semibold">
                    We provide healthy food<p>for your family.</p>
                </p>
                <button
                    onClick={() => window.scrollTo({ top: 900, behavior: "smooth" })}
                    className="mt-4 px-6 py-3 bg-white text-black rounded-lg font-semibold hover:bg-gray-200 transition-colors"
                >
                    More About Us
                </button>
            </div>
        </section>
    );
};

export default AboutUs;
