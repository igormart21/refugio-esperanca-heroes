import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import MonthlyGoal from "@/components/MonthlyGoal";
import ImpactStory from "@/components/ImpactStory";
import DonationImpact from "@/components/DonationImpact";
import DonateSection from "@/components/DonateSection";
import TransparencySection from "@/components/TransparencySection";
import TransformationStory from "@/components/TransformationStory";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <MonthlyGoal />
      <ImpactStory />
      <DonationImpact />
      <DonateSection />
      <TransparencySection />
      <TransformationStory />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default Index;
