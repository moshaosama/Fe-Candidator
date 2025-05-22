import { createSlice } from "@reduxjs/toolkit";
import { fetchSignUp } from "../Action/SignUp";

const initialState = {
  User: {},
  error: "",
  loading: false,
};

const SignUpSlice = createSlice({
  name: "SignUp",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSignUp.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchSignUp.fulfilled, (state, action) => {
      state.loading = false;
      state.User = action.payload;
    });
    builder.addCase(fetchSignUp.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default SignUpSlice.reducer;
