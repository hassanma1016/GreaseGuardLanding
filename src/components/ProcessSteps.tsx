import { ClipboardList, Paintbrush, FileText, Phone } from "lucide-react";

const steps = [
    {
        number: "1",
        icon: ClipboardList,
        title: "Inspection & Setup",
        description: "We inspect your entire hood system for grease buildup and fire risks, cover all equipment, and safely shut off power and gas before cleaning begins.",
    },
    {
        number: "2",
        icon: Paintbrush, // Using Paintbrush as a proxy for the broom/cleaning icon
        title: "Deep Hood Cleaning",
        description: "Our certified technicians perform a complete \"bare steel\" degreasing of your hood, filters, and surrounding areas removing every trace of grease for maximum fire safety.",
    },
    {
        number: "3",
        icon: FileText,
        title: "Polish & Compliance Report",
        description: "We polish your hood to a shine and provide before & after photos plus a detailed NFPA 96 compliance report for your peace of mind and inspection readiness.",
    },
];

const ProcessSteps = () => {
    return (
        <section id="process" className="py-20 bg-[#f0f9ff]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold text-[#1e3a8a] mb-6">
                        Hood Cleaning Process
                    </h2>
                    <p className="text-slate-600 max-w-3xl mx-auto text-lg leading-relaxed">
                        We follow a proven process designed to deliver a spotless, fire-safe, and fully compliant hood system every single time.
                    </p>
                </div>

                <div className="relative max-w-6xl mx-auto">
                    {/* Connecting Line - Mobile (Vertical Left) & Desktop (Horizontal Top) */}
                    <div className="hidden md:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-[#1e3a8a] z-0"></div>
                    <div className="md:hidden absolute top-0 bottom-0 left-[2rem] w-[2px] bg-[#1e3a8a] z-0"></div>

                    <div className="flex flex-col md:grid md:grid-cols-3 gap-8 md:gap-12 relative z-10">
                        {steps.map((step, index) => (
                            <div key={index} className="flex flex-row md:flex-col items-start md:items-center text-left md:text-center w-full">
                                {/* Number Circle - Left on Mobile / Top Center on Desktop */}
                                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 rounded-full bg-[#00b03b] flex items-center justify-center text-white text-2xl md:text-3xl font-bold shadow-lg mr-4 md:mr-0 md:mb-8 border-4 border-[#f0f9ff] relative z-10">
                                    {step.number}
                                </div>

                                {/* Content Container Mobile */}
                                <div className="flex-1 bg-white md:bg-transparent p-5 md:p-0 rounded-2xl md:rounded-none shadow-sm md:shadow-none border md:border-none border-slate-100 relative top-[-10px] md:top-0">
                                    {/* Icon */}
                                    <div className="mb-2 md:mb-6">
                                        <step.icon className="w-8 h-8 md:w-12 md:h-12 text-[#00b03b]" strokeWidth={2} />
                                    </div>

                                    {/* Content */}
                                    <h3 className="text-lg md:text-2xl font-bold text-[#1e3a8a] mb-2 md:mb-4">
                                        {step.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed text-sm md:text-base">
                                        {step.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
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

export default ProcessSteps;
