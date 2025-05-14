import { createSlice } from "@reduxjs/toolkit";
import { fetchCreateContact } from "../Actions/CreateContact";
import { fetchGetContact } from "../Actions/GetContact";

const initialState = {
  contact: [],
  loading: false,
  error: "",
};

const ContactSlice = createSlice({
  name: "Contact",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCreateContact.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchCreateContact.fulfilled, (state, action) => {
      state.loading = false;
      state.contact = action.payload;
    });
    builder.addCase(fetchCreateContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
    builder.addCase(fetchGetContact.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(fetchGetContact.fulfilled, (state, action) => {
      state.loading = false;
      state.contact = action.payload;
    });
    builder.addCase(fetchGetContact.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload as string;
    });
  },
});

export default ContactSlice.reducer;
