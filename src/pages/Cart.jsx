import React, { useContext, useEffect } from "react";
import UserHeader from "../components/UserHeader";
import { Row, Col } from "react-bootstrap";
import CartItem from "../components/CartItem";
import { primaryColor } from "../color";
import Footer from "../components/Footer";
import Address from "../components/Address";
import Price from "../components/Price";
import emptyCart from "../assets/emptyCart.gif";
import { cartContext } from "../context/DataShare";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { placeOrderApi } from "../services/allApi";
import { useNavigate } from "react-router-dom";
function Cart() {
  const { cartData, setCartData } = useContext(cartContext);
  const isMobile = window.matchMedia("(max-width:768px)").matches;
  const navigate = useNavigate();
  const handleOrder = async () => {
    const userDetails = JSON.parse(sessionStorage.getItem("userDetails"));
    const token = sessionStorage.getItem("token");
    const reqBody = {
      products: cartData,
      address:
        userDetails.name.charAt(0).toUpperCase() +
        userDetails.name.slice(1) +
        ", " +
        userDetails.address,
      userId: userDetails._id,
      mobile: userDetails.phone,
      total:
        cartData.reduce(
          (total, item) => total + item.price * (item.qty ?? 1),
          0
        ) + 200,
    };
    const reqHeader = {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    };
    const result = await placeOrderApi(reqBody, reqHeader);
    if (result.status == 200) {
      toast.success("Order Placed Succesfully");
      setCartData([]);
      setTimeout(() => {
        navigate("/Dashboard");
      }, 1000);
    }
  };

  return (
    <div>
      <UserHeader cart={true} />
      {cartData.length > 0 ? (
        <Row className="mx-0 w-100 d-flex justify-content-center align-items-center my-5">
          <Col md={10}>
            <Row className="d-flex mx-0 w-100  justify-content-evenly">
              <Col md={6} sm={12} className="shadow px-0 d-flex flex-column">
                <Address />
                {cartData.map((item) => (
                  <CartItem key={item._id} data={item} />
                ))}

                {!isMobile && (
                  <Row className="mx-0 d-flex justify-content-end align-items-center pb-3 pe-3">
                    <button
                      type="button"
                      className="p-2 border-0 rounded-2 fs-6 w-25 "
                      style={{
                        backgroundColor: primaryColor,
                        color: "white",
                        fontWeight: "600",
                      }}
                      onClick={handleOrder}
                    >
                      Place Order
                    </button>
                  </Row>
                )}
              </Col>
              <Col
                md={4}
                sm={12}
                style={{ minHeight: "250px" }}
                className={`shadow p-0 align-self-start ${isMobile && "mt-3"}`}
              >
                <Price />
              </Col>
              {isMobile && (
                <Row className="mx-0 d-flex justify-content-end align-items-center  mt-3">
                  <button
                    type="button"
                    className="p-2 border-0 rounded-2 fs-6 w-50 "
                    style={{
                      backgroundColor: primaryColor,
                      color: "white",
                      fontWeight: "600",
                    }}
                    onClick={handleOrder}
                  >
                    Place Order
                  </button>
                </Row>
              )}
            </Row>
          </Col>
        </Row>
      ) : (
        <Row className="mx-0 w-100 d-flex justify-content-center align-items-center mb-5">
          <img
            src={emptyCart}
            alt="emptyCart"
            style={{ width: "400px", height: "400px" }}
          />
        </Row>
      )}

      <Footer />
      <ToastContainer position="top-center" autoClose="2000" />
    </div>
  );
}

export default Cart;
