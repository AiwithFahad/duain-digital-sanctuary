import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturedCollections from "@/components/FeaturedCollections";
import BestSellers from "@/components/BestSellers";
import PhilosophySection from "@/components/PhilosophySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturedCollections />
        <PhilosophySection />
        <BestSellers />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
