import OurWorks from "./components/OurWorks";
import StatusCard from "./components/StatusCard";
import AboutUs from "./components/AboutUs";
import OurServices from "./components/OurServices";
import ContactUs from "./components/ContactUs";
import Footer from "./components/Footer";
import Hero from "./components/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-white scroll-smooth">
      <Hero />
      <StatusCard />
      <AboutUs />
      <OurWorks />
      <OurServices />
      <ContactUs />
      <Footer />
    </main>
  );
}