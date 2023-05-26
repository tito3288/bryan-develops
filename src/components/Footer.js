import React from "react";
import { Link } from "react-router-dom";
import "../Style.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        position: "relative",
      }}
    >
      <div className="custom-shape-divider-top-1682990070">
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <div className="footer-content">
        <p className="footer-title">
          <span style={{ color: "white" }}>B</span>RYAN{" "}
          {/* <span style={{ color: "white" }}>A</span>RAMBULA{" "}
          <span style={{ color: "white" }}>W</span>EB{" "} */}
          <span style={{ color: "white" }}>D</span>EVELOPS{" "}
          <span style={{ color: "white" }}>©{currentYear}</span>
        </p>
        <Link
          to="/Contact"
          style={{
            marginLeft: "20px",
            display: "block",
            color: "white",
            textDecoration: "none",
            paddingBottom: "10px",
          }}
        >
          Contact
        </Link>
        <Link
          to="/Terms"
          style={{
            margin: "0",
            marginLeft: "20px",
            color: "white",
            textDecoration: "none",
            display: "block",
            paddingBottom: "5px",
          }}
        >
          Terms Of Service
        </Link>
        <Link
          to="https://www.facebook.com/profile.php?id=100093087544734&mibextid=LQQJ4d"
          style={{
            margin: "0",
            marginLeft: "20px",
            color: "white",
            textDecoration: "none",
            paddingTop: "10px",
          }}
        >
          <FacebookIcon />
        </Link>
        <Link
          to="https://www.linkedin.com/in/bryan-arambula-823a86191"
          style={{
            margin: "0",
            marginLeft: "0px",
            color: "white",
            textDecoration: "none",
            paddingTop: "10px",
          }}
        >
          <LinkedInIcon />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
