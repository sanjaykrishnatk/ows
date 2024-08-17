import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import logo from "../assets/logo.png";
import signupImg from "../assets/signupImg.png";
import { primaryColor } from "../color";
import Footer from "../components/Footer";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { adminLoginApi } from "../services/allApi";
import { useNavigate } from "react-router-dom";
function AdminLogin() {
  const isMobile = window.matchMedia("(max-width:768px)").matches;
  const [adminDetails, setAdminDetails] = useState({
    phone: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleLogin = async () => {
    const { phone, password } = adminDetails;
    if (!phone || !password) {
      toast.info(`Please fill all required fields`);
    } else {
      const result = await adminLoginApi({ phone, password });
      if (result.status == 200) {
        sessionStorage.setItem("token", result.data.token);
        sessionStorage.setItem(
          "adminDetails",
          JSON.stringify(result.data.adminCheck)
        );
        toast.success(`Login Succesful`);
        setTimeout(() => {
          navigate("/admin");
        }, 2000);
      } else {
        toast.error(`Invalid Email or Password`);
      }
    }
  };
  return (
    <>
      <Row className="mx-0 w-100">
        <img
          src={logo}
          alt="logo"
          style={{ width: "100px", height: "125px" }}
          className="ms-5 mt-3"
        />
      </Row>
      <Row className="mx-0 w-100 d-flex justify-content-center align-items-center mt-4 mb-5">
        <Col md={10} sm={12} className="px-4 px-md-0">
          <Row className="mx-0 w-100 d-flex justify-content-center align-items-center">
            <Col md={8} sm={12} className="shadow p-0 d-flex">
              {!isMobile && (
                <img
                  src={signupImg}
                  alt="signupImg"
                  style={{ width: "330px", height: "470px" }}
                />
              )}
              <div
                className="d-flex flex-column justify-content-center align-items-center "
                style={{ width: "80vh" }}
              >
                <input
                  type="text"
                  placeholder="Phone Number"
                  className={`form-control rounded-0 shadow border-0 fw-bold mb-4 mt-4`}
                  style={{
                    width: isMobile ? "75vw" : "325px",
                    height: "45px",
                  }}
                  onChange={(e) =>
                    setAdminDetails({ ...adminDetails, phone: e.target.value })
                  }
                />
                <input
                  type="password"
                  placeholder="Password"
                  className="form-control rounded-0 shadow border-0 fw-bold mb-4"
                  style={{
                    width: isMobile ? "75vw" : "325px",
                    height: "45px",
                  }}
                  onChange={(e) =>
                    setAdminDetails({
                      ...adminDetails,
                      password: e.target.value,
                    })
                  }
                />
                <button
                  type="button"
                  className="p-2 border-0 rounded-2 mb-4"
                  style={{
                    fontSize: isMobile ? "12px" : "16px",
                    backgroundColor: primaryColor,
                    color: "white",
                    fontWeight: "600",
                    width: isMobile ? "120px" : "150px",
                  }}
                  onClick={handleLogin}
                >
                  SIGN IN
                </button>
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
      <Footer />
      <ToastContainer position="top-center" autoClose="2000" />
    </>
  );
}

export default AdminLogin;
