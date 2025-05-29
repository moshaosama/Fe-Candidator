import { createSlice } from "@reduxjs/toolkit";
import { fetchEditProfile } from "../Actions/EditProfile";

const initialState = {
  result: {},
  loading: false,
  error: "",
};
const EditProfileSlice = createSlice({
  name: "EditProfile",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchEditProfile.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchEditProfile.fulfilled, (state, action) => {
      state.loading = false;
      state.result = action.payload;
    });
    builder.addCase(fetchEditProfile.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default EditProfileSlice.reducer;
