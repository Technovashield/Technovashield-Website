import React from "react";
import HeroSection from "../components/HeroSection";
import TrustStrip from "../components/TrustStrip";
import FocusAreas from "../components/FocusAreas";
import WhyTechnovaShield from "../components/WhyTechnovaShield";
import FeaturedProjects from "../components/FeaturedProjects";
import ApproachSection from "../components/ApproachSection";
import HealthcareImpactSection from "../components/HealthcareImpactSection";
// import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <TrustStrip />
      <FocusAreas />
      <WhyTechnovaShield />
      <FeaturedProjects />
      <ApproachSection />
      <HealthcareImpactSection />
      {/* <Footer /> */}
    </div>
  );
};

export default HomePage;
