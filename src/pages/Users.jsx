import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import AdminHeader from "../components/AdminHeader";
import productImg from "../assets/jd.png";
import UpdateOrder from "../components/UpdateOrder";
import Badge from "react-bootstrap/Badge";
import Footer from "../components/Footer";
import { getAllUsersApi } from "../services/allApi";

function Users() {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const token = sessionStorage.getItem("token");
    const reqHeader = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const result = await getAllUsersApi(reqHeader);
    setUsers(result.data);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <AdminHeader />
      <Row className="d-flex mx-0 w-100 justify-content-center align-items-center my-5">
        <Col md={10} sm={12}>
          <h5 className="fw-bold">USERS</h5>
          <div className="table-responsive shadow">
            <table className="table table-borderless">
              <thead style={{ borderBottom: "1px solid #333333" }}>
                <tr>
                  <th scope="col">#</th>
                  <th scope="col" className="text-center">
                    Name
                  </th>
                  <th scope="col" className="text-center">
                    Age
                  </th>
                  <th scope="col" className="text-center">
                    Address
                  </th>
                  <th scope="col" className="text-center">
                    Mobile
                  </th>
                  <th scope="col" className="text-center">
                    Email
                  </th>
                </tr>
              </thead>
              <tbody>
                {users.map((item, index) => (
                  <tr className="py-2" key={index}>
                    <th scope="row">
                      <div className="p-3">{index + 1}</div>
                    </th>

                    <td className="text-center">
                      <div
                        className="d-flex align-items-center justify-content-center"
                        style={{ height: "70px" }}
                      >
                        {item?.name}
                      </div>
                    </td>
                    <td className="text-center">
                      <div
                        className="d-flex align-items-center justify-content-center"
                        style={{ height: "70px" }}
                      >
                        {item?.age}
                      </div>
                    </td>
                    <td className="text-center" style={{ maxWidth: "100px" }}>
                      <div
                        className="d-flex align-items-center justify-content-center"
                        style={{ height: "70px" }}
                      >
                        {item?.address}
                      </div>
                    </td>
                    <td className="text-center">
                      <div
                        className="d-flex align-items-center justify-content-center"
                        style={{ height: "70px" }}
                      >
                        {item?.phone}
                      </div>
                    </td>
                    <td className="text-center">
                      <div
                        className="d-flex align-items-center justify-content-center"
                        style={{ height: "70px" }}
                      >
                        {item?.email}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Col>
      </Row>
      <Footer />
    </>
  );
}

export default Users;
