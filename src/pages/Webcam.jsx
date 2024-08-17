import React, { useContext, useRef } from "react";
import WebcamCapture from "react-webcam";
import { getAge, loginApi, registerApi } from "../services/allApi";
import { primaryColor } from "../color";
import logo from "../assets/logo.png";
import Footer from "../components/Footer";
import { loginContext, registerContext } from "../context/DataShare";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
function Webcam() {
  const navigate = useNavigate();
  const webcamRef = useRef(null);
  const isMobile = window.matchMedia("(max-width:768px)").matches;
  const { registerData } = useContext(registerContext);
  const { loginData } = useContext(loginContext);
  const capture = async () => {
    const image = webcamRef.current.getScreenshot();

    const req = {
      image,
    };
    const result = await getAge(req);

    if (result.data.High >= 21) {
      const { email, phone } = registerData;
      if (email && phone) {
        const registerStatus = await registerApi(registerData);
        if (registerStatus.status == 200) {
          toast.success(`Registration Succesful`);
          setTimeout(() => {
            navigate("/signin");
          }, 2000);
        } else {
          toast.error(registerStatus.response.data);
        }
      } else {
        const loginStatus = await loginApi(loginData);
        if (loginStatus.status == 200) {
          sessionStorage.setItem("token", loginStatus.data.token);
          sessionStorage.setItem(
            "userDetails",
            JSON.stringify(loginStatus.data.existingUser)
          );
          toast.success(`Login Succesful`);
          setTimeout(() => {
            navigate("/Dashboard");
          }, 2000);
        } else {
          toast.error(loginStatus.response.data);
        }
      }
    }
  };

  return (
    <>
      <img
        src={logo}
        alt="logo"
        style={{ width: "100px", height: "125px" }}
        className="ms-5 mt-3"
      />
      <div className="d-flex flex-column align-items-center justify-content-center mb-5 w-100 px-3  mt-5 mt-md-0">
        <WebcamCapture
          audio={false}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          className={`rounded-3 ${isMobile && "w-100"}`}
        />
        <button
          className="mt-3 p-2 border-0 rounded-2 fs-5"
          style={{
            backgroundColor: primaryColor,
            color: "white",
            fontWeight: "600",
          }}
          onClick={capture}
        >
          Capture
        </button>
      </div>
      <Footer />
      <ToastContainer position="top-center" autoClose="2000" />
    </>
  );
}

export default Webcam;
