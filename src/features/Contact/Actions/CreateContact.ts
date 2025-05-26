import { createAsyncThunk } from "@reduxjs/toolkit";
import { ContactData } from "../Types/ContactData";
import { contactService } from "../../../APi/Contact/ContactService";

export const fetchCreateContact = createAsyncThunk(
  "Contact/fetchCreateContact",
  async (data: ContactData, thunkAPI) => {
    return contactService.createNewData(data, thunkAPI);
  }
);
