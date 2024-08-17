import React, { useContext, useState } from "react";
import { Row, Col } from "react-bootstrap";
import logo from "../assets/logo.png";
import signupImg from "../assets/signupImg.png";
import { primaryColor } from "../color";
import Footer from "../components/Footer";
import { loginContext, registerContext } from "../context/DataShare";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Auth({ signup, signin }) {
  const isMobile = window.matchMedia("(max-width:768px)").matches;
  const { setRegisterData } = useContext(registerContext);
  const { setLoginData } = useContext(loginContext);
  const [userDetails, setUserDetails] = useState({
    name: "",
    age: "",
    email: "",
    phone: "",
    password: "",
  });
  const navigate = useNavigate();
  const handleRegister = () => {
    const { name, age, email, phone, password } = userDetails;
    if (!name || !age || !email || !phone || !password) {
      toast.info(`Please fill out all required fields`);
    } else {
      const reqBody = {
        name,
        age,
        email,
        phone,
        password,
      };
      setRegisterData(reqBody);
      navigate("/age-verification");
    }
  };
  const handleLogin = () => {
    const { phone, password } = userDetails;
    if (!phone || !password) {
      toast.info(`Please fill out all required fields`);
    } else {
      const reqBody = {
        phone,
        password,
      };
      setLoginData(reqBody);
      navigate("/age-verification");
    }
  };
  const handleRedirect = (path) => {
    if (path == "register") {
      navigate("/signup");
    } else if (path == "login") {
      navigate("/signin");
    } else {
      navigate("/");
    }
  };
  return (
    <>
      <Row className="mx-0 w-100">
        <img
          src={logo}
          alt="logo"
          style={{ width: "100px", height: "125px", cursor: "pointer" }}
          className="ms-5 mt-3"
          onClick={() => handleRedirect("home")}
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
                {signup && (
                  <>
                    <input
                      type="text"
                      placeholder="Full Name"
                      className="form-control rounded-0 shadow border-0 fw-bold mb-4 mt-4"
                      style={{
                        width: isMobile ? "75vw" : "325px",
                        height: "45px",
                      }}
                      onChange={(e) =>
                        setUserDetails({ ...userDetails, name: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Age"
                      className="form-control rounded-0 shadow border-0 fw-bold mb-4"
                      style={{
                        width: isMobile ? "75vw" : "325px",
                        height: "45px",
                      }}
                      onChange={(e) =>
                        setUserDetails({ ...userDetails, age: e.target.value })
                      }
                    />
                    <input
                      type="text"
                      placeholder="Email"
                      className="form-control rounded-0 shadow border-0 fw-bold mb-4"
                      style={{
                        width: isMobile ? "75vw" : "325px",
                        height: "45px",
                      }}
                      onChange={(e) =>
                        setUserDetails({
                          ...userDetails,
                          email: e.target.value,
                        })
                      }
                    />
                  </>
                )}

                <input
                  type="text"
                  placeholder="Phone Number"
                  className={`form-control rounded-0 shadow border-0 fw-bold mb-4 ${
                    signin && "mt-4"
                  }`}
                  style={{
                    width: isMobile ? "75vw" : "325px",
                    height: "45px",
                  }}
                  onChange={(e) =>
                    setUserDetails({ ...userDetails, phone: e.target.value })
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
                    setUserDetails({ ...userDetails, password: e.target.value })
                  }
                />
                {signup && (
                  <>
                    <button
                      className="p-2 border-0 rounded-2 mb-4"
                      style={{
                        fontSize: isMobile ? "12px" : "16px",
                        backgroundColor: primaryColor,
                        color: "white",
                        fontWeight: "600",
                        width: isMobile ? "120px" : "150px",
                      }}
                      onClick={handleRegister}
                    >
                      SIGN UP
                    </button>
                    <p className="fw-bold text-start">
                      Already a user?{" "}
                      <span
                        style={{ color: "#FFA300", cursor: "pointer" }}
                        onClick={() => handleRedirect("login")}
                      >
                        Sign In
                      </span>
                    </p>
                  </>
                )}
                {signin && (
                  <>
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
                    <p className="fw-bold text-start">
                      Not a user?{" "}
                      <span
                        style={{ color: "#FFA300", cursor: "pointer" }}
                        onClick={() => handleRedirect("register")}
                      >
                        Sign Up
                      </span>
                    </p>
                  </>
                )}
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

export default Auth;
