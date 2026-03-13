import Image from "next/image";
import { Check, Phone } from "lucide-react";

const CTA = () => {
    return (
        <section className="relative py-24 md:py-32 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hood-cleaning.webp"
                    alt="Commercial Kitchen Background"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-[#0f172a]/95 mix-blend-multiply"></div>
            </div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">

                {/* Headline Section */}
                <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white mb-6 leading-tight">
                    Keep Your Hood Safe, Compliant <br />
                    <span className="relative inline-block">
                        & Fire-Code Ready
                        {/* Green Swoosh Graphic */}
                        <svg className="absolute w-[110%] h-4 -bottom-1 -right-2 text-[#00b03b]" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M2.00025 7.00002C55.0327 2.13335 142.5 -2.49999 198 4.00002" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
                        </svg>
                    </span>
                </h2>

                <p className="text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-light">
                    Don&apos;t wait for an inspection or a fire hazard to find out your hood system isn&apos;t up to code. With GreaseGuard, you get certified, NFPA 96&ndash;compliant cleaning that protects your business, your staff, and your reputation guaranteed.
                </p>

                {/* Features Row */}
                <div className="flex flex-wrap justify-center gap-6 md:gap-10 mb-12 text-white font-medium">
                    {[
                        "Photo-Proof Results",
                        "Fire-Safe Cleaning",
                        "Flexible Scheduling"
                    ].map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                            <Check className="w-5 h-5 text-[#00b03b]" strokeWidth={3} />
                            <span>{feature}</span>
                        </div>
                    ))}
                </div>

                {/* CTA Button */}
                <div className="flex flex-col items-center gap-6">
                    <a
                        href="tel:682-900-8855"
                        className="bg-[#00b03b] hover:bg-[#009b34] text-white text-xl md:text-2xl font-bold px-10 py-5 rounded-md shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 inline-flex items-center gap-2"
                    >
                        <Phone className="w-6 h-6" /> (682) 900-8855
                    </a>

                    {/* Review Stars */}
                    <div className="flex items-center gap-2">
                        <div className="flex text-[#FFD700] gap-0.5">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-slate-300 text-sm font-medium">
                            <span className="font-bold text-white">120+ Five-Star Reviews</span> across all platforms!
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CTA;
