import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { motion } from "framer-motion";
import "../Style.css";

const WhyMeComp = () => {
  return (
    <div className="whyMe-background">
      <div className="whyMe-background2"></div>

      <Row
        style={{
          width: "100%",
          height: "100%",
          marginRight: "0",
          marginLeft: "0",
        }}
        lg={2}
        md={1}
        sm={1}
        xs={1}
      >
        <Col>
          <Container>
            <motion.div
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              <h1 className="whyMe-title">
                Looking to refresh <br /> your online presence?
              </h1>
              <p className="whyMe-paragraph">
                I offer both website updates and <br /> brand new custom-built
                websites.
              </p>
            </motion.div>
          </Container>
        </Col>
        <Col>
          <Container>
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              viewport={{ once: true }}
              className="whyMe-title2"
            >
              Contact me for a <br />
              Free Consultation!
            </motion.h1>
            <motion.p
              // initial={{ opacity: 0, x: 10 }}
              // whileInView={{ opacity: 1, x: 0 }}
              // transition={{ duration: 0.8 }}
              // viewport={{ once: true }}
              className="whyMe-paragraph2"
            >
              With a focus on clean design and user experience, I can transform
              your online presence and help you reach your goals. If you have an
              existing website that needs a fresh look or updated functionality,
              I can work with you to revamp it and make it shine. Or, if you're
              starting from scratch, I can build you a website from the ground
              up that's tailored to your unique needs and vision. From
              e-commerce to blogs to portfolio sites, I have the expertise to
              create a website that represents your brand and engages your
              audience. With a commitment to quality, communication, and
              collaboration, I'm here to help you take your online presence to
              the next level.
            </motion.p>
          </Container>
        </Col>
      </Row>
    </div>
  );
};

export default WhyMeComp;
