import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import background from "../assets/background.png";
import { Row, Col } from "react-bootstrap";
import { primaryColor } from "../color";
import can from "../assets/can.gif";
import DisplayCard from "../components/DisplayCard";
import cheersImage from "../assets/cheers.gif";
import Carousel from "react-bootstrap/Carousel";
import carouselBg from "../assets/carousel-bg.png";
import clipart from "../assets/clipart.png";
import p1 from "../assets/p1.jpg";
import p2 from "../assets/p2.jpg";
import p3 from "../assets/p3.jpg";
import star from "../assets/star.png";
import heineken from "../assets/heineken.png";
import goa from "../assets/goa.png";
import jdlogo from "../assets/jdlogo.png";
import smirnoff from "../assets/smirnoff.png";
import usericon from "../assets/userIcon.png";
import delivery from "../assets/delivery.png";
import cart from "../assets/Cart.png";
import beer from "../assets/beer.png";
import { trendingProductApi } from "../services/allApi";
import Category from "../components/Category";
function Homepage() {
  const [index, setIndex] = useState(0);
  const [products, setProducts] = useState([]);
  const isMobile = window.matchMedia("(max-width:768px)").matches;
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  const getTrendingProducts = async () => {
    const result = await trendingProductApi();
    setProducts(result.data);
  };
  useEffect(() => {
    getTrendingProducts();
  }, []);
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${background})`,
          minHeight: "100vh",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        id="home"
      >
        <Header />
        <Row className="ms-0 me-0 w-100" style={{ minHeight: "60vh" }}>
          <Col
            md={6}
            sm={12}
            className="d-flex flex-column justify-content-center"
          >
            <h1
              className="fw-bold"
              style={{
                fontSize: isMobile ? "40px" : "48px",
                color: "#FFFFFFD9",
                marginLeft: isMobile ? "20px" : "115px",
                textAlign: "left",
              }}
            >
              Cheers to Convenience – Delivered Right to Your Doorstep!
            </h1>
            <h5
              className="fw-bold"
              style={{
                color: "#FFFFFFD9",
                marginLeft: isMobile ? "20px" : "115px",
                fontSize: isMobile && "16px",
              }}
            >
              Raise a Glass Without Leaving Home – Your Favorite Drinks,
              Delivered Fast!
            </h5>
            <div className="d-flex">
              <button
                className="p-2 border-0 rounded-2"
                style={{
                  fontSize: isMobile ? "16px" : "20px",
                  backgroundColor: primaryColor,
                  color: "white",
                  fontWeight: "600",
                  marginLeft: isMobile ? "20px" : "115px",
                  width: isMobile ? "120px" : "150px",
                }}
              >
                Order Now
              </button>
              <button
                className="p-2 border-0 rounded-2 ms-3"
                style={{
                  fontSize: isMobile ? "16px" : "20px",
                  backgroundColor: "#6FAE39",
                  color: "white",
                  fontWeight: "600",
                  width: isMobile ? "140px" : "180px",
                }}
              >
                View Products
              </button>
            </div>
          </Col>
          <Col
            md={6}
            sm={12}
            className="d-flex flex-column justify-content-center align-items-center"
          >
            <img
              src={can}
              alt="can"
              style={{
                width: isMobile ? "295px" : "480px",
                height: isMobile ? "252px" : "480px",
              }}
            />
          </Col>
        </Row>
      </div>
      <div>
        <Category
          category={"TRENDING PRODUCTS"}
          admin={false}
          home={true}
          trending={products}
        />
      </div>
      <div id="about">
        <h4
          className={`fw-bold my-5 ${isMobile && "text-center"}`}
          style={{ marginLeft: !isMobile && "145px", color: "#333333" }}
        >
          ABOUT US
        </h4>
        <Row className="ms-0 me-0 w-100 d-flex justify-content-center align-items-center">
          <Col md={10} sm={12} className="px-3">
            <Row
              className="mx-0 w-100 rounded-3"
              style={{ backgroundColor: "#EEEEEE", minHeight: "500px" }}
            >
              <Col
                md={4}
                sm={12}
                className="d-flex justify-content-center align-items-center"
              >
                <img
                  src={cheersImage}
                  alt="cheersImage"
                  className={`rounded-3 ${isMobile && "mt-5"}`}
                  style={{
                    width: isMobile ? "261px" : "348px",
                    height: isMobile ? "342px" : "400px",
                  }}
                />
              </Col>
              <Col md={8} sm={12}>
                <h4 className="fw-bold mt-5" style={{ color: "#333333" }}>
                  Our Journey: From Vision to Reality
                </h4>
                <p
                  style={{
                    lineHeight: "2",
                    maxWidth: "600px",
                    fontSize: isMobile ? "16px" : "18px",
                  }}
                >
                  We started our journey with a simple goal: to make premium
                  alcohol delivery as smooth and enjoyable as the drinks
                  themselves. Our founders, passionate about fine spirits and
                  exceptional service, noticed a gap in the market for reliable,
                  fast, and customer-centric alcohol delivery in India. Thus,
                  our story began with a commitment to quality, convenience, and
                  customer satisfaction
                </p>
                <Row className="mx-0 d-flex flex-column align-items-center">
                  <Col sm={12} md={12} className="d-flex flex-column mb-2">
                    <Row className="mx-0 d-flex align-items-center w-100 mb-2">
                      <Col sm={12} md={6} className="d-flex align-items-center">
                        <img
                          src={delivery}
                          alt="delivery"
                          style={{ width: "48px", height: "48px" }}
                        />
                        <p
                          className="mb-0 ms-3"
                          style={{
                            lineHeight: "2",
                            fontSize: isMobile ? "16px" : "18px",
                          }}
                        >
                          Lightning-Fast Delivery
                        </p>
                      </Col>
                      <Col sm={12} md={6} className="d-flex align-items-center">
                        <img
                          src={cart}
                          alt="cart"
                          style={{ width: "48px", height: "48px" }}
                        />
                        <p
                          className="mb-0 ms-3"
                          style={{
                            lineHeight: "2",
                            fontSize: isMobile ? "16px" : "18px",
                          }}
                        >
                          Wide Range of Choices
                        </p>
                      </Col>
                    </Row>
                    <Row className="mx-0 d-flex align-items-center w-100 mb-2">
                      <Col sm={12} md={6} className="d-flex align-items-center">
                        <img
                          src={usericon}
                          alt="delivery"
                          style={{ width: "38px", height: "34px" }}
                        />
                        <p
                          className="mb-0 ms-3"
                          style={{
                            lineHeight: "2",
                            fontSize: isMobile ? "16px" : "18px",
                          }}
                        >
                          Exceptional Customer Service
                        </p>
                      </Col>
                      <Col sm={12} md={6} className="d-flex align-items-center">
                        <img
                          src={beer}
                          alt="beer"
                          style={{ width: "34px", height: "34px" }}
                          className="ms-md-2"
                        />
                        <p
                          className="mb-0 ms-3"
                          style={{
                            lineHeight: "2",
                            fontSize: isMobile ? "16px" : "18px",
                          }}
                        >
                          Premium Quality Selection{" "}
                        </p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>

      <div className="mt-5">
        <Carousel
          activeIndex={index}
          onSelect={handleSelect}
          interval={3000}
          fade
        >
          <Carousel.Item
            style={{
              backgroundImage: `url(${carouselBg})`,
              height: "600px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img src={clipart} alt="clipart" className="mb-4" />
              <img
                src={star}
                alt="star"
                style={{ width: "174px", height: "31px" }}
                className="mb-4"
              />
              <p
                className="text-center mb-4"
                style={{ maxWidth: "550px", fontWeight: "600" }}
              >
                Fast delivery and a fantastic selection of drinks. This is my
                go-to service for ordering alcohol. Highly recommend!
              </p>
              <img
                src={p1}
                alt="p1"
                style={{ width: "90px", height: "100px" }}
                className="rounded-circle mb-4"
              />
              <h6 className="fw-bold">Maxwell</h6>
            </div>
          </Carousel.Item>
          <Carousel.Item
            style={{
              backgroundImage: `url(${carouselBg})`,
              height: "600px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img src={clipart} alt="clipart" className="mb-4" />
              <img
                src={star}
                alt="star"
                style={{ width: "174px", height: "31px" }}
                className="mb-4"
              />
              <p
                className="text-center mb-4"
                style={{ maxWidth: "550px", fontWeight: "600" }}
              >
                Exceptional service and quick delivery! The variety of drinks
                available is impressive. I always turn to this service for my
                beverage needs. Five stars!
              </p>
              <img
                src={p2}
                alt="p2"
                style={{ width: "90px", height: "100px" }}
                className="rounded-circle mb-4"
              />
              <h6 className="fw-bold">Emily Johnson</h6>
            </div>
          </Carousel.Item>
          <Carousel.Item
            style={{
              backgroundImage: `url(${carouselBg})`,
              height: "600px",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
            className="d-flex justify-content-center align-items-center"
          >
            <div className="d-flex flex-column justify-content-center align-items-center">
              <img src={clipart} alt="clipart" className="mb-4" />
              <img
                src={star}
                alt="star"
                style={{ width: "174px", height: "31px" }}
                className="mb-4"
              />
              <p
                className="text-center mb-4"
                style={{ maxWidth: "550px", fontWeight: "600" }}
              >
                Outstanding experience every time! The fast delivery and
                extensive drink options make this my favorite service for
                ordering alcohol. Highly recommended!
              </p>
              <img
                src={p3}
                alt="p1"
                style={{ width: "90px", height: "100px" }}
                className="rounded-circle mb-4"
              />
              <h6 className="fw-bold">James Carter</h6>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className="mt-5 mb-5">
        <h4
          className={`fw-bold my-5 ${isMobile && "text-center"}`}
          style={{ marginLeft: !isMobile && "145px", color: "#333333" }}
        >
          TOP BRANDS{" "}
        </h4>
        <Row
          className="mx-0 w-100 d-flex justify-content-evenly"
          style={{ padding: "0 75px" }}
        >
          <div
            className="shadow d-flex align-items-center justify-content-center mb-5"
            style={{ width: "260px", height: "223px" }}
          >
            <img
              src={jdlogo}
              alt="jdlogo"
              style={{ width: "203px", height: "120px" }}
            />
          </div>
          <div
            className="shadow d-flex align-items-center justify-content-center mb-5"
            style={{ width: "260px", height: "223px" }}
          >
            <img
              src={heineken}
              alt="heineken"
              style={{ width: "203px", height: "203px" }}
            />
          </div>
          <div
            className="shadow d-flex align-items-center justify-content-center mb-5"
            style={{ width: "260px", height: "223px" }}
          >
            <img
              src={goa}
              alt="goa"
              style={{ width: "203px", height: "203px" }}
            />
          </div>
          <div
            className="shadow d-flex align-items-center justify-content-center mb-5"
            style={{ width: "260px", height: "223px" }}
          >
            <img
              src={smirnoff}
              alt="smirnoff"
              style={{ width: "203px", height: "120px" }}
            />
          </div>
        </Row>
      </div>
      <Footer />
    </>
  );
}

export default Homepage;
