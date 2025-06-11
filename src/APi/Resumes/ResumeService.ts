import axios from "axios";
import ParentService from "../ParentService";

class ResumeService extends ParentService {
  async createNewData(data: any, thunkAPI: any) {
    try {
      const response = await axios.post(`${this.url}/upload-resume`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
  async getAllData(candidate_id?: number, thunkAPI?: any) {
    try {
      const response = await axios.get(
        `${this.url}/get-resume/${candidate_id}`
      );
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }
}

export const resumeService = new ResumeService();
