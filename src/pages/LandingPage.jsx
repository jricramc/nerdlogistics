import BeyondSavingsSection from '../components/landing/BeyondSavingsSection';
import FinalCTASection from '../components/landing/FinalCTASection';
import Footer from '../components/landing/Footer';
import Header from '../components/landing/Header';
import HeroSection from '../components/landing/HeroSection';
import HowItWorksSection from '../components/landing/HowItWorksSection';
import SpeedFlexibilitySection from '../components/landing/SpeedFlexibilitySection';
import StatsCountUpSection from '../components/landing/StatsCountUpSection';
import TestimonialsSection from '../components/landing/TestimonialsSection';

export default function LandingPage() {
  return (
    <div className="w-full min-h-screen bg-white overflow-x-hidden">
      <Header />
      <main className="overflow-x-hidden">
        <HeroSection />
        <div id="how-it-works">
          <HowItWorksSection />
        </div>
        <div id="features">
          <SpeedFlexibilitySection />
          <BeyondSavingsSection />
        </div>
        <div id="get-started">
          <StatsCountUpSection />
        </div>
        <div id="testimonials">
          <TestimonialsSection />
        </div>
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
