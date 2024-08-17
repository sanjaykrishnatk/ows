import { useContext, useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import { Row, Col } from "react-bootstrap";
import signupImg from "../assets/signupImg.png";
import { primaryColor } from "../color";
import upload from "../assets/upload.png";
import Footer from "../components/Footer";
import { addProductApi, editProductApi } from "../services/allApi";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { editContext } from "../context/DataShare";
import { serverUrl } from "../services/serverUrl";
import { useNavigate } from "react-router-dom";
function AddProduct({ edit }) {
  const { editData } = useContext(editContext);
  const isMobile = window.matchMedia("(max-width:768px)").matches;
  const [productDetails, setProductDetails] = useState({
    name: "",
    price: "",
    category: "",
    image: "",
  });
  const [preview, setPreview] = useState("");
  const [token, setToken] = useState("");
  const [key, setKey] = useState(0);
  const navigate = useNavigate();

  const handleImage = (e) => {
    setProductDetails({ ...productDetails, image: e.target.files[0] });
  };
  const handleReset = () => {
    setProductDetails({
      name: "",
      price: "",
      category: "",
      image: "",
    });
    setPreview("");
    setKey(1);
  };
  const handleAdd = async () => {
    const reqHeader = {
      Authorization: `Bearer ${token}`,
      "Content-Type": "multipart/form-data",
    };
    const { name, price, image, category } = productDetails;
    if (!name || !price || !image || !category) {
      toast.info("Please fill all required fields");
    } else {
      const reqBody = new FormData();
      reqBody.append("name", name);
      reqBody.append("price", price);
      reqBody.append("category", category);
      reqBody.append("image", image);

      const result = await addProductApi(reqBody, reqHeader);

      if (result.status == 200) {
        toast.success(`Product Added Succesfully`);
        handleReset();
      } else {
        toast.error(result.response.data);
        handleReset();
      }
    }
  };
  const handleEdit = async () => {
    const { name, price, image, category } = productDetails;
    if (!name || !price || !category) {
      toast.info("Please fill all required fields");
    } else {
      const reqHeader = {
        Authorization: `Bearer ${token}`,
        "Content-Type": "multipart/form-data",
      };
      const reqBody = new FormData();
      reqBody.append("name", name);
      reqBody.append("price", price);
      reqBody.append("category", category);
      image != "" && reqBody.append("image", image);

      const result = await editProductApi(reqBody, editData?._id, reqHeader);

      if (result.status == 200) {
        toast.success(`Product Updated Succesfully`);
        handleReset();
        setTimeout(() => {
          navigate("/admin");
        }, 1000);
      } else {
        toast.error(result.response.data);
        handleReset();
      }
    }
  };
  useEffect(() => {
    if (productDetails.image) {
      setPreview(URL.createObjectURL(productDetails.image));
    }
  }, [productDetails.image]);
  useEffect(() => {
    if (sessionStorage.getItem("token")) {
      setToken(sessionStorage.getItem("token"));
    }
  }, []);
  useEffect(() => {
    if (JSON.stringify(editData) != "{}") {
      setProductDetails({
        name: editData.name,
        price: editData.price,
        category: editData.category,
      });
      setPreview(`${serverUrl}/uploads/${editData.image}`);
    }
  }, [editData]);
  useEffect(() => {
    if (!edit) {
      handleReset();
    }
  }, [edit]);
  return (
    <>
      <AdminHeader />
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
                <label htmlFor="proImg">
                  <input
                    id="proImg"
                    type="file"
                    style={{ display: "none" }}
                    onChange={(e) => handleImage(e)}
                    key={key}
                  />
                  <img
                    src={preview ? preview : upload}
                    alt="no-image"
                    style={{ maxWidth: "130px", maxHeight: "130px" }}
                    className="mb-3"
                  />
                </label>
                <input
                  type="text"
                  placeholder="Product Name"
                  className={`form-control rounded-0 shadow border-0 fw-bold mb-4`}
                  style={{
                    width: isMobile ? "75vw" : "325px",
                    height: "45px",
                  }}
                  value={productDetails.name}
                  onChange={(e) =>
                    setProductDetails({
                      ...productDetails,
                      name: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Category"
                  className={`form-control rounded-0 shadow border-0 fw-bold mb-4`}
                  style={{
                    width: isMobile ? "75vw" : "325px",
                    height: "45px",
                  }}
                  value={productDetails.category}
                  onChange={(e) =>
                    setProductDetails({
                      ...productDetails,
                      category: e.target.value,
                    })
                  }
                />
                <input
                  type="text"
                  placeholder="Price"
                  className="form-control rounded-0 shadow border-0 fw-bold mb-4"
                  style={{
                    width: isMobile ? "75vw" : "325px",
                    height: "45px",
                  }}
                  value={productDetails.price}
                  onChange={(e) =>
                    setProductDetails({
                      ...productDetails,
                      price: e.target.value,
                    })
                  }
                />
                <div className="d-flex justify-content-evenly align-items-center">
                  <button
                    className="p-2 border-0 rounded-2 mb-4 me-2"
                    style={{
                      fontSize: isMobile ? "12px" : "16px",
                      backgroundColor: primaryColor,
                      color: "white",
                      fontWeight: "600",
                      width: isMobile ? "160px" : "150px",
                    }}
                    onClick={handleReset}
                  >
                    CANCEL
                  </button>
                  <button
                    className="p-2 border-0 rounded-2 mb-4 ms-2"
                    style={{
                      fontSize: isMobile ? "12px" : "16px",
                      backgroundColor: primaryColor,
                      color: "white",
                      fontWeight: "600",
                      width: isMobile ? "160px" : "150px",
                    }}
                    onClick={edit ? handleEdit : handleAdd}
                  >
                    {edit ? "EDIT PRODUCT" : "ADD PRODUCT"}
                  </button>
                </div>
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

export default AddProduct;
