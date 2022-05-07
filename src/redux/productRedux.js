import { createSlice } from "@reduxjs/toolkit";

const productSlice = createSlice({
  name: "product",
  initialState: {
    products: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //get all:
    getProductsStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    getProductsSuccess: (state, actions) => {
      state.isFetching = false;
      state.products = actions.payload;
    },
    getProductsFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    // delete product
    deleteProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    deleteProductSuccess: (state, actions) => {
      state.isFetching = false;
      state.products.splice(
        state.products.findIndex((item) => item._id === actions.payload.id),
        1
      );
    },
    deleteProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //update product
    updateProductStart: (state) => {
      state.isFetching = true;
      state.error = false;
    },
    updateProductSuccess: (state, actions) => {
      state.isFetching = false;
      state.products[
        state.products.findIndex((item) => item._id === actions.payload.id)
      ] = actions.payload.product;
    },
    updateProductFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

      //add product
     addProductStart: (state) => {
        state.isFetching = true;
        state.error = false;
      },
     addProductSuccess: (state, actions) => {
        state.isFetching = false;
        state.products.push(actions.payload);
      },
     addProductFailure: (state) => {
        state.isFetching = false;
        state.error = true;
      },
  },
});

export const {
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
} = productSlice.actions;
export default productSlice.reducer;
