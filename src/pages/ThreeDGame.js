import React from "react";
import Spline from "@splinetool/react-spline";
import NavbarComp from "../components/NavbarComp";

const ThreeDGame = () => {
  const [loading, setLoading] = React.useState(true);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div style={{ width: "100%", height: "100vh", textAlign: "center" }}>
      <NavbarComp />
      {loading && <div style={{ margin: "50% auto" }}>Loading...</div>}
      <Spline
        scene="https://prod.spline.design/pDNsMOIDbK7eNJpO/scene.splinecode"
        onLoad={handleLoad}
      />
    </div>
  );
};

export default ThreeDGame;
