import "./styles.css";
import HeroSection from "./HeroSection";
import FeaturesSection from "./FeaturesSection";
import MedicalBillingSection from "./MedicalBillingSection";
import RevenueSection from "./RevenueSection";
import CTASection from "./CTASection";
import Footer from "./Footer";
import ChooseSection from "./ChooseSection";

function LandingPage() {
  return (
    <div className="LandingPage overflow-hidden antialiased bg-white font-sans text-gray-900">
      <main className="w-full">
        <HeroSection />
        <FeaturesSection />
        <MedicalBillingSection />
        <RevenueSection />
        <ChooseSection/>
        <CTASection />
        <Footer />
      </main>
    </div>
  );
}

export default LandingPage;