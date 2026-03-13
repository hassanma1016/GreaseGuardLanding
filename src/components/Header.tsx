"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, ShieldCheck, Phone } from "lucide-react";

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-slate-900 text-white sticky top-0 z-50 shadow-md">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2">
                        <ShieldCheck className="h-8 w-8 text-green-500" />
                        <Link href="/" className="text-2xl font-bold tracking-tight">
                            Grease<span className="text-green-500">Guard</span>
                        </Link>
                    </div>

                    {/* Desktop Nav */}
                    <nav className="hidden md:flex space-x-6 items-center">
                        <Link href="#services" className="hover:text-green-400 transition-colors">
                            Services
                        </Link>
                        <Link href="#process" className="hover:text-green-400 transition-colors">
                            Process
                        </Link>
                        <Link href="#testimonials" className="hover:text-green-400 transition-colors">
                            Reviews
                        </Link>
                    </nav>

                    {/* CTA & Phone */}
                    <div className="hidden md:flex items-center gap-4">
                        <div className="flex flex-col items-end mr-2">
                            <span className="text-xs text-green-400 font-bold tracking-wider uppercase">24/7 Emergency Service</span>
                            <a href="tel:682-900-8855" className="flex items-center gap-2 font-black text-2xl hover:text-green-400 transition-colors">
                                <Phone className="h-6 w-6 text-green-500 fill-green-500" />
                                (682) 900-8855
                            </a>
                        </div>

                    </div>

                    {/* Mobile Menu Button & Sticky Phone */}
                    <div className="md:hidden flex items-center gap-3">
                        <a href="tel:682-900-8855" className="flex items-center gap-2 bg-green-600 hover:bg-green-700 text-white px-3 py-2 rounded-full font-bold shadow-lg animate-pulse text-sm">
                            <Phone className="h-4 w-4 fill-current" />
                            <span>(682) 900-8855</span>
                        </a>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-gray-300 hover:text-white focus:outline-none"
                        >
                            {isOpen ? <X className="h-7 w-7" /> : <Menu className="h-7 w-7" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <div className="md:hidden bg-slate-800 border-t border-slate-700">
                    <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                        <Link
                            href="#services"
                            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 hover:text-green-400"
                            onClick={() => setIsOpen(false)}
                        >
                            Services
                        </Link>
                        <Link
                            href="#process"
                            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 hover:text-green-400"
                            onClick={() => setIsOpen(false)}
                        >
                            Our Process
                        </Link>
                        <Link
                            href="#why-us"
                            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 hover:text-green-400"
                            onClick={() => setIsOpen(false)}
                        >
                            Why Us
                        </Link>
                        <Link
                            href="#testimonials"
                            className="block px-3 py-2 rounded-md text-base font-medium hover:bg-slate-700 hover:text-green-400"
                            onClick={() => setIsOpen(false)}
                        >
                            Testimonials
                        </Link>
                        <a
                            href="tel:682-900-8855"
                            className="block w-full text-center mt-4 bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-full font-bold shadow-lg flex items-center justify-center gap-2"
                        >
                            <Phone className="inline w-5 h-5" />
                            (682) 900-8855
                        </a>

                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;
