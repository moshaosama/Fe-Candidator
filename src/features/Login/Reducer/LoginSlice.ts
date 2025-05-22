import { createSlice } from "@reduxjs/toolkit";
import { fetchLogin } from "../Action/Login";

const initialState = {
  User: {},
  error: "",
  loading: false,
};

const LoginSlice = createSlice({
  name: "Login",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.loading = false;
      state.User = action.payload;
    });
    builder.addCase(fetchLogin.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default LoginSlice.reducer;
