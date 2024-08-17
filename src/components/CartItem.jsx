import React, { useContext } from "react";
import { Row, Col } from "react-bootstrap";
import productImage from "../assets/jd.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { serverUrl } from "../services/serverUrl";
import { cartContext } from "../context/DataShare";

function CartItem({ data }) {
  const { cartData, setCartData } = useContext(cartContext);
  const isMobile = window.matchMedia("(max-width:768px)").matches;
  const handleDelete = (id) => {
    setCartData(cartData.filter((item) => item._id != id));
  };
  const handleQty = (id, value) => {
    const updatedCartData = cartData.map((item) =>
      item._id === id ? { ...item, qty: value } : item
    );
    setCartData(updatedCartData);
  };
  return (
    <Row className="mx-3 my-4 shadow" style={{ backgroundColor: "FFFFFFE6" }}>
      <Col md={2} className="d-flex justify-content-center align-items-center">
        <img
          src={`${serverUrl}/uploads/${data?.image}`}
          alt="productImage"
          style={{
            width: "60px",
            height: "90px",
            filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))",
          }}
          className="my-2"
        />
      </Col>
      <Col md={7} className="d-flex flex-column justify-content-center ps-4">
        <p className="mb-0">{data?.name}</p>
        <p className="mb-0 fw-bold" style={{ color: "#6FAE39" }}>
          ₹{data?.price}
        </p>
      </Col>
      <Col
        md={3}
        className={`d-flex ${
          isMobile
            ? "justify-content-between px-4 py-3"
            : "justify-content-evenly"
        } align-items-center p-0`}
      >
        <div className="d-flex justify-content-evenly align-items-center">
          <p className="mb-0" style={{ fontSize: "14px" }}>
            Qty:
          </p>
          <select
            name="qty"
            className="rounded-2 ms-2"
            style={{ fontSize: "12px", backgroundColor: "#FFFFFFCC" }}
            onChange={(e) => handleQty(data._id, e.target.value)}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
          </select>
        </div>
        <FontAwesomeIcon
          type="button"
          icon={faTrashCan}
          style={{ color: "#C30101" }}
          className="2x"
          onClick={() => handleDelete(data._id)}
        />
      </Col>
    </Row>
  );
}

export default CartItem;
