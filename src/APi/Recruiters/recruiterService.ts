import axios from "axios";
import ParentService from "../ParentService";

class RecruiterService extends ParentService {
  async createNewData(data: any, thunkAPI: any) {
    try {
      const response = await fetch(`${this.url}/create-recruiter`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        const errorData = await response.json();
        return thunkAPI.rejectWithValue(errorData.message || "Request failed");
      }

      const result = await response.json();
      return result;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
  async getAllData(_?: any, thunkAPI?: any) {
    try {
      const response = await axios.get(`${this.url}/get-recruiter`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
  async deleteRecruiterbyid(id: number, thunkAPI: any) {
    try {
      const response = await axios.delete(
        `${this.url}/delete-recruiter-by-id/${id}`
      );
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err as string);
    }
  }
}

export const recruiterService = new RecruiterService();
