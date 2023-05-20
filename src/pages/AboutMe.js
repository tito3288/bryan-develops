import React from "react";
import { Container } from "react-bootstrap";
import NavbarComp from "../components/NavbarComp";
import { motion } from "framer-motion";
import "../About.css";
import ScrollToTop from "../components/ScrollToTop";

const AboutMe = () => {
  return (
    <div
      style={{
        height: "100%",
        width: "100%",
        backgroundColor: "black",
        position: "relative",
      }}
    >
      <ScrollToTop />
      <NavbarComp />
      <div className="aboutMe-content">
        <Container>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="aboutMe-paragraph"
          >
            My journey as a front-end software developer began 2 years ago, I
            have a passion for UI Design and Tech. I'm always eager to learn and
            try new things, and I constantly seek out new knowledge and skills
            to bring my and now other peoples ideas to life. The process of
            taking a concept from the drawing board and turning it into a fully
            functional product excites me till this day! Don't hesitate to reach
            out, I would love to hear your ideas or even interchange some so we
            can bring your vision to life. Feel free to explore my portfolio if
            you would like to learn more about me!
          </motion.p>
        </Container>
      </div>
    </div>
  );
};

export default AboutMe;
