import axios from "axios";
import ParentService from "../ParentService";

class ContactService extends ParentService {
  async createNewData(data: any, thunkAPI: any) {
    try {
      const response = await axios.post(`${this.url}/create-contact`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as string);
    }
  }
  async getAllData(_: any, thunkAPI: any) {
    try {
      const response = await axios.get("http://localhost:8000/get-contacts");
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as string);
    }
  }
}

export const contactService = new ContactService();
