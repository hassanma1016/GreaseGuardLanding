import Image from "next/image";

const projects = [
    {
        before: "/images/before-hood-matched.webp",
        after: "/images/after-hood-matched.webp",
        title: "Commercial Kitchen Hood",
        description: "Deep grease removal to bare metal"
    },
    {
        before: "/images/filter-cleaning.webp", // Using generic cleaning img if specific before/after not available
        after: "/images/hood-cleaning.webp",
        title: "Filter & Duct Cleaning",
        description: "Restoring airflow and efficiency"
    },
    {
        before: "/images/grease-trap.webp",
        after: "/images/deep-cleaning.webp",
        title: "Full System Deep Clean",
        description: "Complete sanitization from floor to ceiling"
    }
];

const Gallery = () => {
    return (
        <section id="gallery" className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <span className="text-green-600 font-bold tracking-wider uppercase text-sm mb-2 block">
                        Real Results
                    </span>
                    <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-6">
                        See The Difference
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        We don&apos;t just clean; we transform your kitchen. Check out our recent work ensuring safety and compliance across the DMV.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-slate-100 flex flex-col">
                            {/* Image Comparison Mockup (Side by Side or stacked) */}
                            <div className="relative h-64 w-full">
                                <Image
                                    src={project.after}
                                    alt={`After - ${project.title}`}
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded shadow-sm">
                                    AFTER
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-slate-900 mb-2">{project.title}</h3>
                                <p className="text-slate-600 text-sm mb-4">{project.description}</p>
                                <div className="flex items-center gap-2 text-green-600 text-sm font-semibold">
                                    <span>View Case Study</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3"></path></svg>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 text-center">
                    <a href="#contact" className="inline-block border-2 border-slate-900 text-slate-900 hover:bg-slate-900 hover:text-white px-8 py-3 rounded-full font-bold transition-colors">
                        View Full Portfolio
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
