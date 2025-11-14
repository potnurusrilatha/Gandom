import coverGymHealthy from "../../assets/Images/7.Gym/coverhealthygymhome.png";

const GymHealthy = () => {
    return (
        <section className="w-full flex justify-center px-4 py-10">
            <div
                className="relative w-full max-w-[1444px] h-[681px] rounded-[20px] overflow-hidden shadow-lg bg-white"
            >

                <div className="absolute inset-0 flex justify-end">
                    <div className="relative w-[90%] h-full">
                        <img
                            src={coverGymHealthy}
                            alt="Healthy Gym Meals"
                            className="w-full h-full object-cover"
                        />


                        <div className="absolute inset-y-0 left-0 w-[45%] bg-gradient-to-l from-transparent to-white"></div>
                    </div>
                </div>


                <div className="relative z-10 flex h-full items-center px-10 md:px-16">
                    <div className="max-w-[520px] space-y-8">
                        <h2 className="text-[36px] md:text-[42px] lg:text-[48px] font-semibold leading-tight text-[#3b6f22]">
                            All-natural, high-protein
                            <br />
                            meals to refuel before and
                            <br />
                            after your workout.
                        </h2>

                        <button className="px-8 py-3 bg-[#F5C242] text-white font-semibold rounded-[10px] hover:opacity-90 transition">
                            Discover More
                        </button>
                    </div>
                </div>

            </div>
        </section>
    );
};

export default GymHealthy;
