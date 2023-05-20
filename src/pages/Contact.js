import React from "react";
import { Row, Col, Button, Container } from "react-bootstrap";
import "../Contact.css";
import Spline from "@splinetool/react-spline";
import NavbarComp from "../components/NavbarComp";
import { useForm, ValidationError } from "@formspree/react";
import ScrollToTop from "../components/ScrollToTop";

const Contact = () => {
  const [state, handleSubmit, reset] = useForm("mbjebzvw");
  const [showThanksMessage, setShowThanksMessage] = React.useState(false);

  const onSubmit = (data) => {
    handleSubmit(data);
    if (state.succeeded) {
      reset();
      setShowThanksMessage(true);
      setTimeout(() => {
        setShowThanksMessage(false);
      }, 4000); // set the time for 5 seconds
    }
  };

  React.useEffect(() => {
    if (state.succeeded) {
      setShowThanksMessage(true);
      setTimeout(() => {
        setShowThanksMessage(false);
      }, 4000); // set the time for 5 seconds
    }
  }, [state.succeeded]);

  // THIS CODE INDERNEATH DELETES ALL THE INPUTS AFTER A SUCCESSFUL SUBMISSION
  if (showThanksMessage) {
    return (
      <div
        style={{
          width: "100%",
          height: "100%",
          backgroundColor: "black",
          position: "relative",
          display: "flex",
        }}
      >
        <Container>
          <h1 className="thankyou-page">
            Thank you for your email. I'll get back to you as soon as possible!
          </h1>
        </Container>
      </div>
    );
  }

  return (
    <div style={{ height: "100%", width: "100%", backgroundColor: "black" }}>
      <ScrollToTop />
      <NavbarComp />
      <Row lg={2} md={1} sm={1} xs={1} style={{ width: "100%" }}>
        <Col>
          <Spline
            className="contact-spline"
            style={{ height: "900px" }}
            scene="https://prod.spline.design/L6k2RFfpjHR-O-Zg/scene.splinecode"
          />
        </Col>
        <Col>
          <form autoComplete="off" onSubmit={onSubmit} className="contact-form">
            <h1 className="contact-title">Contact</h1>
            <input
              id="name"
              type="text"
              name="name"
              autoComplete="nope"
              className="mb-1 contact-input"
              placeholder="Name"
            ></input>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="nope"
              className="mb-1 contact-input"
              placeholder="Email"
            ></input>
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
            />
            <input
              id="subject"
              type="text"
              name="subject"
              autoComplete="nope"
              className="mb-1 contact-input"
              placeholder="Subject"
            ></input>
            <textarea
              id="message"
              name="message"
              className="contact-textarea"
              placeholder="Enter Message"
            ></textarea>
            <ValidationError
              prefix="Message"
              field="message"
              errors={state.errors}
            />
            <div>
              <Button
                className="my-4"
                disabled={state.submitting}
                type="submit"
                style={{
                  backgroundColor: "transparent",
                  border: "solid gray",
                }}
              >
                Submit
              </Button>
            </div>
            <p className="contact-message">
              Email me for any questions <br /> or would like me to do a job for
              you! <br /> Se Habla Español.
            </p>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
