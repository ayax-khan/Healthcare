// filename: LandingPage.jsx
import "./styles.css";
import HeroSection from './HeroSection';
import FeaturesSection from './FeaturesSection';
import MedicalBillingSection from './MedicalBillingSection';
import RevenueSection from './RevenueSection';
import ChooseSection from './ChooseSection';
import SolutionsSection from './Solutions';
import WorkflowsSection from './Workflows';
import Footer from './Footer';
import React from 'react';
import QuestionsAndAnswers from "./Questions_Answers";

function LandingPage() {
  return (
    <div className="LandingPage overflow-hidden antialiased bg-white font-sans text-gray-900">
      <main className="w-full">
        <HeroSection />
        <FeaturesSection />
        <MedicalBillingSection />
        <RevenueSection />
        <ChooseSection />
        <SolutionsSection />
        <WorkflowsSection />
        <QuestionsAndAnswers/>
        {/* <CTASection /> */}
        <Footer />
      </main>
    </div>
  );
}

export default LandingPage;