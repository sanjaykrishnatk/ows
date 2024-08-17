import React, { useEffect, useState, useContext } from "react";
import { Row, Col } from "react-bootstrap";
import "./Dashboard.css";
import beerIcon from "../assets/beerIcon.png";
import whiskeyIcon from "../assets/whiskey.png";
import vodkaIcon from "../assets/vodka.png";
import wineIcon from "../assets/wine.png";
import allIcon from "../assets/all-2.png";
import Footer from "../components/Footer";
import UserHeader from "../components/UserHeader";
import Category from "../components/Category";
import { useNavigate } from "react-router-dom";
import { allProductApi } from "../services/allApi";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { searchContext } from "../context/DataShare";
function UserDashboard() {
  const { searchData } = useContext(searchContext);
  const [whiskey, setWhiskey] = useState([]);
  const [beer, setBeer] = useState([]);
  const [vodka, setVodka] = useState([]);
  const [wine, setWine] = useState([]);
  const [categoryValue, setCategoryValue] = useState("ALL");
  const navigate = useNavigate();
  const isMobile = window.matchMedia("(max-width:768px)").matches;

  const getProducts = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const products = await allProductApi(reqHeader);
      setWhiskey(
        products.data
          .filter((item) => item.category.toLowerCase() == "whiskey")
          .slice(0, 4)
      );
      setBeer(
        products.data
          .filter((item) => item.category.toLowerCase() == "beer")
          .slice(0, 4)
      );
      setVodka(
        products.data
          .filter((item) => item.category.toLowerCase() == "vodka")
          .slice(0, 4)
      );
      setWine(
        products.data
          .filter((item) => item.category.toLowerCase() == "wine")
          .slice(0, 4)
      );
    } else {
      navigate("/");
    }
  };
  useEffect(() => {
    getProducts();
  }, []);
  return (
    <>
      <UserHeader />
      <Row className="mx-0 w-100 d-flex justify-content-center align-items-center">
        <Col
          md={4}
          sm={12}
          className="d-flex justify-content-evenly align-items-center p-0"
        >
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div
              className="rounded-circle shadow d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "#f0ece3",
                height: `${isMobile ? "60px" : "80px"}`,
                width: `${isMobile ? "60px" : "80px"}`,
              }}
            >
              <img
                src={allIcon}
                alt="allIcon"
                style={{
                  width: `${isMobile ? "35px" : "50px"}`,
                  height: `${isMobile ? "35px" : "50px"}`,
                }}
                onClick={() => setCategoryValue("ALL")}
              />
            </div>
            <p className="fw-bold mb-0 mt-3">ALL</p>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div
              className="rounded-circle shadow d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "#f0ece3",
                height: `${isMobile ? "60px" : "80px"}`,
                width: `${isMobile ? "60px" : "80px"}`,
              }}
            >
              <img
                src={whiskeyIcon}
                alt="whiskey"
                style={{
                  width: `${isMobile ? "35px" : "50px"}`,
                  height: `${isMobile ? "35px" : "50px"}`,
                }}
                onClick={() => setCategoryValue("WHISKEY")}
              />
            </div>
            <p className="fw-bold mb-0 mt-3">Whiskey</p>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div
              className="rounded-circle shadow d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "#f0ece3",
                height: `${isMobile ? "60px" : "80px"}`,
                width: `${isMobile ? "60px" : "80px"}`,
              }}
            >
              <img
                src={beerIcon}
                alt="beerIcon"
                style={{
                  width: `${isMobile ? "35px" : "50px"}`,
                  height: `${isMobile ? "35px" : "50px"}`,
                }}
                onClick={() => setCategoryValue("BEER")}
              />
            </div>
            <p className="fw-bold mb-0 mt-3">Beer</p>
          </div>

          <div className="d-flex flex-column justify-content-center align-items-center">
            <div
              className="rounded-circle shadow d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "#f0ece3",
                height: `${isMobile ? "60px" : "80px"}`,
                width: `${isMobile ? "60px" : "80px"}`,
              }}
            >
              <img
                src={wineIcon}
                alt="wine"
                style={{
                  width: `${isMobile ? "35px" : "50px"}`,
                  height: `${isMobile ? "35px" : "50px"}`,
                }}
                onClick={() => setCategoryValue("WINE")}
              />
            </div>
            <p className="fw-bold mb-0 mt-3">Wine</p>
          </div>
          <div className="d-flex flex-column justify-content-center align-items-center">
            <div
              className="rounded-circle shadow d-flex justify-content-center align-items-center"
              style={{
                backgroundColor: "#f0ece3",
                height: `${isMobile ? "60px" : "80px"}`,
                width: `${isMobile ? "60px" : "80px"}`,
              }}
            >
              <img
                src={vodkaIcon}
                alt="vodka"
                style={{
                  width: `${isMobile ? "35px" : "50px"}`,
                  height: `${isMobile ? "35px" : "50px"}`,
                }}
                onClick={() => setCategoryValue("VODKA")}
              />
            </div>
            <p className="fw-bold mb-0 mt-3">Vodka</p>
          </div>
        </Col>
      </Row>
      {searchData.length > 0 ? (
        <Category category={"SEARCH RESULT"} search={searchData} />
      ) : (
        <>
          {categoryValue == "ALL" && (
            <>
              <Category category={"WHISKEY"} admin={false} whiskey={whiskey} />
              <Category category={"BEER"} admin={false} beer={beer} />
              <Category category={"WINE"} admin={false} wine={wine} />
              <Category category={"VODKA"} admin={false} vodka={vodka} />
            </>
          )}
          {categoryValue == "WHISKEY" && (
            <Category category={"WHISKEY"} admin={false} whiskey={whiskey} />
          )}
          {categoryValue == "BEER" && (
            <Category category={"BEER"} admin={false} beer={beer} />
          )}
          {categoryValue == "WINE" && (
            <Category category={"WINE"} admin={false} wine={wine} />
          )}
          {categoryValue == "VODKA" && (
            <Category category={"VODKA"} admin={false} vodka={vodka} />
          )}
        </>
      )}

      <Footer />
      <ToastContainer position="top-center" autoClose="800" />
    </>
  );
}

export default UserDashboard;
