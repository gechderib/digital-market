import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const signupUrl = "http://localhost:5000/api/dmfsse/signup";

const initialState = { status: "idle", error: null };
// idle | loading | succeeded | failed

export const addNewUser = createAsyncThunk(
  "signup/addNewUser",
  async (initialData) => {
    try {
      const response = await axios.post(signupUrl, initialData);
      return response.data;
    } catch (err) {
      return err.message;
    }
  }
);

const signupSlice = createSlice({
  name: "signup",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(addNewUser.pending, (state, action) => {
        state.status = "loading";
      })
      .addCase(addNewUser.fulfilled, (state, action) => {
        state.status = "succeeded";
      })
      .addCase(addNewUser.rejected, (state, action) => {
        state.status = "failed";
        state.err = action.payload;
      });
  },
});


// export const {} = signupSlice.actions;
export const getStatus = (state) => state.users.status
export const getError = (state) => state.users.error

export default signupSlice.reducer;