import React, { useContext, useEffect } from "react";
import productImage from "../assets/jd.png";
import { primaryColor } from "../color";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { serverUrl } from "../services/serverUrl";
import { cartContext, deleteContext, editContext } from "../context/DataShare";
import { useNavigate } from "react-router-dom";
import { deleteProductApi } from "../services/allApi";
import { toast } from "react-toastify";

function DisplayCard({ admin, data, home }) {
  const { setEditData } = useContext(editContext);
  const { setDeleteStatus } = useContext(deleteContext);
  const { cartData, setCartData } = useContext(cartContext);
  const navigate = useNavigate();
  const handleEdit = (data) => {
    setEditData(data);
    navigate("/edit-product");
  };
  const handleDelete = async (id) => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      };
      const result = await deleteProductApi(id, reqHeader);
      if (result.status == 200) {
        toast.success("Product Deleted Succesfully");
        setDeleteStatus(true);
      }
    }
  };
  const handleCart = (product) => {
    setCartData([...cartData, product]);
    toast.success(`Product Added to Cart`);
  };
  useEffect(() => {}, [cartData]);
  return (
    <div
      className="shadow d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundColor: "#F4F4F4",
        width: "281px",
        minHeight: "370px",
      }}
    >
      <img
        src={`${serverUrl}/uploads/${data?.image}`}
        alt="productImage"
        // className="shadow"
        style={{
          maxWidth: "130px",
          height: "202px",
          filter: "drop-shadow(5px 5px 5px rgba(0, 0, 0, 0.5))",
        }}
      />
      <h5
        className="fw-bold text-center px-4 mt-2"
        style={{ color: "#333333" }}
      >
        {data?.name}
      </h5>
      <h5 className="fw-bold text-center" style={{ color: "#6FAE39" }}>
        ₹{data?.price}
      </h5>
      <div
        className={`d-flex align-items-center w-100 position-relative ${
          admin ? "px-5 justify-content-between" : "justify-content-center"
        }`}
        style={{ bottom: 0 }}
      >
        {!admin && (
          <>
            {!home && (
              <button
                type="button"
                className="p-2 border-0 rounded-2 fs-6"
                style={{
                  backgroundColor: primaryColor,
                  color: "white",
                  fontWeight: "600",
                }}
                onClick={() => handleCart(data)}
              >
                Add to Cart
              </button>
            )}
          </>
        )}
        {admin && (
          <button
            className="p-2 border-0 rounded-2 fs-6"
            style={{
              backgroundColor: primaryColor,
              color: "white",
              fontWeight: "600",
            }}
            onClick={() => handleEdit(data)}
          >
            Edit
          </button>
        )}
        {admin && (
          <button
            type="button"
            className="p-2 border-0 rounded-2 fs-6 btn"
            style={{
              fontWeight: "600",
            }}
            onClick={() => handleDelete(data?._id)}
          >
            <FontAwesomeIcon
              icon={faTrashCan}
              style={{ color: "#C30101", fontSize: "25px" }}
            />
          </button>
        )}
      </div>
    </div>
  );
}

export default DisplayCard;
