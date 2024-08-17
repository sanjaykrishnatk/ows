import React, { useContext, useEffect, useState } from "react";
import AdminHeader from "../components/AdminHeader";
import Footer from "../components/Footer";
import Category from "../components/Category";
import { allProductApi } from "../services/allApi";
import { useNavigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { deleteContext, searchContext } from "../context/DataShare";

function AdminDashboard() {
  const { searchData } = useContext(searchContext);
  const { deleteStatus } = useContext(deleteContext);
  const [whiskey, setWhiskey] = useState([]);
  const [beer, setBeer] = useState([]);
  const [vodka, setVodka] = useState([]);
  const [wine, setWine] = useState([]);
  const navigate = useNavigate();

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
  }, [deleteStatus]);

  return (
    <>
      {" "}
      <AdminHeader dashboard={true} />
      {searchData.length > 0 ? (
        <Category category={"SEARCH RESULT"} admin={true} search={searchData} />
      ) : (
        <>
          <Category category={"WHISKEY"} admin={true} whiskey={whiskey} />
          <Category category={"BEER"} admin={true} beer={beer} />
          <Category category={"WINE"} admin={true} wine={wine} />
          <Category category={"VODKA"} admin={true} vodka={vodka} />
        </>
      )}
      <Footer />
      <ToastContainer position="top-center" autoClose="2000" />
    </>
  );
}

export default AdminDashboard;
