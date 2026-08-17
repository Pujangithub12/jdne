import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Hero from "./sections/Hero";
import Services from "./sections/Services";
import Biomass from "./pages/Biomass";
import BiomassSection from "./sections/BiomassSection";
import Solar from "./pages/Solar";
import HowWeWork from "./sections/HowWeWork";
import About from "./pages/About";
import Gallery from "./sections/Gallery";
import Pricing from "./sections/Pricing";
import Testimonials from "./sections/Testimonials";
import PolicyBanners from "./sections/PolicyBanners";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Projects from "./pages/Projects";
import ProjectDetails from "./pages/ProjectDetails";
import ServiceSection from "./sections/ServiceSection";
import SolarSection from "./sections/SolarSection";
import Seo from "./components/Seo";

// Home Page Component
const Home = () => (
  <>
    <Seo
      title="Janda Devi Nepal Energy (JDNE) | Solar, Biomass & Hydropower in Nepal"
      description="Janda Devi Nepal Energy (JDNE) is a leading renewable energy company in Nepal delivering solar rooftop, biomass, and hydropower transmission projects for homes, industries, and institutions."
      path="/"
    />
    <Hero />
    <ServiceSection />
    <BiomassSection />
    <SolarSection />
    <HowWeWork />
    <Gallery />
    <Testimonials />
    <PolicyBanners />
  </>
);

function App() {
  return (
    <div className="min-h-screen bg-white selection:bg-green-100 selection:text-green-900 flex flex-col">
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/biomass" element={<Biomass />} />
          <Route path="/solar" element={<Solar />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/projects/:id" element={<ProjectDetails />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/pricing" element={<Pricing />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
