import React from "react";
import "../Style.css";
import { Nav, Navbar, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComp = () => {
  const [show, setShow] = React.useState(true);
  const [scrollPos, setScrollPos] = React.useState(0);

  React.useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      const visible = currentScrollPos <= 0 || scrollPos > currentScrollPos;

      setScrollPos(currentScrollPos);
      setShow(visible);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrollPos, show]);

  return (
    <div style={{ backgroundColor: "black" }}>
      <Container>
        <Navbar
          expand="lg"
          className={`navbar ${show ? "" : "hidden"}`}
          style={{
            position: "fixed",
            opacity: "1",
            zIndex: "20",
            transition: "all 0.5s ease",
          }}
        >
          <Container>
            <Navbar.Brand
              href="/"
              className="navbar-brand"
              style={{
                margin: "0",
                borderRadius: "10px",
              }}
            >
              <img className="nav-image" src="logo192.png" />
              <h1 className="nav-bryan-title">B.A.W.D</h1>
            </Navbar.Brand>

            <Navbar.Toggle
              className="nav-toggle"
              aria-controls="basic-navbar-nav"
              style={{
                backgroundColor: "white",
                borderRadius: "10px",
              }}
            />
            <Navbar.Collapse
              id="basic-navbar-nav"
              style={{
                padding: "37px 20px",
                backgroundColor: "white",
                borderRadius: "10px",
                // marginTop: "20px",
              }}
            >
              <Nav className="justify-content-end flex-grow-1 pe-3">
                <Link
                  className="nav-link-custom"
                  style={{
                    color: "black",
                    fontFamily: "Raleway, sans-serif",
                  }}
                  to="/"
                >
                  Home
                </Link>
                <Link
                  className="nav-link-custom"
                  style={{ color: "black", fontFamily: "Raleway, sans-serif" }}
                  to="https://bryanarambula.com/"
                >
                  Portfolio
                </Link>
                {/* REACT LINK */}
                <Link
                  className="nav-link-custom"
                  style={{
                    color: "black",
                    fontFamily: "Raleway, sans-serif",
                  }}
                  to="/AboutMe"
                >
                  About
                </Link>
                <Link
                  className="nav-link-custom"
                  style={{ color: "black", fontFamily: "Raleway, sans-serif" }}
                  to="/ThreeDGame"
                >
                  3D Game
                </Link>
                {/* REACT LINK */}
                <Link
                  className="nav-link-custom"
                  style={{
                    color: "black",
                    fontFamily: "Raleway, sans-serif",
                  }}
                  to="/Contact"
                >
                  Contact
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </Container>
    </div>
  );
};

export default NavbarComp;
