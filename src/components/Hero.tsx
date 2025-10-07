import React from 'react';
import { useNavigate } from 'react-router-dom';
import homebg from "../assets/home.jpeg";
import gift from "../assets/gift-box.jpg";
import date from "../assets/dates.jpg";
import pistachios from "../assets/pistachios.jpg";
import gist from "../assets/gift.jpeg";
import nuts from "../assets/nuts.jpeg";

const Hero = () => {
    const navigate = useNavigate();

    return (
        <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 md:px-12 overflow-hidden bg-gray-900">
            <div className="absolute inset-0">
                <img
                    src={homebg}
                    alt="Nuts and leaves background"
                    className="w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
            </div>

            <div className="relative z-10 max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center py-12 sm:py-16">
                <div className="relative flex justify-center items-center h-full">
                    <div className="w-60 h-60 sm:w-80 sm:h-80 md:w-[450px] md:h-[450px] rounded-full border-[6px] border-transparent bg-gradient-to-tr from-[#ce8a4c] to-[#e2b87c] p-[3px] shadow-[0_0_30px_rgba(206,138,76,0.5)] relative animate-[float_6s_ease-in-out_infinite]">
                        <div className="w-full h-full rounded-full overflow-hidden">
                            <img
                                src={gift}
                                alt="Gift Box"
                                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                            />
                        </div>
                        <span className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 bg-white/90 px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold text-gray-800 shadow">
                            GUGGULR
                        </span>
                    </div>

                    <div className="absolute -top-4 sm:-top-6 right-0 w-20 h-20 sm:w-28 sm:h-28 md:w-[180px] md:h-[180px] rounded-full border-[3px] border-transparent bg-gradient-to-tr from-[#ce8a4c] to-[#e2b87c] p-[2px] shadow-lg transition-transform duration-300 hover:scale-110">
                        <img src={date} alt="Dates" className="w-full h-full object-cover rounded-full" />
                    </div>

                    <div className="absolute -bottom-2 sm:-bottom-4 right-0 w-16 h-16 sm:w-24 sm:h-24 md:w-[120px] md:h-[120px] rounded-full border-[3px] border-transparent bg-gradient-to-tr from-[#ce8a4c] to-[#e2b87c] p-[2px] shadow-lg transition-transform duration-300 hover:scale-110">
                        <img src={pistachios} alt="Pistachios" className="w-full h-full object-cover rounded-full" />
                    </div>

                    <div className="absolute bottom-0 -left-2 sm:bottom-2 sm:-left-0 w-16 h-16 sm:w-24 sm:h-24 md:w-[120px] md:h-[120px] rounded-full border-[3px] border-transparent bg-gradient-to-tr from-[#ce8a4c] to-[#e2b87c] p-[2px] shadow-lg transition-transform duration-300 hover:scale-110">
                        <img
                            src="https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=400"
                            alt="Nuts"
                            className="w-full h-full object-cover rounded-full"
                        />
                    </div>
                </div>

                <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 sm:space-y-8 mt-10 lg:mt-0">
                    <h1 className="text-white font-extrabold leading-tight text-3xl sm:text-4xl md:text-6xl drop-shadow-xl font-serif">
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#f6d365] to-[#fda085]">Guggulr</span>
                        <span className="block">Global Foods</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl text-white/90 font-medium max-w-xl leading-relaxed font-sans">
                        Nuts for your desk. <br className="hidden sm:block" /> Gifts for their heart!
                    </p>

                    <div className="flex flex-wrap gap-6 justify-center lg:justify-start pt-4">
                        <div
                            className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-[20px] border border-[#ce8a4c] overflow-hidden shadow-xl bg-white flex items-center justify-center transition-all duration-500 cursor-pointer hover:scale-110 hover:shadow-[0_0_35px_6px_rgba(255,215,0,0.8)]"
                            onClick={() => navigate("/gifting")}
                        >
                            <img src={gist} alt="Gift Boxes" className="w-full h-full object-cover" />
                        </div>

                        <div
                            className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-[20px] border border-[#ce8a4c] overflow-hidden shadow-xl bg-white flex items-center justify-center transition-all duration-500 cursor-pointer hover:scale-110 hover:shadow-[0_0_35px_6px_rgba(255,215,0,0.8)]"
                            onClick={() => navigate("/nuts")}
                        >
                            <img src={nuts} alt="Premium Nuts" className="w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
