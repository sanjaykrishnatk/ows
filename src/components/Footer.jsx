import React from "react";
import { Row, Col } from "react-bootstrap";
import { primaryColor } from "../color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLinkedin,
  faInstagram,
  faYoutube,
  faXTwitter,
  faFacebook,
} from "@fortawesome/free-brands-svg-icons";
function Footer() {
  const isMobile = window.matchMedia("(max-width:768px)").matches;
  return (
    <div style={{ backgroundColor: "#333333" }}>
      <Row className="mx-0 w-100 pt-5 d-flex justify-content-evenly pb-4">
        <Col
          md={4}
          sm={12}
          style={{ color: "#F5F5F5" }}
          className="d-flex justify-content-center "
        >
          <div>
            <h5 className="fw-bold">CONTACT US</h5>
            <p style={{ lineHeight: "2" }}>
              <span className="fw-bold">Address:</span> 123 Beverage Lane,
              <br /> Kochi, Kerala, India
              <br /> <span className="fw-bold">Phone:</span> +91 0123456789
              <br /> <span className="fw-bold">Email:</span>{" "}
              contact@youralcoholservice.com
            </p>
          </div>
        </Col>
        <Col md={4} sm={12} style={{ color: "#F5F5F5" }}>
          <div
            className={`d-flex flex-column justify-content-center ${
              !isMobile && "align-items-center"
            } ${isMobile && "ms-4 mb-3"}`}
          >
            {isMobile ? (
              <>
                <h6 className="fw-bold" style={{ color: "#6FAE39" }}>
                  QUICK LINKS
                </h6>
                <h6 className="fw-bold" style={{ color: "#6FAE39" }}>
                  ABOUT US
                </h6>
                <h6 className="fw-bold" style={{ color: "#6FAE39" }}>
                  TRENDING PRODUCTS
                </h6>
                <h6 className="fw-bold" style={{ color: "#6FAE39" }}>
                  REVIEWS
                </h6>
                <h6 className="fw-bold" style={{ color: "#6FAE39" }}>
                  TOP BRANDS
                </h6>
              </>
            ) : (
              <>
                <h5 className="fw-bold" style={{ color: "#6FAE39" }}>
                  QUICK LINKS
                </h5>
                <h5 className="fw-bold" style={{ color: "#6FAE39" }}>
                  ABOUT US
                </h5>
                <h5 className="fw-bold" style={{ color: "#6FAE39" }}>
                  TRENDING PRODUCTS
                </h5>
                <h5 className="fw-bold" style={{ color: "#6FAE39" }}>
                  REVIEWS
                </h5>
                <h5 className="fw-bold" style={{ color: "#6FAE39" }}>
                  TOP BRANDS
                </h5>
              </>
            )}
          </div>
        </Col>
        <Col md={4} sm={12} style={{ color: "#F5F5F5" }} className="d-flex ">
          <div className="d-flex flex-column align-items-center justify-content-center">
            <div className="d-flex">
              <input
                type="text"
                placeholder="Email Address"
                className="form-control w-75 me-3"
              />
              <button
                className="p-2 border-0 rounded-2"
                style={{
                  fontSize: isMobile ? "16px" : "20px",
                  backgroundColor: primaryColor,
                  color: "white",
                  fontWeight: "600",
                  width: isMobile ? "120px" : "150px",
                }}
              >
                Subscribe
              </button>
            </div>
            <div className="d-flex justify-content-evenly w-100 mt-3">
              <FontAwesomeIcon
                icon={faInstagram}
                style={{
                  width: `${isMobile ? "36px" : "43px"}`,
                  height: `${isMobile ? "36px" : "43px"}`,
                }}
              />
              <FontAwesomeIcon
                icon={faYoutube}
                style={{
                  width: `${isMobile ? "36px" : "40px"}`,
                  height: `${isMobile ? "36px" : "40px"}`,
                }}
              />
              <FontAwesomeIcon
                icon={faXTwitter}
                style={{
                  width: `${isMobile ? "36px" : "40px"}`,
                  height: `${isMobile ? "36px" : "40px"}`,
                }}
              />
              <FontAwesomeIcon
                icon={faFacebook}
                style={{
                  width: `${isMobile ? "36px" : "40px"}`,
                  height: `${isMobile ? "36px" : "40px"}`,
                }}
              />
              <FontAwesomeIcon
                icon={faLinkedin}
                style={{
                  width: `${isMobile ? "36px" : "40px"}`,
                  height: `${isMobile ? "36px" : "40px"}`,
                }}
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Footer;
