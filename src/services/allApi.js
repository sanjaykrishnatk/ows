import { commonApi } from "./commonApi";
import { serverUrl } from "./serverUrl";

export const getAge = async (reqBody) => {
  return await commonApi("POST", `${serverUrl}/ageverification`, reqBody);
};

//registration api
export const registerApi = async (reqBody) => {
  return await commonApi("POST", `${serverUrl}/register`, reqBody);
};
//login api
export const loginApi = async (reqBody) => {
  return await commonApi("POST", `${serverUrl}/login`, reqBody);
};
//admin login api
export const adminLoginApi = async (reqBody) => {
  return await commonApi("POST", `${serverUrl}/adminlogin`, reqBody);
};
//add products api
export const addProductApi = async (reqBody, reqHeader) => {
  return await commonApi("POST", `${serverUrl}/addproduct`, reqBody, reqHeader);
};
//get all products api
export const allProductApi = async (reqHeader) => {
  return await commonApi("GET", `${serverUrl}/allproducts`, "", reqHeader);
};
//edit products api
export const editProductApi = async (reqBody, id, reqHeader) => {
  return await commonApi(
    "POST",
    `${serverUrl}/editproduct/${id}`,
    reqBody,
    reqHeader
  );
};
//delete products api
export const deleteProductApi = async (id, reqHeader) => {
  return await commonApi(
    "DELETE",
    `${serverUrl}/deleteproduct/${id}`,
    {},
    reqHeader
  );
};
//add address controller
export const addAddressApi = async (id, reqBody, reqHeader) => {
  return await commonApi(
    "POST",
    `${serverUrl}/address/${id}`,
    reqBody,
    reqHeader
  );
};
//place order api
export const placeOrderApi = async (reqBody, reqHeader) => {
  return await commonApi("POST", `${serverUrl}/order`, reqBody, reqHeader);
};
//fetch user orders
export const getOrderApi = async (id, reqHeader) => {
  return await commonApi("GET", `${serverUrl}/order/${id}`, "", reqHeader);
};
//update order api
export const updateOrderApi = async (id, reqBody, reqHeader) => {
  return await commonApi(
    "POST",
    `${serverUrl}/updateorder/${id}`,
    reqBody,
    reqHeader
  );
};
//fetch all orders api
export const getAllOrdersApi = async (reqHeader) => {
  return await commonApi("GET", `${serverUrl}/allorder`, "", reqHeader);
};

//fetch all users api
export const getAllUsersApi = async (reqHeader) => {
  return await commonApi("GET", `${serverUrl}/allusers`, "", reqHeader);
};

//fetch category specific product
export const getCategoryProductApi = async (searchKey) => {
  return await commonApi(
    "GET",
    `${serverUrl}/productcategory?category=${searchKey}`
  );
};
//search product api
export const searchProductApi = async (searchKey) => {
  return await commonApi("GET", `${serverUrl}/productsearch?name=${searchKey}`);
};
//get trending products
export const trendingProductApi = async () => {
  return await commonApi("GET", `${serverUrl}/trendingproduct`);
};
