import React from "react";
import { Row, Col } from "react-bootstrap";
import AdminHeader from "../components/AdminHeader";
import productImg from "../assets/jd.png";
import UpdateOrder from "../components/UpdateOrder";
import Badge from "react-bootstrap/Badge";
import Footer from "../components/Footer";
function OrdersAdmin() {
  return (
    <div>
      <AdminHeader />
      <Row className="d-flex mx-0 w-100 justify-content-center align-items-center my-5">
        <Col md={10} sm={12}>
          <h5 className="fw-bold">ORDERS</h5>
          <div className="table-responsive shadow">
            <table className="table table-borderless">
              <thead style={{ borderBottom: "1px solid #333333" }}>
                <tr>
                  <th scope="col">#</th>
                  <th
                    scope="col"
                    style={{ width: "300px" }}
                    className="text-center"
                  >
                    Product
                  </th>
                  <th scope="col" className="text-center">
                    Order ID
                  </th>
                  <th scope="col" className="text-center">
                    Address
                  </th>
                  <th scope="col" className="text-center">
                    Mobile
                  </th>
                  <th scope="col" className="text-center">
                    Total
                  </th>
                  <th scope="col" className="text-center">
                    Status
                  </th>
                  <th scope="col" className="text-center"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="py-2">
                  <th scope="row">
                    <div className="p-3">1</div>
                  </th>
                  <td
                    style={{ width: "300px" }}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <div
                      style={{ display: "inline-block", textAlign: "center" }}
                    >
                      <div className="d-flex align-items-center justify-content-center">
                        <img
                          src={productImg}
                          alt="Jack Daniels Tennessee Apple"
                          style={{
                            width: "60px",
                            height: "90px",
                            filter:
                              "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))",
                          }}
                          className="my-2"
                        />
                        <p className="mb-0 fw-bold me-2">+</p>
                        <Badge
                          bg="border"
                          className="rounded-circle shadow"
                          style={{
                            width: "25px",
                            height: "25px",
                            color: "black",
                          }}
                        >
                          3
                        </Badge>
                      </div>
                      <p
                        className="mb-0"
                        style={{
                          display: "block",
                          width: "100%",
                          textAlign: "center",
                        }}
                      >
                        Jack Daniels Tennessee Apple
                      </p>
                    </div>
                  </td>
                  <td className="text-center">
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{ height: "130px" }}
                    >
                      564
                    </div>
                  </td>
                  <td className="text-center" style={{ maxWidth: "100px" }}>
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{ height: "130px" }}
                    >
                      Sanjay, 682016 House no: 123, Kochi, Kerala
                    </div>
                  </td>
                  <td className="text-center">
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{ height: "130px" }}
                    >
                      0123456789
                    </div>
                  </td>
                  <td className="text-center">
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{ height: "130px" }}
                    >
                      ₹11300
                    </div>
                  </td>

                  <td className="text-center">
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{ height: "130px" }}
                    >
                      Delivered
                    </div>
                  </td>

                  <td className="text-center">
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{ height: "130px" }}
                    >
                      <UpdateOrder />
                    </div>
                  </td>
                </tr>
                <tr className="py-2">
                  <th scope="row">
                    <div className="p-3">1</div>
                  </th>
                  <td
                    style={{ width: "300px" }}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <div
                      style={{ display: "inline-block", textAlign: "center" }}
                    >
                      <div className="d-flex align-items-center justify-content-center">
                        <img
                          src={productImg}
                          alt="Jack Daniels Tennessee Apple"
                          style={{
                            width: "60px",
                            height: "90px",
                            filter:
                              "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))",
                          }}
                          className="my-2"
                        />
                        <p className="mb-0 fw-bold me-2">+</p>
                        <Badge
                          bg="border"
                          className="rounded-circle shadow"
                          style={{
                            width: "25px",
                            height: "25px",
                            color: "black",
                          }}
                        >
                          3
                        </Badge>
                      </div>
                      <p
                        className="mb-0"
                        style={{
                          display: "block",
                          width: "100%",
                          textAlign: "center",
                        }}
                      >
                        Jack Daniels Tennessee Apple
                      </p>
                    </div>
                  </td>
                  <td className="text-center">
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{ height: "130px" }}
                    >
                      564
                    </div>
                  </td>
                  <td className="text-center" style={{ maxWidth: "100px" }}>
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{ height: "130px" }}
                    >
                      Sanjay, 682016 House no: 123, Kochi, Kerala
                    </div>
                  </td>
                  <td className="text-center">
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{ height: "130px" }}
                    >
                      0123456789
                    </div>
                  </td>
                  <td className="text-center">
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{ height: "130px" }}
                    >
                      ₹11300
                    </div>
                  </td>

                  <td className="text-center">
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{ height: "130px" }}
                    >
                      Delivered
                    </div>
                  </td>

                  <td className="text-center">
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{ height: "130px" }}
                    >
                      <UpdateOrder />
                    </div>
                  </td>
                </tr>
                <tr className="py-2">
                  <th scope="row">
                    <div className="p-3">1</div>
                  </th>
                  <td
                    style={{ width: "300px" }}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <div
                      style={{ display: "inline-block", textAlign: "center" }}
                    >
                      <div className="d-flex align-items-center justify-content-center">
                        <img
                          src={productImg}
                          alt="Jack Daniels Tennessee Apple"
                          style={{
                            width: "60px",
                            height: "90px",
                            filter:
                              "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))",
                          }}
                          className="my-2"
                        />
                        <p className="mb-0 fw-bold me-2">+</p>
                        <Badge
                          bg="border"
                          className="rounded-circle shadow"
                          style={{
                            width: "25px",
                            height: "25px",
                            color: "black",
                          }}
                        >
                          3
                        </Badge>
                      </div>
                      <p
                        className="mb-0"
                        style={{
                          display: "block",
                          width: "100%",
                          textAlign: "center",
                        }}
                      >
                        Jack Daniels Tennessee Apple
                      </p>
                    </div>
                  </td>
                  <td className="text-center">
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{ height: "130px" }}
                    >
                      564
                    </div>
                  </td>
                  <td className="text-center" style={{ maxWidth: "100px" }}>
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{ height: "130px" }}
                    >
                      Sanjay, 682016 House no: 123, Kochi, Kerala
                    </div>
                  </td>
                  <td className="text-center">
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{ height: "130px" }}
                    >
                      0123456789
                    </div>
                  </td>
                  <td className="text-center">
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{ height: "130px" }}
                    >
                      ₹11300
                    </div>
                  </td>

                  <td className="text-center">
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{ height: "130px" }}
                    >
                      Delivered
                    </div>
                  </td>

                  <td className="text-center">
                    <div
                      className="d-flex align-items-center justify-content-center"
                      style={{ height: "130px" }}
                    >
                      <UpdateOrder />
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

export default OrdersAdmin;
