import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import WhyChooseUs from "./components/WhyChooseUs";
import Services from "./components/Services";
import BeforeAfter from "./components/BeforeAfter";
import Gallery from "./components/Gallery";
import Testimonials from "./components/Testimonials";
import FAQ from "./components/FAQ";
import Map from "./components/Map";
import CTA from "./components/CTA";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="bg-white overflow-x-hidden">
      <Navbar />

      <main>
        <Hero />
        <WhyChooseUs />
        <Services />
        <BeforeAfter />
        <Gallery />
        <Testimonials />
        <FAQ />
        <Map />
        <CTA />
        <ContactForm />
      </main>

      <Footer />
      <WhatsAppButton />
    </div>
  );
}