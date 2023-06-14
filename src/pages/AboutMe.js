import React from "react";
import { Container } from "react-bootstrap";
import NavbarComp from "../components/NavbarComp";
import { motion } from "framer-motion";
import "../About.css";
import ScrollToTop from "../components/ScrollToTop";
import ScrollBottomTop from "../components/ScrollBottomTop";

const AboutMe = () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000); // 10 seconds delay

    return () => clearTimeout(timer); // cleanup timer on component unmount
  }, []);
  return (
    <div className="aboutMe-background">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.7 }}
        transition={{ duration: 1.5 }}
        className="aboutMe-background2"
      ></motion.div>
      <ScrollBottomTop />
      <NavbarComp />
      {/* {isLoading && (
        //MOVE THESE STYLES INTO A CSS FILE
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <img
            style={{
              width: "100px",
              zIndex: "1",
            }}
            src="logo-gif.GIF"
            alt="Loading..."
          />
        </div>
      )} */}
      {/* <div className="centered-content"> */}
      <Container
        className="aboutMe-cont"
        style={{ color: "white", textAlign: "center" }}
      >
        <motion.p
          className="aboutMe-par"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
        >
          My journey as a software developer began 2 years ago, I have a passion
          for programming and UI Design. I'm always eager to learn and try new
          things, and I constantly seek out new knowledge and skills to bring my
          and now other peoples ideas to life. The process of taking a concept
          from the drawing board and turning it into a fully functional product
          excites me till this day! Don't hesitate to reach out, I would love to
          hear your ideas or even interchange some so we can bring your vision
          to life. Feel free to explore my portfolio if you would like to learn
          more about me! <br /> 👇
        </motion.p>
        <motion.a
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 2 }}
          viewport={{ once: true }}
          href="https://bryanarambula.com"
        >
          <button className="button-shaking">Portfolio</button>
        </motion.a>
      </Container>
      {/* </div> */}
    </div>
  );
};

export default AboutMe;
