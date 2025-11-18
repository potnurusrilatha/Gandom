import React from "react";
import Coverimage from "../../assets/Images/5.Delivery/_Cover Delivery.png";
import img1 from "../../assets/Images/5.Delivery/ash.png";

const YourCart = () => {
    return (
        <div className="w-full min-h-screen bg-[#F7F4EF]">
            <section className="relative w-full flex justify-end bg-[#F7F4EF] pt-[16px]">

                <div className="relative w-[1005px]">


                    <img
                        src={Coverimage}
                        alt="Your cart cover"
                        className="w-full h-auto block"
                    />


                    <div
                        className="pointer-events-none absolute inset-y-0 left-0 w-[45%]
        bg-gradient-to-r from-[#F7F4EF] via-[#F7F4EF]/80 to-transparent"
                    />


                    <div className="absolute -left-[180px] top-[150px]">
                        <h1 className="leading-tight text-left">
                            <span className="block text-[#F5C242] font-semibold text-[64px]">
                                Your
                            </span>
                            <span className="block font-santa text-[#F5C242] text-[64px] -mt-3">
                                Cart
                            </span>
                        </h1>
                    </div>

                </div>
            </section>




            {/* ---------- CART CONTENT ---------- */}
            <div className="relative max-w-[1005px] mx-auto px-6 md:px-0 pt-16 pb-24">

                <div className="flex items-center justify-between mb-8">
                    <h2 className="text-[22px] font-semibold text-[#F5C242]">Your Cart</h2>
                    <button className="text-sm font-medium text-[#0B8EDD] hover:underline">
                        Continue shopping
                    </button>
                </div>


                <div className="grid grid-cols-[minmax(0,3fr)_minmax(0,1fr)_minmax(0,1fr)] text-xs md:text-sm font-semibold text-[#111] mb-3">
                    <span>Product</span>
                    <span className="text-center">Quantity</span>
                    <span className="text-right">Total</span>
                </div>


                <div className="w-full border border-[#E5E5E5] rounded-[16px] px-5 py-5 flex items-center justify-between gap-6 mb-10 bg-white shadow-sm">

                    <div className="flex items-center gap-4 flex-[3]">
                        <img
                            src={img1}
                            alt="Ashe Reshteh"
                            className="w-[96px] h-[96px] rounded-[18px] object-cover"
                        />
                        <div>
                            <p className="text-[15px] font-medium text-[#111]">Ashe Reshteh</p>
                            <p className="text-xs text-[#777] mt-1">62.50 SEK</p>
                        </div>
                    </div>


                    <div className="flex-1 flex items-center justify-center">
                        <div className="flex items-center gap-4 border border-[#DADADA] rounded-full px-6 py-2 bg-[#F7F4EF]">
                            <button className="text-sm font-semibold text-[#555]">−</button>
                            <span className="text-[15px] font-medium text-[#111]">1</span>
                            <button className="text-sm font-semibold text-[#555]">+</button>
                        </div>
                    </div>


                    <div className="flex-1 flex justify-end">
                        <span className="text-[15px] font-semibold text-[#111]">
                            60.50 SEK
                        </span>
                    </div>
                </div>


                <div className="border-t border-[#D9D4CB] mb-10" />


                <div className="flex flex-col md:flex-row gap-10 items-start">

                    <div className="flex-1 w-full">
                        <p className="text-sm font-medium text-[#333] mb-3">
                            Order special instructions
                        </p>
                        <div className="w-full max-w-[380px] h-[110px] rounded-[10px] bg-[#EDEAE4] border border-[#D9D4CB]" />
                    </div>


                    <div className="flex-1 flex flex-col items-center md:items-end gap-4">
                        <div className="text-right">
                            <p className="text-sm font-semibold text-[#333]">
                                Estimated total{" "}
                                <span className="ml-2 text-[15px] font-semibold">
                                    60.50 SEK
                                </span>
                            </p>
                            <p className="text-[11px] text-[#777] mt-1 leading-4 max-w-[260px]">
                                Tax included and shipping and discounts calculated at checkout.
                            </p>
                        </div>

                        <button className="mt-2 w-[220px] h-[48px] rounded-full bg-[#FFC94B] text-[15px] font-semibold text-[#111] shadow-sm hover:brightness-95 transition">
                            Check out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YourCart;
