import React, { useContext, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import logo from "../assets/logo.png";
import usericon from "../assets/userIcon.png";
import cartImg from "../assets/Cart.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDolly, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import Badge from "react-bootstrap/Badge";
import "./Dashboard.css";
import { Link, useNavigate } from "react-router-dom";
import { cartContext } from "../context/DataShare";
import Dropdown from "react-bootstrap/Dropdown";
import { searchProductApi } from "../services/allApi";
import { searchContext } from "../context/DataShare";

function UserHeader({ cart }) {
  const { setSearchData } = useContext(searchContext);
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const handleSearch = async (value) => {
    const result = await searchProductApi(value);
    setSearchData(result.data);
    setSearchValue(value);
  };
  const isMobile = window.matchMedia("(max-width:768px)").matches;
  const { cartData } = useContext(cartContext);
  useEffect(() => {
    if (searchValue == "") {
      setSearchData([]);
    }
  }, [searchValue]);
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("userDetails");
    navigate("/");
  };
  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  return (
    <Row className="mx-0 w-100 d-flex  align-items-center">
      <Col md={4} sm={4} className="p-0">
        <Link to={"/Dashboard"}>
          <img
            src={logo}
            alt="logo"
            style={{ width: "100px", height: "125px" }}
            className="ms-5 mt-3"
          />
        </Link>
      </Col>
      {!isMobile && (
        <Col
          md={4}
          sm={4}
          className="d-flex p-0 align-items-center justify-content-center"
        >
          {!cart && (
            <input
              type="text"
              className="shadow border-0 rounded-2 p-3"
              placeholder="Search for Products, Brands and More"
              style={{ width: "450px", height: "40px", fontWeight: "400" }}
              onChange={(e) => handleSearch(e.target.value)}
            />
          )}
        </Col>
      )}
      <Col
        md={4}
        sm={4}
        className="px-5 d-flex align-items-center justify-content-around"
      >
        <div
          className={`d-flex align-items-center justify-content-around w-100 ${
            isMobile && "my-3"
          }`}
        >
          <Link to={"/cart"} style={{ textDecoration: "none" }}>
            <button
              type="button"
              className="border-0 bg-transparent d-flex align-items-center fw-bold"
            >
              <img
                src={cartImg}
                alt="cart"
                style={{ width: "40px", height: "40px" }}
                className="me-3"
              />
              <Badge
                bg="warning"
                className="rounded-circle cartCount"
                style={{ width: "25px" }}
              >
                {cartData?.length}
              </Badge>
              <span className="ms-3">Cart</span>
            </button>
          </Link>
          <Dropdown>
            <Dropdown.Toggle
              className="bg-transparent fw-bold border border-0"
              style={{ color: "#333333" }}
              id="dropdown-basic"
            >
              <img
                src={usericon}
                alt="usericon"
                style={{ width: "38px", height: "32px" }}
                className="me-3"
              />
              User
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                as={Link}
                to={"/Orders"}
                style={{ textDecoration: "none" }}
              >
                <FontAwesomeIcon icon={faDolly} className="me-2" />
                Orders
              </Dropdown.Item>
              <Dropdown.Item onClick={handleLogout}>
                <FontAwesomeIcon icon={faRightFromBracket} className="me-2" />
                Logout
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </Col>
    </Row>
  );
}

export default UserHeader;
