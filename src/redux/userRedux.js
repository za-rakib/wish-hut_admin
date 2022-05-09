import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: {
    currentUser: null,
    users: [],
    isFetching: false,
    error: false,
  },
  reducers: {
    //register
    registerStart: (state) => {
      state.isFetching = true;
    },
    registerSuccess: (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
    },
    registerFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    //   login
    loginStart: (state) => {
      state.isFetching = true;
    },
    loginSuccess: (state, action) => {
      state.isFetching = false;
      state.currentUser = action.payload;
    },
    loginFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
    // get all users
    getUsersStart: (state) => {
      state.isFetching = true;
    },
    getUsersSuccess: (state, action) => {
      state.isFetching = false;
      state.users = action.payload;
    },
    getUsersFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },

    //delete user
    deleteUserStart: (state) => {
      state.isFetching = true;
    },
    deleteUserSuccess: (state, action) => {
      state.isFetching = false;
      state.users.splice(
        state.users.findIndex((user) => user._id === action.payload.id),
        1
      );
    },
    deleteUserFailure: (state) => {
      state.isFetching = false;
      state.error = true;
    },
  },
});
export const {
  registerStart,
  registerSuccess,
  registerFailure,
  
  loginStart,
  loginSuccess,
  loginFailure,

  getUsersStart,
  getUsersSuccess,
  getUsersFailure,

  deleteUserStart,
  deleteUserSuccess,
  deleteUserFailure,
} = userSlice.actions;
export default userSlice.reducer;
