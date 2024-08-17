import React, { useContext, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import logo from "../assets/logo.png";
import usericon from "../assets/userIcon.png";
import cart from "../assets/Cart.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Badge from "react-bootstrap/Badge";
import DisplayCard from "../components/DisplayCard";
import Footer from "../components/Footer";
import UserHeader from "../components/UserHeader";
import { categoryContext } from "../context/DataShare";
import { getCategoryProductApi } from "../services/allApi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminHeader from "../components/AdminHeader";
function ProductCategory({ admin }) {
  const { category } = useContext(categoryContext);
  const [products, setProducts] = useState([]);
  const isMobile = window.matchMedia("(max-width:768px)").matches;
  const getCategoryProducts = async () => {
    if (category != "") {
      const result = await getCategoryProductApi(category);
      setProducts(result.data);
    }
  };
  useEffect(() => {
    getCategoryProducts();
  }, []);
  return (
    <>
      {admin ? <AdminHeader /> : <UserHeader />}

      <div className="mb-5">
        <h5
          className={`fw-bold mt-5 ${isMobile && "text-center"}`}
          style={{ marginLeft: !isMobile && "145px", color: "#333333" }}
        ></h5>
        <Row className="ms-0 me-0 w-100 d-flex justify-content-center align-items-center">
          <Col md={10} sm={12} className="p-0">
            <Row className="ms-0 me-0 w-100 p-0 d-flex ">
              {products.map((item, index) => (
                <Col
                  key={index}
                  md={3}
                  sm={12}
                  className="p-0 d-flex justify-content-center align-items-center pt-5"
                >
                  <DisplayCard admin={admin} data={item} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </div>
      <Footer />
      <ToastContainer position="top-center" autoClose="800" />
    </>
  );
}

export default ProductCategory;
