import { Phone } from "lucide-react"; // In case we wanted to use an image asset, but SVG is better for the logo

const testimonials = [
    {
        name: "Adriana Lindsey",
        role: "Satisfied Customer",
        initial: "A",
        bg: "bg-blue-100",
        content: "I needed urgent hood cleaning after the fire marshal's inspection, and Grease Guard Hood Cleaning came through! They responded quickly, got the job done fast, and everything was up to code. Their team was professional and efficient, saving me from potential fines or delays. If you need quick service you can count on, I highly recommend them!",
    },
    {
        name: "Matthew Epstein",
        role: "Satisfied Customer",
        initial: "M", /* We will use an image if meaningful, but initials work for now as per previous design unless image requested. The reference shows photos. I should try to use initials or generic placeholders if I don't have the photos. The reference image shows real photos. I will use the initials with colored backgrounds style as a fallback or matching the style if I can't generate images. The plan only said 'User Avatar'. I'll use colorful initials circles to look premium. */
        bg: "bg-green-100",
        content: "The team that came to our house were amazing. Super friendly and answered all of my questions. The prior owner of the house had lived here for 10+ years and never had cleaned the vent/exhaust. They were able to clean everything quickly and effectively to keep our home safe. In a world where it's challenging to find residential hood cleaners, Greaseguard is a savior.",
    },
    {
        name: "Michael Jamerson",
        role: "Satisfied Customer",
        initial: "M",
        bg: "bg-purple-100",
        title: "Best Hood Cleaning Service",
        content: "From the moment Grease Guard Hood Cleaning team arrived, they exhibited nothing but professionalism and meticulous attention to detail. They tackled our restaurant's complex kitchen exhaust systems with remarkable efficiency, ensuring every inch was impeccably cleaned.",
    },
];

const GoogleLogo = () => (
    <svg className="w-6 h-6" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
    </svg>
);

const Testimonials = () => {
    return (
        <section id="testimonials" className="py-20 bg-white">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#1e3a8a] mb-4">
                        We Promise, You&apos;ll Love Us Too!
                    </h2>

                    <div className="flex justify-center items-center gap-2">
                        <div className="flex text-[#FFD700]">
                            {[...Array(5)].map((_, i) => (
                                <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                </svg>
                            ))}
                        </div>
                        <span className="text-slate-600 font-medium">120+ Five-Star Reviews across all platforms!</span>
                    </div>
                </div>

                {/* Cards Grid */}
                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {testimonials.map((testimonial, index) => (
                        <div key={index} className="bg-white p-8 rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-slate-100 flex flex-col h-full hover:shadow-xl transition-shadow duration-300">
                            {/* Card Header: Stars + Google Logo */}
                            <div className="flex justify-between items-start mb-6">
                                <div className="flex text-[#FFD700] gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <svg key={i} className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                                            <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                        </svg>
                                    ))}
                                </div>
                                <GoogleLogo />
                            </div>

                            {/* Optional Title (for 3rd card) */}
                            {testimonial.title && (
                                <h4 className="text-lg font-bold text-slate-900 mb-3">{testimonial.title}</h4>
                            )}

                            {/* Review Content */}
                            <p className="text-slate-600 mb-8 leading-relaxed flex-grow text-[15px]">
                                {testimonial.content}
                            </p>

                            {/* User Profile */}
                            <div className="flex items-center gap-4 mt-auto">
                                {/* Using colored initials as avatars to match premium look without fake photos */}
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-slate-700 ${testimonial.bg || "bg-slate-200"}`}>
                                    {testimonial.initial}
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 text-lg">{testimonial.name}</p>
                                    <p className="text-sm text-slate-500">{testimonial.role}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bottom CTA */}
                <div className="flex justify-center">
                    <a
                        href="tel:682-900-8855"
                        className="bg-[#00b03b] hover:bg-[#009b34] text-white text-xl font-bold px-12 py-4 rounded-md shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 inline-flex items-center gap-2"
                    >
                        <Phone className="w-6 h-6" /> (682) 900-8855
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
