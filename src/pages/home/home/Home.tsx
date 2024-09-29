import React from "react";
import Hero from "./Hero";
import FeaturedSection from "./FeaturedSection";
import HowItWorks from "./HowItWorks";
import Testimonial from "./Testimonial";
import WhyChooseUs from "./WhyChooseUs";

const Home = () => {
  return (
    <div>
      <Hero />
      <FeaturedSection />
      <WhyChooseUs />
      <HowItWorks />
      <Testimonial />
    </div>
  );
};

export default Home;
