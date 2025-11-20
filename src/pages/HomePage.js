import React from "react";
import HeroSection from "../components/HeroSection";
import FocusAreas from "../components/FocusAreas";
import FeaturedProjects from "../components/FeaturedProjects";
import HealthcareImpactSection from "../components/HealthcareImpactSection";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FocusAreas />
      <FeaturedProjects />
      <HealthcareImpactSection />
      <Footer />
    </div>
  );
};

export default HomePage;
