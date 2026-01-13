import Image from "next/image";
import { MapPin, Check, CheckCircle, Phone } from "lucide-react";

// Custom SVG Shield Component to match the exact reference shape
const ShieldBadge = ({ title, sub, icon, colorHex }: { title: string; sub: string; icon: React.ReactNode; colorHex: string }) => (
    <div className="relative w-24 h-28 sm:w-28 sm:h-32 flex flex-col items-center justify-center text-center z-10 drop-shadow-xl transition-transform hover:scale-105">
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
        <div className="relative z-10 flex flex-col items-center gap-1.5 pt-4">
            <div style={{ color: colorHex }}>{icon}</div>
            <div className="flex flex-col">
                <span className="font-extrabold text-[#111] text-xs sm:text-sm uppercase leading-none tracking-tight" style={{ color: colorHex }}>
                    {title}
                </span>
                <span className="font-bold text-slate-500 text-[9px] sm:text-[10px] uppercase tracking-tighter leading-tight mt-0.5">
                    {sub}
                </span>
            </div>
        </div>
    </div>
);

const Hero = () => {
    return (
        <section className="relative min-h-[85vh] md:min-h-[90vh] flex items-start md:items-center pt-28 md:pt-24 pb-20 md:pb-32 overflow-hidden bg-slate-900">
            {/* Background Image with Dark Overlay */}
            <div className="absolute inset-0 z-0">
                <Image
                    src="/images/hood-cleaning.webp" /* Using generic name */
                    alt="Hood Cleaning Action"
                    fill
                    className="object-cover object-center"
                    priority
                />
                <div className="absolute inset-0 bg-slate-900/85 mix-blend-multiply"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent"></div>
            </div>

            {/* Main Content Container - Increased padding for mobile */}
            <div className="container mx-auto px-8 sm:px-6 lg:px-8 relative z-10">
                <div className="max-w-3xl flex flex-col items-start text-left">

                    {/* Five Star Reviews Header - Left Aligned on mobile */}
                    {/* Glassmorphic Google Reviews Badge - Left Aligned */}
                    <div className="inline-flex items-center gap-3 mb-8 animate-fade-in-up justify-start bg-white/10 backdrop-blur-md border border-white/10 rounded-full pl-1 pr-5 py-1 shadow-lg">
                        {/* Google G Logo */}
                        <div className="bg-white rounded-full p-1.5 w-8 h-8 flex items-center justify-center shadow-sm">
                            <svg className="w-full h-full" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                        </div>

                        {/* Text & Stars */}
                        <div className="flex flex-col items-start gap-0.5">
                            <div className="flex text-[#FFD700] gap-0.5">
                                {[...Array(5)].map((_, i) => (
                                    <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                                        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                                    </svg>
                                ))}
                            </div>
                            <span className="text-white text-[10px] font-bold uppercase tracking-wider opacity-90 leading-none">
                                120+ 5-Star Reviews
                            </span>
                        </div>
                    </div>

                    {/* Headline - Centered on mobile */}
                    <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold text-white leading-tight mb-6 animate-fade-in-up delay-100">
                        #1 Top-Rated Hood <br />
                        <span className="relative inline-block">
                            Cleaning Service!
                            {/* Green Swoosh */}
                            <svg className="absolute w-full h-4 -bottom-2 left-0 text-[#00b03b]" viewBox="0 0 200 9" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2.00025 7.00002C55.0327 2.13335 142.5 -2.49999 198 4.00002" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                            </svg>
                        </span>
                    </h1>

                    {/* Subhead - Left Aligned on mobile */}
                    <div className="mb-10 text-slate-100 text-lg sm:text-xl leading-relaxed max-w-2xl animate-fade-in-up delay-200 font-light">
                        <p className="mb-4">
                            Protect your business from fire hazards, health violations, and downtime.
                        </p>
                        <p>
                            GreaseGuard ensures NFPA 96 compliance, safety, and spotless results every time. Book your cleaning expert before your next inspection!
                        </p>
                    </div>

                    {/* CTA Button & Location - Stacked vertically on mobile, Row on desktop */}
                    <div className="flex flex-col items-start sm:flex-row sm:items-center gap-6 mb-12 animate-fade-in-up delay-300 w-full sm:w-auto">
                        {/* Button - Top on Mobile, Left on Desktop */}
                        <a
                            href="tel:301-974-7182"
                            className="bg-[#00b03b] hover:bg-[#009b34] text-white text-lg sm:text-xl font-bold px-8 py-4 rounded-lg shadow-lg hover:shadow-green-500/40 transition-all transform hover:-translate-y-1 block text-center w-full sm:w-auto inline-flex items-center justify-center gap-2"
                        >
                            <Phone className="w-5 h-5" /> 301-974-7182
                        </a>

                        {/* Location - Bottom on Mobile, Right on Desktop */}
                        <div className="flex items-center gap-2 text-white font-medium mb-2 sm:mb-0">
                            <MapPin className="w-6 h-6" />
                            <span>DC, MD and VA</span>
                        </div>
                    </div>

                    {/* Trust Badges Row - Custom Scalable Grid - Left Aligned on mobile */}
                    <div className="flex flex-wrap gap-4 sm:gap-6 mb-10 animate-fade-in-up delay-400 justify-start">
                        <ShieldBadge
                            title="USAKES"
                            sub="CERTIFIED"
                            colorHex="#1e3a8a" // Dark Blue
                            icon={<Check className="w-8 h-8" strokeWidth={5} />}
                        />
                        <ShieldBadge
                            title="NFPA 96"
                            sub="COMPLIANT"
                            colorHex="#b91c1c" // Red
                            icon={
                                <svg className="w-8 h-8 fill-current" viewBox="0 0 24 24">
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
                                <svg className="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
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
                            icon={<CheckCircle className="w-8 h-8" strokeWidth={3} />}
                        />
                    </div>

                    {/* Checkmarks - Left Aligned on mobile */}
                    <div className="flex flex-col gap-3 animate-fade-in-up delay-500 items-start">
                        <div className="flex items-center gap-3 text-white font-bold text-lg">
                            <span className="bg-white rounded-full p-0.5"><CheckCircle className="w-5 h-5 text-slate-900" /></span>
                            Flexible scheduling to fit your hours
                        </div>
                        <div className="flex items-center gap-3 text-white font-bold text-lg">
                            <span className="bg-white rounded-full p-0.5"><CheckCircle className="w-5 h-5 text-slate-900" /></span>
                            Certified & Insured Technicians
                        </div>
                    </div>

                </div>
            </div>

            {/* Bottom Curved Wave Transition */}
            <div className="absolute bottom-0 left-0 w-full leading-none z-20">
                <svg className="relative block w-full h-[50px] md:h-[80px]" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-white opacity-20"></path>
                    <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" className="fill-white"></path>
                </svg>
            </div>
        </section>
    );
};

export default Hero;
