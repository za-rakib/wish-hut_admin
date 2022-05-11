import { publicRequest, userRequest } from "../requestMethod";
import {
  getProductsStart,
  getProductsSuccess,
  getProductsFailure,
  deleteProductStart,
  deleteProductSuccess,
  deleteProductFailure,
  updateProductStart,
  updateProductSuccess,
  updateProductFailure,
  addProductStart,
  addProductSuccess,
  addProductFailure,
} from "./productRedux";
import {
  registerStart,
  registerSuccess,
  registerFailure,
  loginFailure,
  loginStart,
  loginSuccess,
  getUsersStart,
  getUsersSuccess,
  getUsersFailure,
  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
} from "./userRedux";

//register
export const register = async (dispatch, user) => {
  dispatch(registerStart());
  try {
    const res = await publicRequest.post("/auth/register", user);
    console.log(res.data);
    dispatch(registerSuccess(res.data));
  } catch {
    dispatch(registerFailure());
  }
};

//login
export const login = async (dispatch, user) => {
  dispatch(loginStart());
  try {
    const res = await publicRequest.post("/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch (error) {
    dispatch(loginFailure());
  }
};

// all users
export const getUsers = async (dispatch) => {
  dispatch(getUsersStart());
  try {
    const res = await userRequest.get("/users");
    //console.log("users",res.data);
    dispatch(getUsersSuccess(res.data));
  } catch {
    dispatch(getUsersFailure());
  }
};

// delete  user
export const deleteUser = async (id, dispatch) => {
  dispatch(deleteUserStart());
  try {
    const res = await userRequest.delete(`/users/${id}`);
    dispatch(deleteUserSuccess(res.data));
  } catch {
    dispatch(deleteUserFailure());
  }
};

// all products
export const getProducts = async (dispatch) => {
  dispatch(getProductsStart());
  try {
    const res = await publicRequest.get("/products");
    dispatch(getProductsSuccess(res.data));
  } catch (error) {
    dispatch(getProductsFailure());
  }
};

// delete product
export const deleteProduct = async (id, dispatch) => {
  // console.log(id)
  dispatch(deleteProductStart());
  try {
    const res = await userRequest.delete(`/products/${id}`);
    dispatch(deleteProductSuccess(res));
  } catch (error) {
    dispatch(deleteProductFailure());
  }
};

// update product
export const updatedProduct = async (product, id, dispatch) => {
  // console.log(id)
  dispatch(updateProductStart());
  try {
    const res = await userRequest.put(`/products/${id}`, product);
    if (res.data) {
      alert("Product updated successfully");
    }
    dispatch(updateProductSuccess(res));
  } catch (error) {
    dispatch(updateProductFailure());
  }
};

// add product
export const addProduct = async (product, dispatch) => {
  // console.log(id)
  dispatch(addProductStart());
  try {
    const res = await userRequest.post(`/products/`, product);
    if (res.data) {
      alert("Product added successfully");
    }
    dispatch(addProductSuccess(res.data));
  } catch (error) {
    dispatch(addProductFailure());
  }
};
