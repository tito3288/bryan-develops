import React from "react";
import { Card, Row, Col } from "react-bootstrap";
import NavbarComp from "../components/NavbarComp";
import ScrollToTop from "../components/ScrollToTop";
import { motion } from "framer-motion";
import "../Template-Page.css";

const TemplatesPage = () => {
  return (
    <div className="template-page">
      <ScrollToTop />
      <NavbarComp />
      <div className="template-page-content">
        <h1>Designs</h1>
        <p>
          Here are a few examples of the many customized designs I can craft for
          your business.
        </p>
        <h3>Restaurant</h3>
        <hr className="template-divider" />

        <Row
          lg={2}
          md={2}
          sm={1}
          xs={1}
          style={{ width: "100%", margin: "0", paddingTop: "5%" }}
        >
          <Col className="py-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="template-page-card" style={{ margin: "0" }}>
                <img src="restaurant.png" alt="restaurant" />
              </Card>
            </motion.div>
          </Col>
          <Col className="py-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="template-page-card" style={{ margin: "0" }}>
                <img src="page-2.png" alt="restaurant" />
              </Card>
            </motion.div>
          </Col>
          <Col className="py-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="template-page-card" style={{ margin: "0" }}>
                <img src="page-3.png" alt="restaurant" />
              </Card>
            </motion.div>
          </Col>
          <Col className="py-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="template-page-card" style={{ margin: "0" }}>
                <img src="page-4.png" alt="restaurant" />
              </Card>
            </motion.div>
          </Col>
        </Row>
        <h2>Blog</h2>
        <hr className="template-divider-two" />

        <Row
          lg={3}
          md={2}
          sm={1}
          xs={1}
          style={{ width: "100%", margin: "0", paddingTop: "5%" }}
        >
          <Col className="py-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="template-page-card" style={{ margin: "0" }}>
                <img src="home.png" alt="blog" />
              </Card>
            </motion.div>
          </Col>
          <Col className="py-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="template-page-card" style={{ margin: "0" }}>
                <img src="Home-2.png" alt="blog" />
              </Card>
            </motion.div>
          </Col>
          <Col className="py-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="template-page-card" style={{ margin: "0" }}>
                <img src="best-article.png" alt="blog" />
              </Card>
            </motion.div>
          </Col>
          <Col className="py-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="template-page-card" style={{ margin: "0" }}>
                <img src="article.png" alt="blog" />
              </Card>
            </motion.div>
          </Col>
          <Col className="py-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="template-page-card" style={{ margin: "0" }}>
                <img src="article-detail.png" alt="blog" />
              </Card>
            </motion.div>
          </Col>
          <Col className="py-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="template-page-card" style={{ margin: "0" }}>
                <img src="subscribe.png" alt="blog" />
              </Card>
            </motion.div>
          </Col>
        </Row>
        <h2>Real Estate</h2>
        <hr className="template-divider-three" />

        <Row
          lg={3}
          md={2}
          sm={1}
          xs={1}
          style={{ width: "100%", margin: "0", paddingTop: "5%" }}
        >
          <Col className="py-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="template-page-card" style={{ margin: "0" }}>
                <img src="real-estate1.png" alt="real-estate" />
              </Card>
            </motion.div>
          </Col>
          <Col className="py-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="template-page-card" style={{ margin: "0" }}>
                <img src="real-estate2.png" alt="real-estate" />
              </Card>
            </motion.div>
          </Col>
          <Col className="py-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="template-page-card" style={{ margin: "0" }}>
                <img src="real-estate3.png" alt="real-estate" />
              </Card>
            </motion.div>
          </Col>
          <Col className="py-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="template-page-card" style={{ margin: "0" }}>
                <img src="real-estate4.png" alt="real-estate" />
              </Card>
            </motion.div>
          </Col>
          <Col className="py-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="template-page-card" style={{ margin: "0" }}>
                <img src="real-estate5.png" alt="real-estate" />
              </Card>
            </motion.div>
          </Col>
          <Col className="py-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="template-page-card" style={{ margin: "0" }}>
                <img src="real-estate6.png" alt="real-estate" />
              </Card>
            </motion.div>
          </Col>
        </Row>
        <h2>E-Commerce</h2>
        <hr className="template-divider-four" />

        <Row
          lg={3}
          md={2}
          sm={1}
          xs={1}
          style={{
            width: "100%",
            margin: "0",
            paddingBottom: "5%",
            paddingTop: "5%",
          }}
        >
          <Col className="py-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="template-page-card" style={{ margin: "0" }}>
                <img src="e-commerce.png" alt="e-commerce" />
              </Card>
            </motion.div>
          </Col>
          <Col className="py-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="template-page-card" style={{ margin: "0" }}>
                <img src="e-commerce2.png" alt="e-commerce" />
              </Card>
            </motion.div>
          </Col>
          <Col className="py-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="template-page-card" style={{ margin: "0" }}>
                <img src="e-commerce3.png" alt="e-commerce" />
              </Card>
            </motion.div>
          </Col>
          <Col className="py-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="template-page-card" style={{ margin: "0" }}>
                <img src="e-commerce4.png" alt="e-commerce" />
              </Card>
            </motion.div>
          </Col>
          <Col className="py-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="template-page-card" style={{ margin: "0" }}>
                <img src="e-commerce5.png" alt="e-commerce" />
              </Card>
            </motion.div>
          </Col>
          <Col className="py-3">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <Card className="template-page-card" style={{ margin: "0" }}>
                <img src="e-commerce6.png" alt="e-commerce" />
              </Card>
            </motion.div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default TemplatesPage;
