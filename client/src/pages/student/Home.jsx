import React from "react";
import Hero from "../../components/students/Hero";
import Companies from "../../components/students/Companies";
import CoursesSection from "../../components/students/CoursesSection";
import CallToAction from "../../components/students/CallToAction";
import TestimonialsSection from "../../components/students/TestimonialsSection";
import Footer from "../../components/students/Footer";
const Home = () => {
  return (
    <div className="flex flex-col items-center space-y-9 text-center">
      <Hero />
      <Companies />
      <CoursesSection />
      <TestimonialsSection />
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Home;
