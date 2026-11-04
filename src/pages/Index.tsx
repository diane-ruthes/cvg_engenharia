import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Gallery from "@/components/Gallery";
import Clients from "@/components/Clients";
import BrazilMap from "@/components/BrazilMap";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";
import ContactButton from "@/components/ContactButton";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
      <Hero />
      <About />
      <Services />
      <Gallery />
      <Clients />
      <BrazilMap />
      <ContactForm />
      </main>
      <Footer />
      <ContactButton />
    </div>
  );
};

export default Index;
