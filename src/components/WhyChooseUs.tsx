import Image from "next/image";
import { Check, Phone } from "lucide-react";

const WhyChooseUs = () => {
    return (
        <section className="py-16 md:py-24 bg-[#f0f9ff] overflow-hidden">
            <div className="container mx-auto px-6 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    {/* Right Column - Content (Order 1 on Mobile) */}
                    <div className="relative z-10 order-1 lg:order-2 text-left">
                        {/* Main Heading */}
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight mb-6 text-[#1e3a8a]">
                            Why Leading <span className="relative inline-block text-[#1e3a8a]">
                                Restaurants
                                {/* Green Underline Graphic */}
                                <svg className="absolute w-[100%] h-3 -bottom-1 left-0 text-[#00b03b]" viewBox="0 0 100 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2.00025 7.00002C35 2 65 0 98 4.00002" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                                </svg>
                            </span> <br />
                            Trust GreaseGuard?
                        </h2>

                        {/* Subhead */}
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-6 leading-relaxed">
                            We&apos;re Your Trusted And Certified Hood Cleaning Partner for Fire Safety, Compliance & Total Peace of Mind
                        </h3>

                        {/* Body Text */}
                        <p className="text-slate-600 mb-8 leading-relaxed">
                            When it comes to keeping your Restaurant Hood safe, compliant, and inspection-ready, Our certified technicians don&apos;t just clean - they protect your business from fire hazards, costly fines, and unexpected downtime. With every service, you get expert workmanship, transparent documentation, and complete peace of mind knowing your system meets every NFPA 96 fire code requirement. We treat your Restaurant Hood like our own - with precision, professionalism, and care that goes beyond expectations.
                        </p>

                        {/* Checklist Items */}
                        <div className="space-y-4 mb-10">
                            {[
                                "Detailed before & after photo documentation",
                                "NFPA 96 compliant cleaning for maximum safety"
                            ].map((item, index) => (
                                <div key={index} className="flex items-start gap-3">
                                    <div className="flex-shrink-0 flex text-[#00b03b] mt-1">
                                        <Check className="w-5 h-5 md:w-6 md:h-6" strokeWidth={3} />
                                        <Check className="w-5 h-5 md:w-6 md:h-6 -ml-3" strokeWidth={3} />
                                    </div>
                                    <span className="text-base md:text-lg font-bold text-slate-900 leading-tight">
                                        {item}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* CTA Section */}
                        <div className="flex flex-col items-start gap-4">
                            <a
                                href="tel:301-974-7182"
                                className="w-full md:w-auto bg-[#00b03b] hover:bg-[#009b34] text-white text-lg md:text-xl font-bold px-8 py-4 rounded-md shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-center inline-flex items-center justify-center gap-2"
                            >
                                <Phone className="w-6 h-6" /> 301-974-7182
                            </a>

                            <div className="flex items-center gap-2 text-slate-700 text-sm font-medium ml-1">
                                <Check className="w-4 h-4 text-[#00b03b]" strokeWidth={3} />
                                <span>24/7 Emergency Service</span>
                            </div>
                        </div>
                    </div>

                    {/* Left Column - Image Collage (Order 2 on Mobile) */}
                    <div className="relative order-2 lg:order-1 mt-10 lg:mt-0 px-2 lg:px-0">
                        {/* Main Image Container - Largely Dominant on Mobile */}
                        <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white transform -rotate-2 ml-2 md:ml-0 w-[95%] md:w-full h-[320px] sm:h-[400px] md:h-auto">
                            <Image
                                src="/images/after-hood-matched.webp"
                                alt="Sparkling clean commercial kitchen hood"
                                width={600}
                                height={700}
                                className="w-full h-full object-cover scale-105"
                            />
                        </div>

                        {/* Overlay Image - Much Smaller, Clearer Hierarchy */}
                        <div className="absolute -bottom-8 -right-1 md:-bottom-12 md:-right-8 w-[45%] md:w-3/5 rounded-2xl overflow-hidden shadow-2xl border-4 md:border-[6px] border-white z-20">
                            <Image
                                src="/images/hood-cleaning.webp"
                                alt="Technician cleaning hood"
                                width={400}
                                height={300}
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;
