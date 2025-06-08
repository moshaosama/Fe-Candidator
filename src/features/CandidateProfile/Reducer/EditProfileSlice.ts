import { createSlice } from "@reduxjs/toolkit";
import { fetchEditProfile } from "../Actions/EditProfile";
import { fetchCreateSkill } from "../Actions/CreateSkill";
import { fetchGetSkill } from "../Actions/GetSkills";

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

    builder.addCase(fetchCreateSkill.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCreateSkill.fulfilled, (state, action) => {
      state.loading = false;
      state.result = action.payload;
    });
    builder.addCase(fetchCreateSkill.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });

    builder.addCase(fetchGetSkill.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGetSkill.fulfilled, (state, action) => {
      state.loading = false;
      state.result = action.payload;
    });
    builder.addCase(fetchGetSkill.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default EditProfileSlice.reducer;
