import React from "react";
import aboutImg from "../../assets/Images/1.Home Page/Kitchen.png";

const AboutUs = () => {
    return (
        <section className="relative w-full h-[400px] overflow-hidden mt-12 mb-0">







            <img
                src={aboutImg}
                alt="Kitchen"
                className="w-full h-full object-cover"
            />


            <div className="absolute inset-0 bg-gradient-to-l from-black/70 via-black/40 to-transparent" />


            <div className="absolute top-1/2 right-[8%] -translate-y-1/2 z-10 text-right max-w-[420px]">
                <h2 className="text-white text-3xl font-semibold leading-snug">
                    We provide healthy food<br />for your family.
                </h2>
                <button
                    onClick={() =>
                        window.scrollTo({ top: 900, behavior: "smooth" })
                    }
                    className="mt-5 px-6 py-3 bg-white text-black rounded-lg font-medium hover:bg-yellow-100 transition-colors"
                >
                    More About Us
                </button>
            </div>
        </section>
    );
};

export default AboutUs;
