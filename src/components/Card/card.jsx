import React from "react";

const Cards = () => {
    return (
        <section className="w-full py-20 flex flex-col items-center bg-[#FCFBF7]">

            <h2 className="text-[40px] sm:text-[48px] md:text-[56px] lg:text-[64px] font-santa font-semibold text-primary mb-16 text-center">
                What our Customers say
            </h2>


            <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10 px-6">


                <article className="bg-white rounded-[30px] shadow-md px-10 py-12 flex flex-col justify-between">

                    <div>
                        <div className="flex gap-1 text-[26px] text-[#FFC94B] mb-6">
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>


                        <div className="flex items-start gap-4">
                            <span className="text-[44px] text-primary leading-none">&ldquo;</span>
                            <p className="text-[17px] text-[#333] font-medium leading-[1.7]">
                                Maten är fantastisk och det kommer att bli min nya favoriträtt
                            </p>
                            <span className="text-[44px] text-primary leading-none">&rdquo;</span>
                        </div>
                    </div>

                    <p className="mt-10 text-center text-[15px] text-[#444] font-medium">
                        Gandoms customer
                    </p>
                </article>


                <article className="bg-white rounded-[30px] shadow-md px-10 py-12 flex flex-col justify-between">

                    <div>
                        <div className="flex gap-1 text-[26px] text-[#FFC94B] mb-6">
                            <span>★</span><span>★</span><span>★</span><span>★</span><span>★</span>
                        </div>


                        <div className="flex items-start gap-4">
                            <span className="text-[44px] text-primary leading-none">&ldquo;</span>
                            <p className="text-[17px] text-[#333] font-medium leading-[1.7]">
                                The food arrived hot. Yogurt dishes are often good, and I thought it
                                was pretty good with noodles. Also, being vegetarian is really
                                important to me. Thanks.
                            </p>
                            <span className="text-[44px] text-primary leading-none">&rdquo;</span>
                        </div>
                    </div>


                    <p className="mt-10 text-center text-[15px] text-[#444] font-medium">
                        Gandoms customer
                    </p>
                </article>

            </div>
        </section>



    );
};

export default Cards;
