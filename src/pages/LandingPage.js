import React from "react";
import "../Style.css";
import NavbarComp from "../components/NavbarComp";
import WhyMeComp from "../components/WhyMeComp";
import Templates from "../components/Templates";
import LandingComp from "../components/LandingComp";
import ThreeDComp from "../components/ThreeDComp";
import Footer from "../components/Footer";
import ScrollToTop from "../components/ScrollToTop";

const LandingPage = () => {
  return (
    <div>
      <ScrollToTop />
      <NavbarComp />
      <LandingComp />
      <WhyMeComp />
      <Templates />
      <ThreeDComp />
      <Footer />
    </div>
  );
};

export default LandingPage;
