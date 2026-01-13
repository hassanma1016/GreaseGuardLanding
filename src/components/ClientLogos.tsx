
"use client";

import Image from "next/image";

const CLIENTS = [
    { name: "Burger King", logo: "/images/logos/burger-king.png" },
    { name: "McDonald's", logo: "/images/logos/mcdonalds.png" },
    { name: "WingStop", logo: "/images/logos/wingstop.svg" },
    { name: "Marriott", logo: "/images/logos/marriott.svg" },
    { name: "Jack in the Box", logo: "/images/logos/jack-in-the-box.svg" },
    { name: "Wendy's", logo: "/images/logos/wendys.svg" },
    { name: "Popeyes", logo: "/images/logos/popeyes.svg" },
];

const ClientLogos = () => {
    return (
        <section className="py-12 bg-white border-t border-slate-100">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="text-center text-sm font-bold text-slate-400 uppercase tracking-widest mb-8">
                    Trusted By Top Brands & Local Favorites
                </h2>

                <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
                    {CLIENTS.map((client) => (
                        <div
                            key={client.name}
                            className="relative h-12 w-24 md:h-16 md:w-32 grayscale opacity-60"
                        >
                            <Image
                                src={client.logo}
                                alt={`${client.name} Logo`}
                                fill
                                className="object-contain"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ClientLogos;
