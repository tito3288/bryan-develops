import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { motion } from "framer-motion";

const Templates = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "black",
        position: "relative",
      }}
    >
      <div
        style={{ position: "relative" }}
        className="custom-shape-divider-top-1682969589"
      >
        <svg
          data-name="Layer 1"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
            className="shape-fill"
          ></path>
        </svg>
      </div>
      <Row
        style={{
          width: "100%",
          marginRight: "0",
          marginLeft: "0",
        }}
        lg={2}
        md={1}
        sm={1}
        xs={1}
      >
        <Col>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <img className="template-pic" src="layout-pic.PNG" alt="Layouts" />
          </motion.div>
        </Col>
        <Col>
          <Container className="template-container">
            <h1 className="template-title">Layouts & Themes</h1>
            <p className="template-paragraph">
              Stand out from the crowd with a custom website design tailored to
              your brand. Whether you're looking for a modern, minimalist layout
              or a vibrant, colorful theme, I'll work with you to bring your
              vision to life. From font choices to color palettes, every detail
              will be carefully crafted to reflect your brand and message.
              Responsive design is crucial for today's web users, I'll ensure
              that your website looks and functions great on any device, from
              desktops to smartphones. With a wide range of design tools and
              techniques, I have the flexibility to create a website that's
              uniquely yours.
            </p>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default Templates;
