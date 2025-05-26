import axios from "axios";
import ParentService from "../ParentService";

class JobService extends ParentService {
  async createNewData(data: any, thunkAPI: any) {
    try {
      const response = await axios.post(`${this.url}/create-job`, data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  }

  async getAllData(_?: any, thunkAPI?: any) {
    try {
      const response = await axios.get(`${this.url}/get-jobs`);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error as string);
    }
  }
  async getJobById(jobId: number, thunkAPI: any) {
    try {
      const response = await axios.get(`${this.url}/get-job-by-id/${jobId}`);
      return response.data;
    } catch (err) {
      return thunkAPI.rejectWithValue(err as string);
    }
  }
}

export const jobService = new JobService();
