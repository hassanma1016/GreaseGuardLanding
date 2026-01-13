import Link from "next/link";

import { ShieldCheck, Facebook, Twitter, Instagram, Linkedin, Check, CheckCircle } from "lucide-react";

// Custom SVG Shield Component to match the exact reference shape (Duplicate from Hero.tsx for consistency)
const ShieldBadge = ({ title, sub, icon, colorHex }: { title: string; sub: string; icon: React.ReactNode; colorHex: string }) => (
    <div className="relative w-20 h-24 flex flex-col items-center justify-center text-center z-10 drop-shadow-xl transition-transform hover:scale-105">
        {/* The Badge Shape - SVG Background */}
        <div className="absolute inset-0 z-0">
            <svg viewBox="0 0 100 120" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M10 25 H30 Q30 8 40 8 H60 Q70 8 70 25 H90 Q100 25 100 35 V80 Q100 115 50 115 Q0 115 0 80 V35 Q0 25 10 25 Z"
                    fill="white"
                    stroke={colorHex}
                    strokeWidth="5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                />
            </svg>
        </div>

        {/* Badge Content */}
        <div className="relative z-10 flex flex-col items-center gap-1 pt-3">
            <div style={{ color: colorHex }}>{icon}</div>
            <div className="flex flex-col">
                <span className="font-extrabold text-[#111] text-[10px] uppercase leading-none tracking-tight" style={{ color: colorHex }}>
                    {title}
                </span>
                <span className="font-bold text-slate-500 text-[8px] uppercase tracking-tighter leading-tight mt-0.5">
                    {sub}
                </span>
            </div>
        </div>
    </div>
);

const Footer = () => {
    return (
        <footer className="bg-slate-900 text-white pt-16 pb-8 border-t border-slate-800">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-4 gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center gap-2 mb-4">
                            <ShieldCheck className="h-8 w-8 text-green-500" />
                            <span className="text-2xl font-bold">
                                Grease<span className="text-green-500">Guard</span>
                            </span>
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6">
                            The DMV&apos;s trusted partner for commercial kitchen exhaust cleaning and fire safety compliance in Washington DC, Northern VA, and Maryland.
                        </p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Facebook className="h-5 w-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Twitter className="h-5 w-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Instagram className="h-5 w-5" /></a>
                            <a href="#" className="text-slate-400 hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></a>
                        </div>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Contact Us</h4>
                        <ul className="space-y-3 text-slate-400 text-sm">
                            <li>Service Area:<br />Washington DC, Arlington, Alexandria, Silver Spring, Bethesda, Rockville, Fairfax, Loudoun</li>
                            <li><a href="tel:301-974-7182" className="hover:text-green-400 text-lg font-bold text-white">301-974-7182</a></li>
                            <li><a href="mailto:info@greaseguard.com" className="hover:text-green-400">info@greaseguard.com</a></li>
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Quick Links</h4>
                        <ul className="space-y-3 text-slate-400 text-sm">
                            <li><Link href="#services" className="hover:text-green-400">Services</Link></li>
                            <li><Link href="#process" className="hover:text-green-400">Our Process</Link></li>
                            <li><Link href="#testimonials" className="hover:text-green-400">Testimonials</Link></li>
                            <li><Link href="#faq" className="hover:text-green-400">FAQ</Link></li>
                        </ul>
                    </div>

                    {/* Certifications Badge Placeholder */}
                    <div>
                        <h4 className="font-bold text-lg mb-4">Certifications</h4>
                        <div className="flex flex-wrap gap-4">
                            <ShieldBadge
                                title="USAKES"
                                sub="CERTIFIED"
                                colorHex="#1e3a8a" // Dark Blue
                                icon={<Check className="w-6 h-6" strokeWidth={5} />}
                            />
                            <ShieldBadge
                                title="NFPA 96"
                                sub="COMPLIANT"
                                colorHex="#b91c1c" // Red
                                icon={
                                    <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 2C8 5 6 8 6 8s-3 3-3 7 3.5 7 9 7 9-7 9-7-2.5-12-9-12z" />
                                    </svg>
                                }
                            />
                            <ShieldBadge
                                title="OSHA"
                                sub="TRAINED"
                                colorHex="#d97706" // Gold/Amber
                                icon={
                                    // Warning Triangle
                                    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                                        <line x1="12" y1="9" x2="12" y2="13"></line>
                                        <line x1="12" y1="17" x2="12.01" y2="17"></line>
                                    </svg>
                                }
                            />
                            <ShieldBadge
                                title="ISO"
                                sub="CERTIFIED"
                                colorHex="#2563eb" // Bright Blue
                                icon={<CheckCircle className="w-6 h-6" strokeWidth={3} />}
                            />
                        </div>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
                    <p>© {new Date().getFullYear()} GreaseGuard. All rights reserved.</p>
                    <div className="flex space-x-6 mt-4 md:mt-0">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
