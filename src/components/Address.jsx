import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { addAddressApi } from "../services/allApi";
import { toast } from "react-toastify";

function Address() {
  const [show, setShow] = useState(false);
  const [address, setAddress] = useState("");
  const [userAddress, setUserAddress] = useState("");
  const handleClose = () => {
    setAddress("");
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const isMobile = window.matchMedia("(max-width:768px)").matches;
  const handleAddress = async () => {
    if (address == "") {
      toast.info("Please fill all required fields");
    } else {
      const token = sessionStorage.getItem("token");
      const userID = JSON.parse(sessionStorage.getItem("userDetails"))._id;

      const reqHeader = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      };
      const result = await addAddressApi(userID, { address }, reqHeader);
      if (result.status == 200) {
        sessionStorage.setItem("userDetails", JSON.stringify(result.data));
        handleClose();
        toast.success("Address added successfully");
      }
    }
  };
  useEffect(() => {
    const userDetails = JSON.parse(sessionStorage.getItem("userDetails"));
    if (userDetails?.address) {
      setUserAddress(
        userDetails.name.charAt(0).toUpperCase() +
          userDetails.name.slice(1) +
          ", " +
          userDetails.address
      );
    }
  }, [sessionStorage.getItem("userDetails")]);

  return (
    <Row className="mx-0 w-100" style={{ borderBottom: "1px solid #333333" }}>
      <Col md={6} sm={6}>
        {" "}
        <p className="mt-3" style={{ fontSize: isMobile ? "13px" : "15px" }}>
          <span className="fw-bold me-2">Deliver to:</span>
          {userAddress}
        </p>
      </Col>
      <Col
        md={6}
        sm={6}
        className={`${
          isMobile ? "justify-content-start mb-2" : "justify-content-end"
        }`}
      >
        <button
          type="button"
          className="btn py-0"
          style={{
            border: "2px solid #FFA300",
            color: "#FFA300",
            fontSize: isMobile ? "12px" : "15px",
            height: "40px",
          }}
          onClick={handleShow}
        >
          Add Address
        </button>
      </Col>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add new address</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <textarea
            name="Address"
            className="form-control my-3"
            placeholder="Address"
            onChange={(e) => setAddress(e.target.value)}
          ></textarea>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            className="border border-0"
            style={{ backgroundColor: "#FFA300" }}
            onClick={handleAddress}
          >
            Add Address
          </Button>
        </Modal.Footer>
      </Modal>
    </Row>
  );
}

export default Address;
