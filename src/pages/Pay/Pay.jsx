import React from "react";
import Coverimage from "../../assets/Images/5.Delivery/_Cover Delivery.png";

const Pay = () => {
    return (
        <div className="w-full min-h-screen bg-[#F7F3EB]">
            {/* ---------- COVER ---------- */}
            <section className="relative w-full flex justify-end bg-[#F7F3EB] pt-[16px]">
                <div className="relative w-[1005px]">
                    {/* Cover image */}
                    <img
                        src={Coverimage}
                        alt="Review and order cover"
                        className="w-full h-auto block"
                    />

                    {/* Left gradient */}
                    <div
                        className="pointer-events-none absolute inset-y-0 left-0 w-[45%]
                        bg-gradient-to-r from-[#F7F3EB] via-[#F7F3EB]/80 to-transparent"
                    />

                    {/* Title */}
                    <div className="absolute -left-[180px] top-[150px]">
                        <h1 className="leading-tight text-left">
                            <span className="block text-[#F5C242] font-semibold text-[64px]">
                                Your
                            </span>
                            <span className="block font-santa text-[#00B9B0] text-[64px] -mt-3 pl-[32px]">
                                Order
                            </span>
                        </h1>
                    </div>
                </div>
            </section>

            {/* ---------- CONTENT ---------- */}
            <div className="relative max-w-[1005px] mx-auto px-6 md:px-0 pt-16 pb-24">
                {/* Page title */}
                <div className="mb-10">
                    <h2 className="text-[22px] font-semibold text-[#F5C242] mb-2">
                        Review and order
                    </h2>
                </div>

                <div className="grid gap-8 lg:grid-cols-[minmax(0,3fr)_minmax(0,2fr)]">
                    {/* LEFT COLUMN */}
                    <div className="space-y-6">

                        {/* Delivery address */}
                        <section className="bg-white rounded-[16px] shadow-sm border border-[#E4E0D8] px-6 py-5">
                            <h3 className="text-[15px] font-semibold text-[#333] mb-4">
                                Delivery address
                            </h3>
                            <div className="h-[140px] rounded-[10px] bg-[#EDEAE4]" />
                        </section>

                        {/* Delivery options */}
                        <section className="bg-white rounded-[16px] px-6 py-6 shadow-[0_3px_8px_rgba(0,0,0,0.04)]">
                            <h3 className="text-[16px] font-semibold text-[#333] mb-4">
                                Delivery options
                            </h3>

                            <div className="flex flex-col gap-3">

                                {/* Row 1 */}
                                <div className="flex items-center justify-between">
                                    <span className="text-[14px] text-[#333]">
                                        <span className="font-semibold">Standard</span> / 25 – 40 mins
                                    </span>
                                </div>

                                {/* Row 2 */}
                                <div className="flex items-center justify-between">
                                    <span className="text-[14px] text-[#333]">
                                        <span className="font-semibold">Priority delivery</span> / 20 – 35 mins
                                    </span>

                                    {/* Price pill */}
                                    <span className="px-4 py-[6px] rounded-full border border-[#D9D4CB] text-[13px] text-[#777]">
                                        + SEK 27.00
                                    </span>
                                </div>

                            </div>
                        </section>


                        {/* Personal information */}
                        <section className="bg-white rounded-[16px] shadow-sm border border-[#E4E0D8] px-6 py-5">
                            <h3 className="text-[15px] font-semibold text-[#333] mb-4">
                                Personal information
                            </h3>
                            <div className="h-[140px] rounded-[10px] bg-[#EDEAE4]" />
                        </section>

                        {/* Payment */}
                        <section className="bg-white rounded-[16px] shadow-sm border border-[#E4E0D8] px-6 py-5">
                            <h3 className="text-[15px] font-semibold text-[#333] mb-4">
                                Payment
                            </h3>
                            <div className="h-[120px] rounded-[10px] bg-[#EDEAE4]" />
                        </section>
                    </div>

                    {/* RIGHT COLUMN */}
                    <aside className="bg-white rounded-[16px] shadow-sm border border-[#E4E0D8] px-6 py-6 h-fit">
                        <h3 className="text-[14px] font-semibold text-[#333] mb-4">
                            Your order from
                        </h3>

                        <div className="mb-4 text-[12px] text-[#666]">
                            <p className="font-semibold text-[13px] text-[#333]">
                                Gandom Kitchen
                            </p>
                            <p className="mt-1">
                                Delivery to your address in 20–35 minutes.
                            </p>
                        </div>

                        <div className="border-t border-[#E4E0D8] my-4" />

                        <div className="space-y-2 text-[12px] text-[#555]">
                            <div className="flex justify-between">
                                <span>Subtotal</span>
                                <span>62.50 SEK</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Delivery fee</span>
                                <span>9.00 SEK</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Service fee</span>
                                <span>1.25 SEK</span>
                            </div>
                        </div>

                        <div className="border-t border-[#E4E0D8] my-4" />

                        <div className="flex items-center justify-between">
                            <span className="text-[13px] font-semibold text-[#333]">
                                Total
                            </span>
                            <span className="text-[18px] font-semibold text-[#F5C242]">
                                72.75 SEK
                            </span>
                        </div>

                        <button className="mt-6 w-full h-[48px] rounded-full bg-[#FFC94B] text-[15px] font-semibold text-[#111] shadow-sm hover:brightness-95 transition">
                            Place order
                        </button>
                    </aside>
                </div>
            </div>
        </div>
    );
};

export default Pay;
