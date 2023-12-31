import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import axiosInstance from "../config";

export const loginUser = createAsyncThunk(
  "user/loginUser",
  async (userCredentials) => {
    const request = await axiosInstance.post(
        'http://127.0.0.1:8000/api/auth/login/',
      userCredentials,
    );
    const response = await request.data;
    console.log(request)
    localStorage.setItem("user", JSON.stringify(response));
    return response;
  }
);


const userSlice = createSlice({
  name: "user",
  initialState: {
    loading: false,
    user: null,  
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.user = null;
        state.error = null;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.user = action.payload;
        console.log(action.error.message);
        if (action.error.message === "Request failed with status code 401") {
          state.error = "Action Denied! Invalid Credentials";
        } else {
          state.error = action.error.message;
        }
        state.error = null;
      });
  },
});

export default userSlice.reducer;
