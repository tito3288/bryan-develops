import React from "react";
import { Col, Row, Container, Card } from "react-bootstrap";
import { motion } from "framer-motion";
import Spline from "@splinetool/react-spline";

const ThreeDComp = () => {
  return (
    <div
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#dddcdb",
        position: "relative",
        opacity: "1",
        backgroundImage:
          "repeating-radial-gradient( circle at 0 0, transparent 0, #ffffff 33px ), repeating-linear-gradient( #dddcdb, #dddcdb )",
      }}
    >
      <div
        style={{ position: "relative" }}
        className="custom-shape-divider-top-1682969709"
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
      <div className="threeD-container">
        <Container>
          <div className="threeD-text">
            <h1>
              Are you intrigued by the idea of incorporating 3D components into
              your website?
            </h1>
            <h5>I can help with that!</h5>
            <h6>
              Here's a glimpse of the variety of components, shapes, and
              interactive elements I can tailor specifically to your needs.
            </h6>
          </div>
        </Container>
      </div>

      <div className="threeD-row-div">
        <Row lg={3} md={1} sm={1} xs={1} className="threeD-row">
          <Col>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card
                className="threeD-col"
                style={{
                  backdropFilter: "blur(4px)",
                  backgroundColor: "transparent",
                  borderRadius: "20px",
                  borderTop: "3px solid rgb(255,255,255, 0.5)",
                  borderLeft: "3px solid rgb(255,255,255, 0.5)",
                }}
              >
                <Spline
                  className="threeD-spline"
                  style={{ height: "350px" }}
                  scene="https://prod.spline.design/cPBY6sRUpeDuDAWz/scene.splinecode"
                />
                <Card.Body>
                  <Card.Title className="card-title">
                    <h1>Shapes</h1>
                  </Card.Title>
                  <hr className="card-divider" />
                  <Card.Text className="card-text">
                    Take your website to the next level with custom 3D shapes
                    designed just for you. From simple geometric figures to
                    complex organic forms, I can create any shape you need to
                    make your website stand out.
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <Card
                className="threeD-col"
                style={{
                  backdropFilter: "blur(4px)",
                  backgroundColor: "transparent",
                  borderRadius: "20px",
                  borderTop: "3px solid rgb(255,255,255, 0.5)",
                  borderLeft: "3px solid rgb(255,255,255, 0.5)",
                }}
              >
                <Spline
                  className="threeD-spline"
                  style={{ height: "350px" }}
                  scene="https://prod.spline.design/kTZTN4SgV5zLJ4Pe/scene.splinecode"
                />
                <Card.Body>
                  <Card.Title className="card-title">
                    <h1>Products</h1>
                  </Card.Title>
                  <hr className="card-divider-two" />

                  <Card.Text className="card-text">
                    Want to showcase your products in a more appealing way? Add
                    a new dimension to your website and let your products stand
                    out in a way they never have before.
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
          <Col>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7 }}
              viewport={{ once: true }}
            >
              <Card
                className="threeD-col"
                style={{
                  backdropFilter: "blur(4px)",
                  backgroundColor: "transparent",
                  borderRadius: "20px",
                  borderTop: "3px solid rgb(255,255,255, 0.5)",
                  borderLeft: "3px solid rgb(255,255,255, 0.5)",
                }}
              >
                <Spline
                  className="threeD-spline"
                  style={{ height: "350px" }}
                  scene="https://prod.spline.design/d7f4gtkr4f83RKRt/scene.splinecode"
                />

                <Card.Body>
                  <Card.Title className="card-title">
                    <h1>Animations</h1>
                  </Card.Title>
                  <hr className="card-divider-three" />

                  <Card.Text className="card-text">
                    Whether you're looking for a subtle animation or a
                    full-blown kinetic sculpture, I can create 3D shapes that
                    move and respond to user input in a variety of ways. From
                    smooth transitions to complex physics.
                  </Card.Text>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default ThreeDComp;
