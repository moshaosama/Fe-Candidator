import { createSlice } from "@reduxjs/toolkit";
import {
  fetchChangePassword,
  fetchUpdateProfile,
} from "../Actions/UpdateProfile";

const initialState = {
  newUser: "",
  loading: false,
  error: "",
};

const UpdateProfileSlice = createSlice({
  name: "UpdateProfile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchUpdateProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchUpdateProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.newUser = action.payload;
    });
    builder.addCase(fetchUpdateProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(fetchChangePassword.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchChangePassword.fulfilled, (state, action) => {
      state.loading = false;
      state.newUser = action.payload;
    });
    builder.addCase(fetchChangePassword.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default UpdateProfileSlice.reducer;
