import coverAboutUs from "../../assets/Images/1.Home Page/coveraboutus.png";

const AboutUs = () => {
    return (
        <section className="w-full flex justify-center px-4 py-10">
            <div
                className="relative w-full max-w-[1444px] h-[681px] rounded-[20px] overflow-hidden shadow-lg bg-[#FFF5E9]"
            >

                <div className="absolute inset-y-0 right-0 w-[80%]">
                    <img
                        src={coverAboutUs}
                        alt="About us cover"
                        className="w-full h-full object-cover"
                    />


                    <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-l from-transparent to-[#FFF5E9]" />
                </div>


                <div className="relative z-10 flex h-full items-center px-8 md:px-16">
                    <div className="max-w-[520px] space-y-6">
                        <h2 className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold leading-tight text-[#F5C242]">
                            Every dish is made with
                            <br />
                            love, passion, and the
                            <br />
                            warmth of home
                        </h2>

                        <button className="px-8 py-3 bg-[#F5C242] text-white font-semibold rounded-[10px] hover:opacity-90 transition">
                            More About Us
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
