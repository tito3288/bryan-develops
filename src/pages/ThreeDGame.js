import React from "react";
import Spline from "@splinetool/react-spline";
import NavbarComp from "../components/NavbarComp";

const ThreeDGame = () => {
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    const img = new Image();
    img.src = "logo-gif.GIF";
  }, []);

  const handleLoad = () => {
    setLoading(false);
  };

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        textAlign: "center",
        backgroundColor: "black",
      }}
    >
      <NavbarComp />
      {loading && (
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
            }}
            src="logo-gif.GIF"
            alt="Loading..."
          />
        </div>
      )}
      <Spline
        scene="https://prod.spline.design/pDNsMOIDbK7eNJpO/scene.splinecode"
        onLoad={handleLoad}
      />
    </div>
  );
};

export default ThreeDGame;
