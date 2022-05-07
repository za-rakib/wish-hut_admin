import { publicRequest,userRequest } from "../requestMethod";
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
import { loginFailure, loginStart, loginSuccess } from "./userRedux";

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
export const deleteProduct = async (id,dispatch) => {
   // console.log(id)
    dispatch(deleteProductStart());
    try {
      const res = await userRequest.delete(`/products/${id}`);
      dispatch( deleteProductSuccess(res));
    } catch (error) {
      dispatch(deleteProductFailure());
    }
  };

// update product
  export const updatedProduct = async (product,id,dispatch) => {
    // console.log(id)
     dispatch(updateProductStart());
     try {
       const res = await userRequest.put(`/products/${id}`);
       dispatch( updateProductSuccess(res));
     } catch (error) {
       dispatch(updateProductFailure());
     }
   };

// add product
   export const addProduct = async (product,dispatch) => {
    // console.log(id)
     dispatch(addProductStart());
     try {
       const res = await userRequest.post(`/products/`,product);
       dispatch(addProductSuccess(res.data));
     } catch (error) {
       dispatch(addProductFailure());
     }
   };