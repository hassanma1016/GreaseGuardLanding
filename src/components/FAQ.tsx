"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp, Phone } from "lucide-react";

const faqs = [
    {
        question: "How often should restaurant hoods be cleaned?",
        answer: "The frequency depends on your cooking volume and type. Most restaurants require cleaning every 1-3 months to maintain NFPA 96 compliance. We'll help determine the optimal schedule for your needs."
    },
    {
        question: "Why is regular hood cleaning important?",
        answer: "Regular hood cleaning is critical for fire safety, maintaining proper airflow, and remaining compliant with health and fire codes. It prevents dangerous grease buildup that can lead to catastrophic kitchen fires and helps your exhaust system run efficiently."
    },
    {
        question: "Do you provide documentation for compliance?",
        answer: "Yes, absolutely. After every service, we provide comprehensive documentation including before-and-after photos and a certificate of performance. This satisfies requirements for insurance companies, fire marshals, and health inspectors."
    },
    {
        question: "What areas do you service?",
        answer: "We proudly serve the entire Dallas-Fort Worth (DFW) metroplex, including Dallas, Fort Worth, Arlington, Plano, Irving, Garland, Frisco, McKinney, and surrounding areas."
    },
    {
        question: "How long does a typical hood cleaning take?",
        answer: "A standard cleaning typically takes between 3 to 5 hours, depending on the system's size and condition. We schedule services 24/7 to ensure zero disruption to your restaurant's operating hours."
    }
];

const FAQ = () => {
    // Default open index to 0 to match the screenshot showing the first item open
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    }

    return (
        <section id="faq" className="py-20 bg-[#f0f9ff]">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-extrabold text-[#1e3a8a]">
                        Frequently Asked Questions
                    </h2>
                </div>

                <div className="space-y-4 mb-12">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-sm border border-slate-100 overflow-hidden">
                            <button
                                onClick={() => toggleFAQ(index)}
                                className="w-full flex justify-between items-center p-6 text-left focus:outline-none hover:bg-slate-50 transition-colors"
                            >
                                <span className="text-lg md:text-xl font-bold text-[#1e3a8a]">{faq.question}</span>
                                {openIndex === index ? (
                                    <ChevronUp className="h-6 w-6 text-[#1e3a8a]" />
                                ) : (
                                    <ChevronDown className="h-6 w-6 text-[#1e3a8a]" />
                                )}
                            </button>
                            {openIndex === index && (
                                <div className="px-6 pb-6 text-slate-600 leading-relaxed text-base md:text-lg">
                                    {faq.answer}
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Bottom CTA Button */}
                <div className="flex justify-center">
                    <a
                        href="tel:682-900-8855"
                        className="bg-[#00b03b] hover:bg-[#009b34] text-white text-xl font-bold px-10 py-4 rounded-md shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 inline-flex items-center gap-2"
                    >
                        <Phone className="w-6 h-6" /> (682) 900-8855
                    </a>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
