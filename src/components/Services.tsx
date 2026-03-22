"use client";

import Image from "next/image";
import { Phone } from "lucide-react";

const services = [
    {
        title: "Kitchen Exhaust Cleaning",
        description: "Deep pressure washing of hoods, ducts, and fans to bare metal. We remove 100% of grease to meet NFPA 96 standards.",
        image: "/images/hood-cleaning.webp",
    },
    {
        title: "Restaurant Hood Cleaning",
        description: "Comprehensive hood cleaning services for restaurants, ensuring fire safety, code compliance, and an immaculate kitchen environment.",
        image: "/images/restaurant_hood.png",
    },
];

const Services = () => {
    return (
        <section id="services" className="py-24 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-3xl mx-auto mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900">
                        Our Services
                    </h2>
                </div>

                {/* Centered Grid for Two Items (Desktop/Tablet) */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-10 max-w-5xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 flex flex-col h-full"
                        >
                            {/* Image Container - Full width and properly proportioned on both Mobile and Desktop */}
                            <div className="relative w-full h-56 sm:h-64 md:h-72 flex-shrink-0 overflow-hidden bg-slate-100">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent mix-blend-multiply"></div>
                            </div>

                            {/* Content Container */}
                            <div className="flex-1 flex flex-col p-6 sm:p-8 text-left">
                                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-3 group-hover:text-green-600 transition-colors leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-slate-500 text-sm sm:text-base md:text-lg leading-relaxed mb-6">
                                    {service.description}
                                </p>
                                
                                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center text-green-600 font-bold text-sm sm:text-base opacity-90 group-hover:opacity-100 transition-opacity">
                                    <span>Learn more</span>
                                    <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Mobile-Only Click to Call Button */}
                <div className="mt-12 text-center md:hidden">
                    <a
                        href="tel:682-900-8855"
                        className="inline-flex items-center justify-center gap-2 w-full bg-[#00b03b] hover:bg-[#009b34] text-white text-lg font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                    >
                        <Phone className="inline w-5 h-5" /> (682) 900-8855
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
