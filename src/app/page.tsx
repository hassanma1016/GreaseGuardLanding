import Header from "@/components/Header";
import Hero from "@/components/Hero";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import ProcessSteps from "@/components/ProcessSteps";
import Services from "@/components/Services";
import CTA from "@/components/CTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <ProcessSteps />
        <Testimonials />
        <CTA />
        <FAQ />
      </main>
      <Footer />

    </div>
  );
}
