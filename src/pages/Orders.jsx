import React, { useContext, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import UserHeader from "../components/UserHeader";
import productImg from "../assets/jd.png";
import ViewOrder from "../components/ViewOrder";
import Badge from "react-bootstrap/Badge";
import Footer from "../components/Footer";
import { getAllOrdersApi, getOrderApi } from "../services/allApi";
import { serverUrl } from "../services/serverUrl";
import AdminHeader from "../components/AdminHeader";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateContext } from "../context/DataShare";

function Orders({ admin }) {
  const { updateData } = useContext(updateContext);
  const [userOrders, setUserOrders] = useState([]);
  const getOrder = async () => {
    if (admin) {
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const result = await getAllOrdersApi(reqHeader);
      setUserOrders(result.data);
    } else {
      const userId = JSON.parse(sessionStorage.getItem("userDetails"))._id;
      const token = sessionStorage.getItem("token");
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const result = await getOrderApi(userId, reqHeader);
      setUserOrders(result.data);
    }
  };
  useEffect(() => {
    getOrder();
  }, [updateData]);

  return (
    <>
      {admin ? <AdminHeader /> : <UserHeader cart={true} />}

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
                    Total
                  </th>
                  <th scope="col" className="text-center">
                    Status
                  </th>
                  <th scope="col" className="text-center"></th>
                </tr>
              </thead>
              <tbody>
                {userOrders.map((data, index) => (
                  <tr className="py-2" key={data?._id}>
                    <th scope="row">
                      <div className="p-3">{index + 1}</div>
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
                            src={`${serverUrl}/uploads/${data?.products[0].image}`}
                            alt="Jack Daniels Tennessee Apple"
                            style={{
                              width: "60px",
                              height: "90px",
                              filter:
                                "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))",
                            }}
                            className="my-2"
                          />
                          {data?.products.length > 1 && (
                            <>
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
                                {data?.products.length - 1}
                              </Badge>
                            </>
                          )}
                        </div>
                        <p
                          className="mb-0"
                          style={{
                            display: "block",
                            width: "100%",
                            textAlign: "center",
                          }}
                        >
                          {data?.products[0].name}
                        </p>
                      </div>
                    </td>
                    <td className="text-center">
                      <div
                        className="d-flex align-items-center justify-content-center"
                        style={{ height: "130px" }}
                      >
                        {data?.orderId}
                      </div>
                    </td>
                    <td className="text-center" style={{ maxWidth: "100px" }}>
                      <div
                        className="d-flex align-items-center justify-content-center"
                        style={{ height: "130px" }}
                      >
                        {data?.address}
                      </div>
                    </td>
                    <td className="text-center">
                      <div
                        className="d-flex align-items-center justify-content-center"
                        style={{ height: "130px" }}
                      >
                        ₹{data?.total}
                      </div>
                    </td>

                    <td className="text-center">
                      <div
                        className="d-flex align-items-center justify-content-center"
                        style={{ height: "130px" }}
                      >
                        {data?.status}
                      </div>
                    </td>

                    <td className="text-center">
                      <div
                        className="d-flex align-items-center justify-content-center"
                        style={{ height: "130px" }}
                      >
                        {admin ? (
                          <ViewOrder data={data} admin={true} />
                        ) : (
                          <ViewOrder data={data} user={true} />
                        )}
                      </div>
                    </td>
                  </tr>
                ))}

                {/* <tr className="py-2">
                  <th scope="row">
                    <div className="p-3">2</div>
                  </th>
                  <td
                    style={{ width: "300px" }}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <div
                      style={{ display: "inline-block", textAlign: "center" }}
                    >
                      <img
                        src={productImg}
                        alt="Jack Daniels Tennessee Apple"
                        style={{
                          width: "60px",
                          height: "90px",
                          filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))",
                        }}
                        className="my-2"
                      />
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
                      <ViewOrder />
                    </div>
                  </td>
                </tr>
                <tr className="py-2">
                  <th scope="row">
                    <div className="p-3">3</div>
                  </th>
                  <td
                    style={{ width: "300px" }}
                    className="d-flex justify-content-center align-items-center"
                  >
                    <div
                      style={{ display: "inline-block", textAlign: "center" }}
                    >
                      <img
                        src={productImg}
                        alt="Jack Daniels Tennessee Apple"
                        style={{
                          width: "60px",
                          height: "90px",
                          filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))",
                        }}
                        className="my-2"
                      />
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
                      <ViewOrder />
                    </div>
                  </td>
                </tr> */}
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
      <Footer />
      <ToastContainer position="top-center" autoClose="2000" />
    </>
  );
}

export default Orders;
