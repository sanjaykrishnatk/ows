import { useContext, useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { primaryColor } from "../color";
import { Row, Col } from "react-bootstrap";
import { serverUrl } from "../services/serverUrl";
import Form from "react-bootstrap/Form";
import { toast } from "react-toastify";
import { updateOrderApi } from "../services/allApi";
import { updateContext } from "../context/DataShare";

function ViewOrder({ data, admin }) {
  const { setUpdateData } = useContext(updateContext);
  const [show, setShow] = useState(false);
  const [status, setStatus] = useState("");
  const handleClose = () => {
    setStatus("");
    setShow(false);
  };
  const handleShow = () => setShow(true);
  const handleUpdate = async (data) => {
    const id = data._id;
    if (status == "") {
      toast.info("Please fill all required fields");
    } else {
      const reqBody = {
        status,
      };
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const result = await updateOrderApi(id, reqBody, reqHeader);
      if (result.status == 200) {
        setUpdateData(result.data);
        toast.success("Order Updated Succesfully");
        handleClose();
      }
    }
  };
  return (
    <div>
      {admin ? (
        <button
          type="button"
          className=" btn"
          style={{ color: primaryColor }}
          onClick={handleShow}
        >
          Update{" "}
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="2x" />
        </button>
      ) : (
        <button
          type="button"
          className=" btn"
          style={{ color: primaryColor }}
          onClick={handleShow}
        >
          View{" "}
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} className="2x" />
        </button>
      )}
      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Order Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row className="mx-0 w-100 d-flex justify-content-center align-items-center">
            <Col md={12} className="p-2">
              <h6>PRODUCTS</h6>
              <Row className="mx-0 w-100">
                {data?.products.map((item) => (
                  <Col
                    key={item._id}
                    md={3}
                    sm={12}
                    className="p-0 d-flex flex-column justify-content-center align-items-center"
                  >
                    <img
                      src={`${serverUrl}/uploads/${item.image}`}
                      alt="product-image"
                      style={{ maxHeight: "123px", maxWidth: "80px" }}
                    />
                    <span className="text-center">{item.name}</span>
                    <span className="text-center">Qty: {item.qty}</span>
                  </Col>
                ))}
              </Row>
              <Row className="mx-0 w-100 d-flex flex-column">
                <div className="mb-3 mt-3">
                  <span className="fw-bold">Order ID:</span> {data?.orderId}
                </div>
                <div className="mb-3">
                  <span className="fw-bold">Address:</span> {data?.address}
                </div>
                <div className="mb-3">
                  <span className="fw-bold">Mobile:</span> {data?.mobile}
                </div>
                <div className="mb-3">
                  <span className="fw-bold">Total:</span> ₹{data?.total}
                </div>
                {!admin && (
                  <div className="mb-3">
                    <span className="fw-bold">Status:</span> {data?.status}
                  </div>
                )}
                {admin && (
                  <div className="mb-3 d-flex align-items-center">
                    <span className="fw-bold me-2">Status:</span>{" "}
                    <Form.Select
                      aria-label="Order Status"
                      className="w-50"
                      onChange={(e) => setStatus(e.target.value)}
                    >
                      <option value="Order Placed">Order Placed</option>
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Out for Delivery">Out for Delivery</option>
                      <option value="Delivered">Delivered</option>
                    </Form.Select>
                  </div>
                )}
              </Row>
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          {admin ? (
            <>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                style={{ backgroundColor: "#FFA300" }}
                className="border border-0"
                onClick={() => handleUpdate(data)}
              >
                Update
              </Button>
            </>
          ) : (
            <Button
              style={{ backgroundColor: "#FFA300" }}
              className="border border-0"
              onClick={handleClose}
            >
              Close
            </Button>
          )}
          {/* <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ViewOrder;
