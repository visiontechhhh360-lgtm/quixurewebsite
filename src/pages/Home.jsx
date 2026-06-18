import Hero from "../components/Hero";
import PrivacySection from "../components/PrivacySection";
import FeaturesGrid from "../components/FeaturesGrid";
import CoreFeatures from "../components/CoreFeatures";
import ComparisonSection from "../components/ComparisonSection";
import GlobalNetwork from "../components/GlobalNetwork";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Hero />
      <PrivacySection />
      <FeaturesGrid />
      <CoreFeatures />
      <ComparisonSection />
      <GlobalNetwork />
      <Footer />
    </>
  );
}
