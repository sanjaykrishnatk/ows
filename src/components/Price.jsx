import React, { useContext, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import { cartContext } from "../context/DataShare";

function Price() {
  const { cartData, setCartData } = useContext(cartContext);
  const [price, setPrice] = useState(
    cartData.reduce((total, item) => total + item.price * (item.qty ?? 1), 0)
  );
  useEffect(() => {
    setPrice(
      cartData.reduce((total, item) => total + item.price * (item.qty ?? 1), 0)
    );
  }, [cartData]);

  return (
    <>
      <Row
        className="mx-0 d-flex justify-content-center align-items-center"
        style={{ borderBottom: "1px solid #333333" }}
      >
        <p className="mb-0 fw-bold p-3">PRICE DETAILS</p>
      </Row>
      <Row
        className="mx-0 d-flex justify-content-center align-items-center"
        style={{ borderBottom: "1px solid #333333" }}
      >
        <Row className="mx-0 d-flex justify-content-center align-items-center px-3 pb-2 pt-3">
          <Col md={6} className="d-flex">
            <p className="mb-0">Price</p>
          </Col>
          <Col md={6} className="d-flex justify-content-end">
            <p className="mb-0 pe-5">₹{price}</p>
          </Col>
        </Row>
        <Row className="mx-0 d-flex justify-content-center align-items-center px-3 py-2">
          <Col md={6} className="d-flex">
            <p className="mb-0">Delivery Charges</p>
          </Col>
          <Col md={6} className="d-flex justify-content-end">
            <p className="mb-0 pe-5">₹150</p>
          </Col>
        </Row>
        <Row className="mx-0 d-flex justify-content-center align-items-center px-3 pt-2 pb-3">
          <Col md={6} className="d-flex">
            <p className="mb-0">Packaging Fee</p>
          </Col>
          <Col md={6} className="d-flex justify-content-end">
            <p className="mb-0 pe-5">₹50</p>
          </Col>
        </Row>
      </Row>
      <Row className="mx-0 d-flex justify-content-center align-items-center px-3 pb-2 pt-3">
        <Col md={6} className="d-flex">
          <p className="mb-0 fw-bold">Total Amount</p>
        </Col>
        <Col md={6} className="d-flex justify-content-end">
          <p className="mb-0 pe-5 fw-bold">₹{price + 200}</p>
        </Col>
      </Row>
    </>
  );
}

export default Price;
