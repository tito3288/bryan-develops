import React from "react";
import "../Style.css";
import { Container } from "react-bootstrap";
import Spline from "@splinetool/react-spline";

const LandingComp = () => {
  return (
    <div style={{ position: "relative", backgroundColor: "black" }}>
      <Container>
        <h1 className="landing-title" style={{ position: "absolute" }}>
          "Designing{" "}
          <span style={{ color: "#F0EEED" }}>
            stunning front-end interfaces
          </span>{" "}
          that captivate your audience."
        </h1>
      </Container>
      <div className="landing-threeD">
        <Spline scene="https://prod.spline.design/yVNrdrtsDaSBOGvd/scene.splinecode" />
      </div>
    </div>
  );
};

export default LandingComp;
