import React from "react";
import HeroSection from "../components/HeroSection";
import FocusAreas from "../components/FocusAreas";
import FeaturedProjects from "../components/FeaturedProjects";
import Footer from "../components/Footer";

const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <FocusAreas />
      <FeaturedProjects />
      <Footer />
    </div>
  );
};

export default HomePage;
