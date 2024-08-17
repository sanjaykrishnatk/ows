import { useContext, useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import DisplayCard from "./DisplayCard";
import { categoryContext } from "../context/DataShare";
import { useNavigate } from "react-router-dom";

function Category({
  category,
  admin,
  whiskey,
  beer,
  wine,
  vodka,
  search,
  home,
  trending,
}) {
  const { setCategory } = useContext(categoryContext);
  const navigate = useNavigate();
  const isMobile = window.matchMedia("(max-width:768px)").matches;
  const [product, setProduct] = useState([]);
  const handleAllProducts = () => {
    setCategory(category);
    if (admin) {
      navigate("/admin-allproducts");
    } else {
      navigate("/allproducts");
    }
  };
  useEffect(() => {
    if (category == "WHISKEY") {
      setProduct(whiskey);
    } else if (category == "BEER") {
      setProduct(beer);
    } else if (category == "WINE") {
      setProduct(wine);
    } else if (category == "VODKA") {
      setProduct(vodka);
    } else if (category == "SEARCH RESULT") {
      setProduct(search);
    } else if (category == "TRENDING PRODUCTS") {
      setProduct(trending);
    }
  }, [category, admin, whiskey, beer, wine, vodka, search, trending]);
  return (
    <>
      <Row
        className="ms-0 me-0 w-100 d-flex justify-content-center align-items-center mb-5"
        data-aos="fade-up"
        data-aos-duration="500"
      >
        <Row className="mx-0 w-100 d-flex justify-content-center align-items-center">
          {" "}
          <Col md={6} className={`${home && "px-0"}`}>
            {!home && (
              <h5
                className={`fw-bold mt-5 ${isMobile && "text-center"}`}
                style={{ color: "#333333" }}
              >
                {category}
              </h5>
            )}
            {home && (
              <h4
                className={`fw-bold mt-5 ${isMobile && "text-center"}`}
                style={{ color: "#333333" }}
              >
                {category}
              </h4>
            )}
          </Col>
          {!isMobile && (
            <Col md={4}>
              {!home && (
                <h5
                  className={`fw-bold mt-5 ${
                    isMobile && "text-center"
                  } text-end`}
                  style={{ color: "#333333", cursor: "pointer" }}
                  onClick={handleAllProducts}
                >
                  VIEW MORE →
                </h5>
              )}
            </Col>
          )}
        </Row>
        <Col md={10} sm={12} className="p-0">
          <Row className="ms-0 me-0 w-100 p-0 d-flex">
            {product?.map((item) => (
              <Col
                key={item._id}
                md={3}
                sm={12}
                className="p-0 d-flex justify-content-center align-items-center pt-5"
              >
                <DisplayCard admin={admin} data={item} home={home} />
              </Col>
            ))}
          </Row>
          {isMobile && (
            <>
              {!home && (
                <h5
                  className={`fw-bold mt-5 ${
                    isMobile && "text-center"
                  } text-end`}
                  style={{ color: "#333333" }}
                  onClick={handleAllProducts}
                >
                  VIEW MORE →
                </h5>
              )}
            </>
          )}
        </Col>
      </Row>
    </>
  );
}

export default Category;
