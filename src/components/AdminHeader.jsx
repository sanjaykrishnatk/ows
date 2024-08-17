import React, { useContext, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import logo from "../assets/logo.png";
import usericon from "../assets/userIcon.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBox,
  faDolly,
  faRightFromBracket,
  faUserGroup,
} from "@fortawesome/free-solid-svg-icons";
import "./Dashboard.css";
import { Link, useNavigate } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import { searchProductApi } from "../services/allApi";
import { searchContext } from "../context/DataShare";

function AdminHeader({ dashboard }) {
  const { setSearchData } = useContext(searchContext);
  const isMobile = window.matchMedia("(max-width:768px)").matches;
  const [searchValue, setSearchValue] = useState("");
  const navigate = useNavigate();
  const handleSearch = async (value) => {
    const result = await searchProductApi(value);
    setSearchData(result.data);
    setSearchValue(value);
  };
  const handleLogout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("adminDetails");
    navigate("/");
  };
  useEffect(() => {
    if (searchValue == "") {
      setSearchData([]);
    }
  }, [searchValue]);
  useEffect(() => {
    if (!sessionStorage.getItem("token")) {
      navigate("/");
    }
  }, []);
  return (
    <Row className="mx-0 w-100 d-flex  align-items-center justify-content-between">
      <Col md={4} sm={4} className="p-0">
        <Link to={"/admin"}>
          <img
            src={logo}
            alt="logo"
            style={{ width: "100px", height: "125px" }}
            className="ms-5 mt-3"
          />
        </Link>
      </Col>
      {dashboard && (
        <Col
          md={4}
          sm={4}
          className="d-flex p-0 align-items-center justify-content-center"
        >
          {!isMobile && (
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
        <div className="dropdown d-flex flex-column position relative px-4">
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
              Admin
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item
                as={Link}
                to={"/admin-orders"}
                style={{ textDecoration: "none" }}
              >
                <FontAwesomeIcon icon={faDolly} className="me-2" />
                Manage Orders
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to={"/admin-product"}
                style={{ textDecoration: "none" }}
              >
                <FontAwesomeIcon icon={faBox} className="me-2" />
                Add Product
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to={"/admin"}
                style={{ textDecoration: "none" }}
              >
                <FontAwesomeIcon icon={faBox} className="me-2" />
                Manage Product
              </Dropdown.Item>
              <Dropdown.Item
                as={Link}
                to={"/admin-users"}
                style={{ textDecoration: "none" }}
              >
                <FontAwesomeIcon icon={faUserGroup} className="me-2" />
                Users
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

export default AdminHeader;
