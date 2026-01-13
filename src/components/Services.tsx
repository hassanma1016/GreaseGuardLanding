"use client";

import Image from "next/image";
import { Phone } from "lucide-react";

const services = [
    {
        title: "Commercial Hood Cleaning",
        description: "Deep pressure washing of hoods, ducts, and fans to bare metal. We remove 100% of grease to meet NFPA 96 standards.",
        image: "/images/hood-cleaning.webp",
    },
    {
        title: "Fan Belt Replacement",
        description: "We inspect your exhaust fan belts every visit and replace them as needed to ensure optimal airflow and suction.",
        image: "/images/fan-replacement.webp",
    },
    {
        title: "Filter Cleaning & Exchange",
        description: "Don't scrub dirty filters. We provide sparkling clean stainless steel baffle filters on every service visit.",
        image: "/images/filter-cleaning.webp",
    },
    {
        title: "Grease Trap Cleaning",
        description: "Comprehensive grease trap pumping and deep cleaning to prevent backups, foul odors, and costly city fines.",
        image: "/images/grease-trap.webp",
    },
    {
        title: "Pollution Control Systems",
        description: "Maintenance and cleaning of electrostatic precipitators and Ecology Units to keep air emissions compliant and smoke-free.",
        image: "/images/pollution-control.webp",
    },
    {
        title: "Residential Hood Cleaning",
        description: "Pro-grade cleaning for high-end residential range hoods. We protect your luxury kitchen while restoring optimal performance.",
        image: "/images/residential-hood.webp",
    },
    {
        title: "Pressure Washing",
        description: "High-pressure concrete, sidewalk, and floor deep cleaning to remove gum, oil stains, and built-up grime.",
        image: "/images/pressure-washing.webp",
    },
    {
        title: "Kitchen Deep Cleaning",
        description: "Floor-to-ceiling sanitization of walls, ceilings, and surfaces. We scrub every inch to ensure passing health scores.",
        image: "/images/deep-cleaning.webp",
    },
    {
        title: "Equipment Cleaning",
        description: "Restore your ovens, stoves, and fryers. We remove carbon buildup and baked-on grease to extend equipment life.",
        image: "/images/equipment-cleaning.webp",
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

                {/* Compact Vertical List for Mobile / Grid for Desktop */}
                <div className="flex flex-col gap-4 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-8">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="group bg-white rounded-2xl overflow-hidden shadow-sm md:shadow-lg hover:shadow-md md:hover:shadow-2xl transition-all duration-300 border border-slate-100 flex md:block items-center md:items-stretch gap-4 md:gap-0 p-3 md:p-0"
                        >
                            {/* Image Container - Inset Thumbnail on Mobile / Full width on Desktop */}
                            <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-full md:h-64 flex-shrink-0 overflow-hidden rounded-xl md:rounded-none bg-slate-100">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                            </div>

                            {/* Content Container */}
                            <div className="flex-1 min-w-0 md:p-8">
                                <h3 className="text-[17px] sm:text-lg md:text-2xl font-bold text-slate-900 mb-1 md:mb-4 group-hover:text-green-600 transition-colors leading-tight">
                                    {service.title}
                                </h3>
                                <p className="text-slate-500 text-xs sm:text-sm md:text-base leading-snug md:leading-relaxed line-clamp-2 md:line-clamp-none">
                                    {service.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
                {/* Mobile-Only Click to Call Button */}
                <div className="mt-12 text-center md:hidden">
                    <a
                        href="tel:301-974-7182"
                        className="inline-flex items-center justify-center gap-2 w-full bg-[#00b03b] hover:bg-[#009b34] text-white text-lg font-bold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1"
                    >
                        <Phone className="inline w-5 h-5" /> 301-974-7182
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Services;
