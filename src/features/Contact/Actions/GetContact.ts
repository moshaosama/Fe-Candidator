import { createAsyncThunk } from "@reduxjs/toolkit";
import { contactService } from "../../../APi/Contact/ContactService";

export const fetchGetContact = createAsyncThunk(
  "Contact/fetchGetContact",
  async (_, thunkAPI) => {
    return contactService.getAllData(_, thunkAPI);
  }
);
